import React from 'react'
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

const FoodFridgeComponent = () => {
    const [timeoutId, setTimeoutID] = useState();
    // Fetch Recipe API
    const fetchAPI = (e) => {
        cle
        const timeout = setTimeout(() => {
            console.log("API Call");
        }, 3000);
        return timeout;
    }

  return (
    <FoodListContainer>
        <Header>
          <h1>Food Fridge</h1>
          <Search>
            <FaSearch />
            <SearchInput type="text" placeholder='Search for food' onChange={fetchAPI}/>
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