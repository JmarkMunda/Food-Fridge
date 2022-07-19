import styled from 'styled-components';

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
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding: 2rem;
`;

export const Food = styled.div`
    box-shadow: 2px 2px 8px 0 gray;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
    padding: 0.8rem;
    margin: 0.8 rem 0;
`;

export const FoodImage = styled.img`
    object-fit: contain;
    height: 6rem;
`;

export const FoodName = styled.p`
    font-weight: bold;
    margin: 0.3rem 0;
`;

export const IngredientsButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    padding: 1rem;
    width: 100%;
    color: green;
    border: 1px solid green;
    border-radius: 0.5rem;
    margin: 0.3rem 0;
`;

export const FullDetailsButton = styled(IngredientsButton)`
    color: red;
    border: 1px solid red;
`;