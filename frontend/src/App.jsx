import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/Application";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/application" element={<Application />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
