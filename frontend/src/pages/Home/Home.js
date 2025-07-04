import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import ReceipeCollector from "../../Components/Receipe-Collector/Receipe-Collector";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";

export default function Home(){
  return (
    <div>
     <div>
      <Header />
     </div>
     <div>
      <Hero />
     </div>
     <div className="mt-3">
      <ReceipeCollector />
     </div>
     <div className="mt-3">
      <Categories />
     </div>
     <div>
      <Footer/>
     </div>
     </div>
  )
}