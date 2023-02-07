import React from 'react';
import './App.css';
import Join from './pages/Join/Join';
import HomePage from './pages/Home/Home';
import Discover from './pages/Discover/Discover'
import Navigation from './components/Navigation'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
    <Route path="/soundwave" element={<HomePage/>} />
    <Route path="/discover" element={<Discover/>} />
    <Route path="/join" element={<Join/>} />
    </Route>
    </Routes>
    </>

  );
}

export default App;
