import React, { createContext, useState } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const [timeoutId, setTimeoutId] = useState();
  const [foodList, setFoodList] = useState([]);
  const [toggleBasket, setToggleBasket] = useState(false);
  const [toggleRecipe, setToggleRecipe] = useState(false);

  return (
    <FoodContext.Provider
      value={{
        timeoutId,
        setTimeoutId,
        foodList,
        setFoodList,
        toggleBasket,
        setToggleBasket,
        toggleRecipe,
        setToggleRecipe,
      }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodProvider };
