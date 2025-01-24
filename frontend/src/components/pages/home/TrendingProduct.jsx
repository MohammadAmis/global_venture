import { useEffect,useState } from "react";
import Card_Product from "./Card_Product";
import { fetchData } from "./fetchData";


const TrendingProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchData(4).then(data => setProducts(data))
  },[])


  return (
    <section className="max-w-7xl mx-auto mt-4 grid grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5 justify-items-center">
      {products.map((product) => (
        <Card_Product key={product._id} product={product} />
      ))}
    </section>
  );
};

export default TrendingProduct;
