import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../pages/ReceipeDetails/ReceipeDetails.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ReceipeDetails() {
  const { receipeId } = useParams();
  const [receipeDetails, setReceipeDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3500/receipeList/receipe/${receipeId}`)
      .then(response => setReceipeDetails(response.data))
      .catch(err => console.error("Error fetching recipe details:", err));
  }, [receipeId]);

  if (!receipeDetails) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div>
      <Header />

      <div className='container mt-5'>
        {/* Recipe Header */}
        <div className='bg-dark text-light d-flex'>
          <div className='p-2'>
            <img src={receipeDetails.imageurl} alt={receipeDetails.name} width="500" />
          </div>
          <div className='m-5 flex-grow-1 text-light'>
            <div className='fs-4 fw-bold'>{receipeDetails.name}</div>
            <hr />
            <div className='fs-5 fw-bold'>
              <div>Servings: {receipeDetails.Servings}</div>
              <div>Ready In Minutes: {receipeDetails.ReadyInMinutes}</div>
              <div>Health Score: {receipeDetails.Healthscore}</div>
            </div>
          </div>
        </div>

        {/* Tabs: Ingredients & Summary */}
        <div className='mt-5'>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button">
                Ingredients
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-summary-tab" data-bs-toggle="pill" data-bs-target="#pills-summary" type="button">
                Summary
              </button>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-ingredients">
              {receipeDetails.Ingredients?.map((ingredient, index) => (
                <div className='fs-5' key={index}>{index + 1}. {ingredient}</div>
              ))}
            </div>
            <div className="tab-pane fade" id="pills-summary">
              <div className='fs-5'>{receipeDetails.Summary}</div>
            </div>
          </div>
        </div>

        {/* Nutrition */}
        <div className='mt-5'>
          <div className='fs-5 fw-bold text-center'>Recipe Nutrition</div>
          <div className='mt-5 d-flex justify-content-center'>
            {receipeDetails.RecipeNutrition && Object.entries(receipeDetails.RecipeNutrition).map(([key, val]) => (
              <div key={key} style={{ width: 100, height: 100 }} className='me-4'>
                <CircularProgressbar value={val} text={`${val}%`} />
                <div className='fs-4 text-center'>{key}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className='my-5'>
          <div className="accordion" id="accordionSteps">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSteps">
                <button className="accordion-button fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSteps">
                  Step By Step Recipe Process
                </button>
              </h2>
              <div id="collapseSteps" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  {receipeDetails.steps?.map((step, index) => (
                    <div className='fs-5' key={index}>{index + 1}. {step}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
