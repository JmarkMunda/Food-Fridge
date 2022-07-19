import React, { useContext } from 'react'
import { Header } from '../styles/headerStyles';
import { FaSearch } from 'react-icons/fa'
import {
    FoodListContainer,
    Search,
    SearchInput,
    ItemsContainer,
    Food,
    FoodImage,
    FoodName,
    IngredientsButton,
    FullDetailsButton
} from '../styles/foodFridgeStyles';
// Context 
import { FoodContext } from '../Context/globalContext';
import axios from 'axios';

const FoodFridgeComponent = () => {
  const { timeoutId, setTimeoutId } = useContext(FoodContext);

  // Fetch Recipe API
  const fetchAPI = async(searchString) => {
    const data = await axios.get(`/search?q=${searchString}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}`);
    console.log(data);
  }

  // Search
  const handleSearch = (e) => {
      clearTimeout(timeoutId);
      const timeout = setTimeout(() => {
          fetchAPI(e.target.value)
      }, 1000);
      setTimeoutId(timeout);
  }

  return (
    <FoodListContainer>
        <Header>
          <h1>Food Fridge</h1>
          <Search>
            <FaSearch />
            <SearchInput type="text" placeholder='Search for food' onChange={handleSearch}/>
          </Search>
        </Header>
        <ItemsContainer>
          <Food>
            <FoodImage src="/burgersample.png" alt="Food" />
            <FoodName>Hamburger</FoodName>
            <IngredientsButton>View Ingredients</IngredientsButton>
            <FullDetailsButton>Full Details</FullDetailsButton>
          </Food>
        </ItemsContainer>
    </FoodListContainer>
  )
}

export default FoodFridgeComponent;