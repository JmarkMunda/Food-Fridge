import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  background-color: pink;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavIcon = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
