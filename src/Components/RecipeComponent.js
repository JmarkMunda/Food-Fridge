import React, { useContext } from "react";
import { RecipeContainer } from "../styles/recipeStyles";
import { FoodContext } from "../Context/GlobalContext";
import { Navigation } from "../styles/headerStyles";
import { FaTimes } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";

const TitleBox = styled.div`
  transform: translateY(-50%);
  background-color: #fff;
  width: 90%;
  box-shadow: 0 1px 4px gray;
  padding: 0.8rem;
  margin: 0 auto;
`;

const RecipeImage = styled.img`
  position: relative;
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

const RecipeIcon = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  background-color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 50%;
`;

const IngredientsContainer = styled.ul`
  padding: 1rem;
`;

const Ingredient = styled.li`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const IngredientText = styled.div`
  padding: 0 1rem;
  display: flex;
`;

const IngredientImage = styled.img`
  object-fit: contain;
  height: 5rem;
`;

const IngredientIcon = styled.span`
  color: #3cb371;
  margin-right: 0.5rem;
`;

const RecipeComponent = () => {
  const { toggleRecipe, setToggleRecipe, food } = useContext(FoodContext);
  const { recipe } = food;

  return (
    <RecipeContainer toggleRecipe={toggleRecipe}>
      <Navigation>
        {recipe && <RecipeImage src={recipe.image} alt="Food" />}
        <RecipeIcon onClick={() => setToggleRecipe(false)}>
          <FaTimes />
        </RecipeIcon>
      </Navigation>
      <TitleBox>
        {/* Food name */}
        {recipe && <h4>{recipe.label}</h4>}
        <IngredientText>
          {/* Meal type */}
          {recipe &&
            recipe.mealType.map((data, index) => <p key={index}>{data}</p>)}
          {/* Dish Type */}
          {recipe &&
            recipe.dishType.map((data, index) => <p key={index}>{data}</p>)}
        </IngredientText>
      </TitleBox>
      <IngredientsContainer>
        <h4>Ingredients: </h4>
        {recipe &&
          recipe.ingredients.map((item) => {
            const { text, image, foodId } = item;
            return (
              <article key={foodId}>
                <Ingredient>
                  <div style={{ display: "flex" }}>
                    <IngredientIcon>
                      <BsCheckCircleFill />
                    </IngredientIcon>
                    <p>{text}</p>
                  </div>
                  <IngredientImage src={image} />
                </Ingredient>
              </article>
            );
          })}
      </IngredientsContainer>
    </RecipeContainer>
  );
};

export default RecipeComponent;
