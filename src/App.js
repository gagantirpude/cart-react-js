// Package
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// This is a component
import Header from "./components/Header";
// import Footer from "./components/Footer";

// Styling
import "./styles/app.scss";
import Home from "./pages/Home";
import Card from "./components/Card";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Toaster />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
