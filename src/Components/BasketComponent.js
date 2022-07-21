import React, { useContext } from "react";
import { BasketContainer } from "../styles/basketStyles";
import { Header, Navigation, NavIcon } from "../styles/headerStyles";
import { FoodContext } from "../Context/GlobalContext";
import { FaTimes } from "react-icons/fa";

const Basket = () => {
  const { toggleBasket, setToggleBasket } = useContext(FoodContext);

  return (
    <>
      <BasketContainer toggleBasket={toggleBasket}>
        <Header>
          <Navigation>
            <h1>Basket</h1>
            <NavIcon>
              <FaTimes onClick={() => setToggleBasket(false)} />
            </NavIcon>
          </Navigation>
          <p>You have 20 ingredients</p>
        </Header>
      </BasketContainer>
    </>
  );
};

export default Basket;
