import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ReceipeCollector from '../../Components/Receipe-Collector/Receipe-Collector';
// import categoryList from "../../Data/categoriesData.json";
import receipeList from "../../Data/ReceipeList.json";
import axios from 'axios';

export default function ReceipeList() {
 const {categoryId} =useParams();
  const navigate = useNavigate();
  
  const handleClick =(id)=>{ 
    navigate(`/receipe/${id}`)
  }

   const [categoryData, setCategoryData] = useState([]);
   const [receipeData, setReceipeData] = useState([]);



  useEffect(()=>{
    axios.get("http://localhost:3500/category").then((response)=>{
    setCategoryData(response.data);
       })
      axios.get("http://localhost:3500/receipeList").then((response)=>{
        setReceipeData(response.data);
      })  

  },[])

  let categoryDetails = categoryData.filter((category)=> category.categoryId == categoryId);
 
  let receipeListByCategory = receipeData.filter((receipe)=>receipe.catagoryId == categoryId)


  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ReceipeCollector />
      </div>
      <div className='container mt-5'>
        <div className='fs-4 fw-bold'>
          {categoryDetails?.[0]?.name} Category Receipe
        </div>
         <div className='row'>
        {
            receipeListByCategory.map((receipe)=>{
                return <div className='col-md-3'>
                    <div className="card shadow mt-3" >
                        <img src={receipe.imageurl} alt={receipe.name} width="100%" height="150"  />  
                        <div className="text-center">
                         <span className="fs-5 fw-bold ">{receipe.name}</span>
                        </div>
                        <div className='container p-3'>
                        <button onClick={()=>handleClick(receipe.id)} className='btn  btn-success w-100'>Get Receipe</button>
                        </div>
              </div>
               </div>
            })
               
        }
      </div>
      </div>
      <div className='mt-5'>
                    <Footer />
                </div>

    </div>

  )
}
