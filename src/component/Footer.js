import React from 'react'

export default function Footer() {
  return (
    <>
    
    <footer className="text-center text-lg-start bg-light text-muted">

  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      
    </div>
    <div>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            SB Collection 
            </p>
            <p>(Sunita Bisht)</p>
            <p>Owner Of This Company</p>          
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Rings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Ear Rings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Neck peice</a>
          </p>
        </div>
        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
            Information
          </h6>
          <p>
            <a href="#!" className="text-reset">About</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contact Us</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Term & Condition</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Delivery & return</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Privacy Policy</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> 305 306 c Indrapuram Noida</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            sunitabisht929@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +91 7982606451 </p>
          <p><i className="fas fa-print me-3"></i> +91 9990326037</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style = {{backgroundColor : 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright
     </div>
  </footer>
</>
  )
}
