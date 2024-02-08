import React from "react";
import { useState } from "react";

export const GifExpertApp = () => {
  //Hooks de react que actualizan el estado
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = () => {
        setCategories(['SNK',...categories])
    }
  return (
    <>
      <h1 className="text-3xl font-bold text-emerald-800">GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <button className="bg-green-800 text-white font-bold p-2 " onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category, index) => {
          return <li key={index}> { index = index + 1 } {category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
