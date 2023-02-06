import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Join from './pages/Join/Join';
import HomePage from './pages/Home/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        </Container>

    <Container>
      <HomePage />
      </Container>  

      <Container>
    <Join />
  </Container>

    </div>
  );
}

export default App;
