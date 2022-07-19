import React, { useContext } from "react";
import { Header, Navigation, NavIcon } from "../styles/headerStyles";
import { FaSearch } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import {
  FoodListContainer,
  Search,
  SearchInput,
  ItemsContainer,
  Food,
  FoodImage,
  FoodName,
  IngredientsButton,
  FullDetailsButton,
  FullDetailsLink,
} from "../styles/foodFridgeStyles";
// Context
import { FoodContext } from "../Context/globalContext";
import axios from "axios";

//  ------------------------------------------------------------
const FoodFridgeComponent = () => {
  const { timeoutId, setTimeoutId, foodList, setFoodList, setToggleBasket } =
    useContext(FoodContext);

  // Fetch Recipe API
  const fetchAPI = async (searchString) => {
    try {
      const data = await axios.get(
        `/search?q=${searchString}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`
      );
      const response = data.data;
      setFoodList(response.hits);
    } catch (error) {
      console.log("Fetching API: " + error);
    }
  };

  // Search
  const handleSearch = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      fetchAPI(e.target.value);
    }, 500);
    setTimeoutId(timeout);
  };

  return (
    <FoodListContainer>
      <Header>
        <Navigation>
          <NavIcon>
            <BsBasket onClick={() => setToggleBasket(true)} />
          </NavIcon>
          <h1>Food Fridge</h1>
          <NavIcon>
            <GrNotes />
          </NavIcon>
        </Navigation>
        <Search>
          <FaSearch />
          <SearchInput
            type="text"
            placeholder="Search for food"
            onChange={handleSearch}
          />
        </Search>
      </Header>
      <ItemsContainer>
        {foodList.length !== 0 ? (
          foodList.map((data, index) => {
            const { label, image, url, source } = data.recipe;
            return (
              <Food key={index}>
                <FoodImage src={image} alt="Food" />
                <FoodName>{label}</FoodName>
                <IngredientsButton>View Ingredients</IngredientsButton>
                <FullDetailsButton onClick={() => window.open(url)}>
                  Full Details
                  <FullDetailsLink>{source}</FullDetailsLink>
                </FullDetailsButton>
              </Food>
            );
          })
        ) : (
          <h1>Food Fridge Is Empty</h1>
        )}
      </ItemsContainer>
    </FoodListContainer>
  );
};

export default FoodFridgeComponent;
