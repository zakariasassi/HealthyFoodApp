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

function App() {
  return (
    <>
  

      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout page={<Home />} />} />
        <Route path="/login" element={<Layout page={<Login />} />} />
        <Route path="/signup" element={<Layout page={<Signup />} />} />
        <Route path="/cat" element={<Layout page={<Categorys />} />} />
        <Route path="/meals" element={<Layout page={<Home />} />} />
        <Route path="/" element={<Layout page={<Home />} />} />

       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
