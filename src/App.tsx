import React from "react";
import "./App.css";
import Join from './pages/Join/Join';
import HomePage from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import './index.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/soundwave" element={<HomePage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
