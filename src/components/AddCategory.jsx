import { useState } from "react";

export const AddCategory = (setCategories) => {
  const [inputValue, setInputValue] = useState("One Punch Man");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setCategories(categories => [inputValue, ...categories])
  };

  return (
    <input
      type="text"
      placeholder="Buscar gifs..."
      value={inputValue}
      onChange={onInputChange}
    />
  );
};
