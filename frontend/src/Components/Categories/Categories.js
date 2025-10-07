import React, { useEffect, useState } from "react";
// import categoriesData from "../../Data/categoriesData.json"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/receipelist/${id}`);
  };

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://receipehub-main.onrender.com/category")
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);

  return (
    <div className="container mt-5 mb-4">
      <div>
        <span className="fs-5 fw-bold">Categories</span>
      </div>
      <div className="row mt-3">
        {categoryData.map((category) => {
          return (
            <div className="col-md-3" key={category.categoryId}>
              <div
                className="card shadow mt-3 p-3"
                onClick={() => handleClick(category.categoryId)}
              >
                <img
                  src={category.imageurl}
                  alt={category.name}
                  width="100%"
                  height="150"
                />
                <div className="text-center">
                  <span className="fs-5 fw-bold ">{category.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
