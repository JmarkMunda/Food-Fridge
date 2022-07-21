import React from "react";
import styled from "styled-components";
import BasketComponent from "./Components/BasketComponent";
import FoodFridgeComponent from "./Components/FoodFridgeComponent";
import RecipeComponent from "./Components/RecipeComponent";
import { FoodProvider } from "./Context/GlobalContext";

const Container = styled.div`
  display: flex;
  background-color: pink;
`;

function App() {
  return (
    <FoodProvider>
      <Container>
        {/* Sidebar */}
        <BasketComponent />
        {/* Food Container */}
        <FoodFridgeComponent />
        {/* Recipe */}
        <RecipeComponent />
      </Container>
    </FoodProvider>
  );
}

export default App;
