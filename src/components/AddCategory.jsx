import { useState } from "react";

export const AddCategory = (setCategories) => {
  const [inputValue, setInputValue] = useState("One Punch Man");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;

    setCategories( categories => [ inputValue, ...categories ]);

  };

   const handleKeyDown = (e) => {
    if (e.keyCode === 13) {  //Se dispara con el codigo de "Enter"
      console.log(inputValue);
    }
  };

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
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
