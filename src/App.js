import React from 'react'
import styled from 'styled-components';
import Sidebar from './Components/SideBarComponent';
import FoodFridgeComponent from './Components/FoodFridgeComponent';

const Container = styled.div`
  display: flex;
  background-color: orange;
`;

function App() {
  return (
    <Container>
      {/* Sidebar */}
      <Sidebar />
      {/* Food Container */}
      <FoodFridgeComponent />
    </Container>
  );
}

export default App;
