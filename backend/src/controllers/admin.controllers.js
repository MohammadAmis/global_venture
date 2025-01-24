import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import Product from "../models/product.models.js";
import Order from "../models/order.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


export const uploadProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    category,
    price,
    purchasing_price,
    discount_price,
    stock,
  } = req.body;

  // Validate required fields
  // if (
  //   [name, description, category].some((field) => typeof field !== "string" || field.trim() === "") ||
  //   [price, purchasing_price, discount_price, stock].some((field) => typeof field !== "number" || field <= 0)
  // ) {
  //   throw new ApiError(400, "All fields are required and must be valid");
  // }

  // Check for existing product
  const existedProduct = await Product.findOne({ name });
  if (existedProduct) {
    throw new ApiError(409, "Product already exists");
  }

  // Validate file upload
  const file = req.file; // For single file upload
  if (!file) {
    throw new ApiError(400, "Image file is required");
  }

  // Upload image to Cloudinary
  const image = await uploadOnCloudinary(file.path);
  if (!image || !image.url) {
    throw new ApiError(500, "Image uploading failed on Cloudinary");
  }

  // Save product data to DB
  const newProduct = new Product({
    name,
    description,
    category,
    price,
    purchasing_price,
    discount_price,
    stock,
    image: image.url, // Generate a unique custom ID if required
  });
  
  const product = await newProduct.save();

  if (!product) {
    throw new ApiError(500, "Something went wrong while saving the product");
  }

  return res.status(201).json(
    new ApiResponse(201, product, "Product uploaded successfully")
  );
});

export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    category,
    price,
    purchasing_price,
    discount_price,
    stock,
  } = req.body;

  const file = req.file; // For single file upload

  // Find the existing product by ID
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  // If a new image is uploaded, upload it to Cloudinary
  let imageUrl = product.image;  // Keep the old image if no new image is uploaded
  if (file) {
    imageUrl = await uploadOnCloudinary(file.path);
    if (!imageUrl || !imageUrl.url) {
      throw new ApiError(500, "Image uploading failed on Cloudinary");
    }
  }

  // Update product details (only update the fields provided in the request)
  product.name = name || product.name;
  product.description = description || product.description;
  product.category = category || product.category;
  product.price = price || product.price;
  product.purchasing_price = purchasing_price || product.purchasing_price;
  product.discount_price = discount_price || product.discount_price;
  product.stock = stock || product.stock;
  product.image = imageUrl || product.image;

  // Save the updated product
  const updatedProduct = await product.save();

  if (!updatedProduct) {
    throw new ApiError(500, "Something went wrong while updating the product");
  }

  return res.status(200).json(new ApiResponse(200, updatedProduct, "Product updated successfully"));
});

export const fetchedProduct= asyncHandler(async(req,res)=>{
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.log("Error in Fetching Product", error);
  }
  
})

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json(new ApiResponse(404, null, "Product not found"));
    }
    res.json(result);
  } catch (error) {
    console.log("Error in Deleting Product", error);
    res.status(500).json({ message: "Error in deleting product", error });
  }
});

export const fetchedOrder=asyncHandler(async(req,res)=>{
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    console.error("ERROR IN FETCHING ORDER ---",error)
  }
})

export const fetchPaymentMethod=asyncHandler(async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: "$payment_method",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          payment_method: "$_id",
          count: 1
        }
      }
    ]);

    res.status(200).json(result);
  } catch (err) {
    console.error('Error during aggregation:', err);
    res.status(500).json({ error: "An error occurred while fetching payment method counts." });
  }
});