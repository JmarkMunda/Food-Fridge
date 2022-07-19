import React from 'react'
import styled from 'styled-components';
import { Header } from '../styles/headerStyles';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid black;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Header>
            <h1>Storage</h1>
            <p>You have 20 ingredients</p>
        </Header>
    </SidebarContainer>
  )
}

export default Sidebar;