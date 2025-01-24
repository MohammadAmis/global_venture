import { useState, useEffect } from "react";
import Carousel from '../home/Carousel'
import TrendingProduct from '../home/TrendingProduct'
import Testimonial from '../home/testimonial/Testimonial'
import {FaArrowUp} from 'react-icons/fa';




const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className=''>
      <Carousel/>
      <div className='max-w-7xl mx-auto mt-4 py-4  text-center text-xl   text-black  md:text-4xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'>
          Trending Products
      </div>
      <TrendingProduct/>
      <div className=' max-w-7xl mx-auto mt-4 text-center text-xl  text-black p-4 md:text-4xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'>
          Clients Reviews
      </div>
      <Testimonial/>

      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`${
          showScrollTop ? "opacity-100" : "opacity-0"
        } fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        aria-label="Scroll to top"
      ><FaArrowUp />
      </button>

    </div>
  )
}

export default Home;


      