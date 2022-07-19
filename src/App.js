import React from 'react'
import styled from 'styled-components';
import Sidebar from './Components/SideBarComponent';
import FoodFridgeComponent from './Components/FoodFridgeComponent';
import { FoodProvider } from './Context/globalContext';

const Container = styled.div`
  display: flex;
  background-color: orange;
`;

function App() {
  return (
    <FoodProvider>
      <Container>
        {/* Sidebar */}
        <Sidebar />
        {/* Food Container */}
        <FoodFridgeComponent />
      </Container>
    </FoodProvider>
  );
}

export default App;
