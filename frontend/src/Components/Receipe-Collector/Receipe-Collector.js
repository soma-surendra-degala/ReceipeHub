import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import sliderData from "../../Data/sliderData.json"
import "../Receipe-Collector/Receipe-Collectior.css";
import axios from 'axios';

export default function ReceipeCollector(){
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const [sliderData, setSliderData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3500/slider").then((response)=>{
    setSliderData(response.data);
  })
  },[])
 
  return (
    <div className="container">
      <div>
        <span className="fs-5 fw-bold">Browse Your Recipes</span>
      </div>
    <Slider {...settings}>
        {
          sliderData.map((slider)=>{
              return <div className="cader shadow">
               <img src={slider.imageurl} alt={slider.name} width="215" height="150"  />  
               <div className="text-center">
                <span className="fs-5 fw-bold ">{slider.name}</span>
                </div>
              </div>
            })
        }
     
    </Slider>
    </div>
  );
}