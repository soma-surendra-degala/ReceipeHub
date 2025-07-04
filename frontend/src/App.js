import React from "react";
import Home from "./pages/Home/Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReceipeList from "./pages/ReceipeList/ReceipeList.js";
import ReceipeDetails  from "./pages/ReceipeDetails/ReceipeDetails.js";
import { BrowserRouter, Routes, Route} from "react-router-dom"




export default function app(){
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipelist/:categoryId" element={<ReceipeList />} />
        <Route path="/receipe/:receipeId" element={<ReceipeDetails />} />
      </Routes>
    
    </BrowserRouter>
  </div>
  )
}