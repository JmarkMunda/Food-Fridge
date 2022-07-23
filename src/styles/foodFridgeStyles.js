import styled from "styled-components";

export const FoodListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin-left: 1rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #fff;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  padding: 2rem;
  gap: 1rem;
`;

export const Food = styled.div`
  position: relative;
  box-shadow: 1px 1px 5px 0 gray;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 1rem 0;
`;

export const FoodImage = styled.img`
  object-fit: cover;
  height: 15rem;
  width: 100%;
`;

export const FoodName = styled.p`
  position: absolute;
  top: 1rem;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  margin: 0.8rem 0;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const IngredientsButton = styled.button`
  flex: 1;
  cursor: pointer;
  font-weight: bold;
  padding: 1rem;
  color: green;
  border: none;
  border-radius: 0.2rem;
  background-color: #4ed88c;
  color: #fff;
  transition: all 0.2s linear;
  &:hover {
    background-color: #3cb371;
  }
`;

export const FullDetailsButton = styled(IngredientsButton)`
  flex: 1;
  background-color: pink;
  border: 1px solid pink;
  color: #000;
  &:hover {
    background-color: transparent;
    color: pink;
  }
`;
