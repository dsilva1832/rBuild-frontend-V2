import React from 'react'

function Footer() {
  return (
    <div>
         <footer className="bg-dark text-white text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          {/* About section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              We are passionate about delivering the best digital solutions
              to help you grow and succeed in your online journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Contact</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: Kochi, Kerala</p>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} YourCompany. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer