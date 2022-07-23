import styled, { css } from "styled-components";

export const BasketContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: -100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 8px gray;
  transition: left 0.8s linear;
  ${(props) =>
    props.toggleBasket &&
    css`
      left: 0;
    `}
`;
