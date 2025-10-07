import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../Receipe-Collector/Receipe-Collectior.css";
import axios from "axios";

export default function ReceipeCollector() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://receipehub-main.onrender.com/slider")
      .then((response) => {
        setSliderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <span className="fs-5 fw-bold">Browse Your Recipes</span>
      </div>
      <Slider {...settings}>
        {sliderData.map((slider) => (
          <div key={slider._id} className="cader shadow">
            <img
              src={slider.imageurl}
              alt={slider.name}
              width="215"
              height="150"
            />
            <div className="text-center">
              <span className="fs-5 fw-bold">{slider.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
