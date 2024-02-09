import { useState } from "react";

export const AddCategory = ({ onNewCategory, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    //Se dispara con la tecla "Enter"
    if (e.keyCode === 13) {
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};
