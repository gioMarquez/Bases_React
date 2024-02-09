import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setiImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setiImages(newImages);
    console.log(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} //Envia todos los atributos de imagen
          />
        ))}
      </div>
    </>
  );
};
