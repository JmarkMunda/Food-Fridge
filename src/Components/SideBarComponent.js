import React, { useContext } from "react";
import styled from "styled-components";
import { Header, Navigation, NavIcon } from "../styles/headerStyles";
import { FoodContext } from "../Context/globalContext";
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  border-right: 1px solid black;
`;

const Sidebar = () => {
  const { toggleBasket, setToggleBasket } = useContext(FoodContext);

  return (
    <>
      {toggleBasket && (
        <SidebarContainer>
          <Header>
            <Navigation>
              <h1>Basket</h1>
              <NavIcon>
                <FaTimes onClick={() => setToggleBasket(false)} />
              </NavIcon>
            </Navigation>
            <p>You have 20 ingredients</p>
          </Header>
        </SidebarContainer>
      )}
    </>
  );
};

export default Sidebar;
