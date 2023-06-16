import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Categorys from "./pages/Categorys/Categorys";
import Meals from "./pages/Meals/Meals";
import Info from './pages/Info/Info'


function App() {
  return (
    <>
  

      <BrowserRouter>
       <Routes>
 
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
