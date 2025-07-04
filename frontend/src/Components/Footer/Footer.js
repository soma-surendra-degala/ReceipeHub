import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-light p-5'>
        <div className='container'>
          <div className='row'> 
            <div className='col-md-3'> 
            <div>
              <span className='fs-5 fw-bold'> Receipe Hub</span>
            </div>  
            <div>
              <i class="fa-brands fa-facebook p-1 m-1 fs-5"></i>
              <i class="fa-brands fa-twitter p-1 m-1 fs-5"></i>
              <i class="fa-brands fa-instagram p-1 m-1 fs-5"></i>
              {/* <i class="fa-brands fa-google p-1 m-1 fs-5"></i> */}
              <i class="fa-brands fa-linkedin-in p-1 m-1 fs-5"></i>
            </div>
            </div>
            
            <div className='col-md-3'> 
                <div>
                 <span className='fs-5 fw-bold'> Receipe Based On</span>
                </div> 
                <div>
                  <div>
                    Diet
                </div>
                <div>
                    Nutrients
                 </div>
                 <div>
                    Cusinies
                </div>
                  
            </div> 
                
            </div>
            <div className='col-md-3'> 
                <div>
                 <span className='fs-5 fw-bold'> Others</span>
                </div> 
                <div>
                  <div>
                    Analyze Receipe
                </div>
                <div>
                    Categories
                 </div>
                  
              </div> 
            </div>
            <div className='col-md-3'> 
                <div>
                 <span className='fs-5 fw-bold'> Quick Links</span>
                </div> 
                <div>
                  <div>
                    Search
                </div>
                <div>
                    Profile
                 </div>
                  
              </div> 
            </div>
           
          </div>
           <hr />
          <div className='text-center'>
            <span className='text-center fs-5 fw-bold'>© 2020 Copyright recipehub.in. All Rights Reserved</span>
          </div>
        </div>
      </div>
  )
}

export default Footer