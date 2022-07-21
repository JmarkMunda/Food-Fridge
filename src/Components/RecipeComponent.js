import React, { useContext } from "react";
import { RecipeContainer } from "../styles/recipeStyles";
import { FoodContext } from "../Context/GlobalContext";
import { Header, Navigation, NavIcon, TitleBox } from "../styles/headerStyles";
import { FaTimes } from "react-icons/fa";

const RecipeComponent = () => {
  const { toggleRecipe, setToggleRecipe } = useContext(FoodContext);

  return (
    <RecipeContainer toggleRecipe={toggleRecipe}>
      <Header>
        <Navigation>
          <h1>Recipe</h1>
          <NavIcon>
            <FaTimes onClick={() => setToggleRecipe(false)} />
          </NavIcon>
        </Navigation>
        <p>You have 20 Recipes</p>
      </Header>
      <TitleBox>
        <h4>Hamburger</h4>
        <div>
          <p>Blablablalbal</p>
          <p>5 mins</p>
        </div>
      </TitleBox>
    </RecipeContainer>
  );
};

export default RecipeComponent;
