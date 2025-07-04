import React from 'react'
import Header from '../../Components/Header/Header'
import { useParams } from 'react-router-dom'
import receipeList from '../../Data/ReceipeList.json'
import "../../pages/ReceipeDetails/ReceipeDetails.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from '../../Components/Footer/Footer';

export default function ReceipeDetails() {
    const {receipeId} =useParams()
    let receipeDetailsArray = receipeList.filter((receipe)=>receipe.id==receipeId);
    let receipeDetails = receipeDetailsArray[0] || {};
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='container mt-5'>
            <div className='bg-dark text-light d-flex'>
                <div className='p-2'>
                <img src={receipeDetails.imageurl} alt={receipeDetails.name} width="500" />
                </div>
                <div className='m-5 flex-grow-1 text-light' >
                    <div className='fs-4 fw-bold'>
                        {receipeDetails.name}
                    </div>
                    <hr  />
                    <div className='fs-5 fw-bold'>
                        <div>
                            Servings :{receipeDetails.Servings}
                        </div>
                         <div>
                            Ready In Minutes :{receipeDetails.ReadyInMintues}
                        </div>
                          <div>
                              Health Score :{receipeDetails.Healthscore}
                         </div>
                    </div>
                   
                </div>
            </div>
            <div className='mt-5'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Ingredients</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Summary</button>
                </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                   {
                    receipeDetails.Ingredients.map((Ingredient,index)=>{
                    return(
                        <div className='fs-5'>
                           {index+1} {Ingredient}
                        </div>
                        )})
                   }
                   
                   </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className='fs-5'>
                    {receipeDetails.Summary}
                    </div>
                </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='fs-5  fw-bold text-center'  >
                    Recipe Nutrition
                </div>
               
                <div className='mt-5 d-flex justify-content-center'>
                        <div style={{ width: 100,height: 100 }} className='me-4'>
                            <CircularProgressbar value={receipeDetails.RecipeNutrition.calories} text={`${receipeDetails.RecipeNutrition.calories}%`} />
                            <div className='fs-4 text-center '>
                                Calories
                            </div>
                        </div>
                        <div style={{ width: 100,height: 100 }} className='me-4'>
                            <CircularProgressbar value={receipeDetails.RecipeNutrition.Fat} text={`${receipeDetails.RecipeNutrition.Fat}%`} />
                            <div className='fs-4 text-center '>
                                Fat
                            </div>
                        </div>
                        <div style={{ width: 100,height: 100 }} className='me-4'>
                            <CircularProgressbar value={receipeDetails.RecipeNutrition.protein} text={`${receipeDetails.RecipeNutrition.protein}}%`} />
                            <div className='fs-4 text-center '>
                                Protein
                            </div>
                        </div>
                        <div style={{ width: 100,height: 100 }} className='me-4'>
                            <CircularProgressbar value={receipeDetails.RecipeNutrition.Manganese} text={`${receipeDetails.RecipeNutrition.Manganese}%`} />
                            <div className='fs-4 text-center' >Manganese</div>
                        </div>
                </div>
                <div className='mt-5'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Step By Step Receipe Process
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                    {
                                        receipeDetails.steps.map((steps,index)=>{
                                        return(
                                            <div className='fs-5'>
                                            {index+1} {steps}
                                            </div>
                                            )})
                                    }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mt-5'>
                    <Footer />
                </div>
    </div>
  )
}
