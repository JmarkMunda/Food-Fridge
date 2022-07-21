import styled, { css } from "styled-components";

export const RecipeContainer = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 8px gray;
  transition: right 0.8s linear;
  ${(props) =>
    props.toggleRecipe &&
    css`
      right: 0;
    `}
`;
