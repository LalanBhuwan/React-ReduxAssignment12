import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Service from "./components/Service";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const msg = useSelector((state) => state.msg);
  return (
    
    <BrowserRouter>
      <div>{msg}</div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
     
    </BrowserRouter>
    
    
  );
}

export default App;
