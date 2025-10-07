import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-light py-5'>
      <div className='container'>
        <div className='row text-center text-md-start'>
          
          {/* Logo & Social Icons */}
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            <div className='fs-5 fw-bold mb-2'>Receipe Hub</div>
            <div>
              <i className="fa-brands fa-facebook p-1 fs-5"></i>
              <i className="fa-brands fa-twitter p-1 fs-5"></i>
              <i className="fa-brands fa-instagram p-1 fs-5"></i>
              <i className="fa-brands fa-google p-1 fs-5"></i>
              <i className="fa-brands fa-linkedin-in p-1 fs-5"></i>
            </div>
          </div>

          {/* Receipe Based On */}
          <div className='col-6 col-md-3 mb-4 mb-md-0'>
            <div className='fs-5 fw-bold mb-2'>Receipe Based On</div>
            <div>Diet</div>
            <div>Nutrients</div>
            <div>Cuisines</div>
          </div>

          {/* Others */}
          <div className='col-6 col-md-3 mb-4 mb-md-0'>
            <div className='fs-5 fw-bold mb-2'>Others</div>
            <div>Analyze Receipe</div>
            <div>Categories</div>
          </div>

          {/* Quick Links */}
          <div className='col-12 col-md-3 mb-4 mb-md-0'>
            <div className='fs-5 fw-bold mb-2'>Quick Links</div>
            <div>Search</div>
            <div>Profile</div>
          </div>

        </div>

        <hr className='border-light my-4' />

        <div className='text-center'>
          <span className='fs-6 fw-bold'>© 2024 Copyright
             <span className='fw-bold fs-4 text-primary'>
            <a href="https://hubs.recipes.vercel.app" className='text-decoration-none'> Receipe Hub </a>
          </span>
           All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
