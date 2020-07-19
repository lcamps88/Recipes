import React from 'react';
import './App.css';
import FoodRecipies from './FoodRecipe/Food'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div >
      <Container>
        <FoodRecipies/>
      </Container>
      
    </div>
  );
}

export default App;
