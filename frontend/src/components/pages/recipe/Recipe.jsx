import { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = () => {
  const [image, setImage] = useState(null); 
  const id=null
  useEffect(() => {
    if (!id) return;

    axios.get(`/api/product/${id}`, { responseType: 'blob' }) 
      .then((response) => {
        const imageURL = URL.createObjectURL(response.data); 
        setImage(imageURL);
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  }, [id]); 

  return (
    <div className="carousel-item relative w-full max-h-[calc(100vh-4rem)]">
      {image ? (
        <img
          src={image} 
          alt="Slide"
          className="w-full object-cover"
        />
      ) : (
        <p>Loading image...</p> 
      )}
    </div>
  );
};

export default Recipe;
