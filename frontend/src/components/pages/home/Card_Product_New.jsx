import PropTypes from 'prop-types'; // Import PropTypes
const Card_Product_New = ({ product }) => {
  const calculateDiscount = (original, discounted) => {
    return Math.round(((original - discounted) / original) * 100);
  };

  const addToCart=(id)=>{
    alert("Product added to Cart ID : "+id);
  }

  const buyNow=(id)=>{
    alert("Product buy Now ID : "+id);
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-95">
      <div className="relative aspect-w-1 aspect-h-1">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1560393464-5c69a73c5770";
          }}
        />
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {calculateDiscount(product.price, product.discount_price)}% OFF
        </div>
      </div>
      <div className="card-body bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-lg">
        <h2 className="text-black card-title capitalize">{product.name}</h2>
        <p>
          <span className="line-through text-gray-400">₹{product.price}</span>{" "}
          <span className="text-black text-xl font-bold">₹{product.discount_price}</span>
        </p>
        <div className="card-actions justify-center my-2 mb-0 gap-4">
          <button className="btn text-black hover:text-white bg-transparent"
          onClick={()=>addToCart(product._id)}
          >
            Add To Cart
          </button>
          <button className="btn text-white hover:text-black hover:bg-transparent"
          onClick={()=>buyNow(product._id)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes to validate the 'product' prop
Card_Product_New.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount_price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card_Product_New;