import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ReceipeCollector from "../../Components/Receipe-Collector/Receipe-Collector";
import axios from "axios";

export default function ReceipeList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/receipe/${id}`);
  };

  const [categoryData, setCategoryData] = useState([]);
  const [receipeData, setReceipeData] = useState([]);

  useEffect(() => {
    // Fetch category and recipe data from live backend
    axios
      .get("https://receipehub-main.onrender.com/category")
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((err) => console.error("Error fetching categories:", err));

    axios
      .get("https://receipehub-main.onrender.com/receipeList")
      .then((response) => {
        setReceipeData(response.data);
      })
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  let categoryDetails = categoryData.filter(
    (category) => category.categoryId === Number(categoryId)
  );

  let receipeListByCategory = receipeData.filter(
    (receipe) => receipe.categoryId === Number(categoryId)
  );

  return (
    <div>
      <Header />
      <ReceipeCollector />

      <div className="container my-5">
        <div className="fs-4 fw-bold">
          {categoryDetails?.[0]?.name || "Selected"} Category Receipes
        </div>
        <div className="row">
          {receipeListByCategory.length > 0 ? (
            receipeListByCategory.map((receipe) => (
              <div className="col-md-3 col-sm-6 col-12 mb-3" key={receipe._id}>
                <div className="card shadow mt-3 p-3 h-100 d-flex flex-column">
                  <img
                    src={receipe.imageurl}
                    alt={receipe.name}
                    width="100%"
                    height="150"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="text-center mt-2">
                    <span className="fs-5 fw-bold">{receipe.name}</span>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => handleClick(receipe._id)}
                      className="btn btn-success w-100"
                    >
                      Get Receipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4 fs-5 text-muted">
              No recipes available for this category.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
