import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  //Hooks de react que actualizan el estado
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(['Shingeki no Kiojin', ...categories]);
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-emerald-800">GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories = { setCategories }/>


      {/* Listado de Gif */}
      
      <ol>
        {categories.map(category => {
          return (
            <li key={ category }> { category }</li>
          );
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
