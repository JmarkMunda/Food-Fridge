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
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
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

const IngredientHeader = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IngredientText = styled.div`
  display: flex;
  margin-right: 0.8rem;
`;

const IngredientImage = styled.img`
  object-fit: contain;
  height: 5rem;
`;

const IngredientIcon = styled.span`
  color: #3cb371;
  margin-right: 0.5rem;
`;

const FullRecipeButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
  color: green;
  background-color: #fff;
  border: 1px solid green;
  border-radius: 0.5rem;
  transition: all 0.2s linear;
  width: 100%;
  &:hover {
    background-color: green;
    color: #fff;
  }
`;

export const FullDetailsLink = styled.span`
  margin-top: 0.3rem;
  font-style: italic;
  font-size: 0.5rem;
  color: gray;
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
        <IngredientHeader>
          {/* Meal type */}
          {recipe &&
            recipe.mealType.map((data, index) => <p key={index}>{data}</p>)}
          {/* Dish Type */}
          {recipe &&
            recipe.dishType.map((data, index) => <p key={index}>{data}</p>)}
        </IngredientHeader>
      </TitleBox>
      <IngredientsContainer>
        <h4>Ingredients: </h4>
        {recipe &&
          recipe.ingredients.map((item) => {
            const { text, image, foodId } = item;
            return (
              <article key={foodId}>
                <Ingredient>
                  <IngredientText>
                    <IngredientIcon>
                      <BsCheckCircleFill />
                    </IngredientIcon>
                    <p>{text}</p>
                  </IngredientText>
                  <IngredientImage src={image} />
                </Ingredient>
              </article>
            );
          })}
        {recipe && (
          <FullRecipeButton onClick={() => window.open(recipe.url)}>
            <p>View Full Recipe</p>
            <FullDetailsLink>Source: {recipe.source}</FullDetailsLink>
          </FullRecipeButton>
        )}
      </IngredientsContainer>
    </RecipeContainer>
  );
};

export default RecipeComponent;
