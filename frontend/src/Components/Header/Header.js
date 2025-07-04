import React from "react";
import "../../assests/logo.png"
import "../Header/Header.css"

export default function Header(){
  return (
     <div className="card shadow">
       <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex"> 
            <div className="m-2">
                <img src="logo.png" alt="logo" width="50" />
            </div>
            <div className="d-flex align-items-center">
            <span className="fs-5 fw-bold">Receipe Hub</span>
            </div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search For Receipe" className="form-control" />
            </div>
            <div>
                <button className="btn btn-primary">Sign-In</button>
            </div>
        
       </div>
     </div>
  )
}