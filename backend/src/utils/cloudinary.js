import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Retry logic for Cloudinary uploads
const uploadWithRetry = async (filePath, retries = 3, resourceType = "auto") => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt}: Uploading to Cloudinary`);
      return await cloudinary.uploader.upload(filePath, {
        resource_type: resourceType,
      });
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);
      if (attempt === retries) throw new Error("Failed after multiple attempts");
    }
  }
};

// Main upload function
const uploadOnCloudinary = async (localFilePath, resourceType = "auto") => {
  try {
    if (!localFilePath) throw new Error("Local file path is required");

    // Validate the file path
    const fileExists = await fs.stat(localFilePath).catch(() => false);
    if (!fileExists) throw new Error(`File does not exist: ${localFilePath}`);

    // Use retry logic for the upload
    const response = await uploadWithRetry(localFilePath, 3, resourceType);
    return {
      url: response.secure_url,
      publicId: response.public_id,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload file to Cloudinary");
  } finally {
    // Safely delete the local file
    if (localFilePath && (await fs.stat(localFilePath).catch(() => false))) {
      await fs.unlink(localFilePath);
    }
  }
};

export { uploadOnCloudinary };
