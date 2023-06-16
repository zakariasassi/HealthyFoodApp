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


function App() {
  return (
    <>
  

      <BrowserRouter>
       <Routes>
          <Route path="/"  element={<Login />}  />
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup"  element={<Signup />}  />
          <Route path="/categorys"  element={<Categorys />}  />
          <Route path="/meals"  element={<Meals />}  />
          <Route path="/home"  element={<Home />}  />

       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
