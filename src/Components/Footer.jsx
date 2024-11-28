import React from 'react';

function Footer() {
  return (
    <footer
      className="text-center text-lg-start bg-info"
      style={{
        color: 'white',
        marginTop: '100px',
      }}
    >
      {/* Section: Social Media Message */}
      <section className="d-flex justify-content-between p-2 border-bottom m-3">
        {/* Left - Message with Padding */}
        <div
          className="me-3 d-none d-lg-block"
          style={{ fontSize: '20px', paddingTop: '40px' }}
        >
          <span>Get connected with us on social networks:</span>
        </div>

        {/* Right - Social Media Icons */}
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: '20px' }} // Center the icons horizontally
        >
          {/* Facebook */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#3b5998' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#55acee' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#dd4b39' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#ac2bac' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#0082ca' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: '#333333' }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Footer Content */}
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' ,
        marginTop: '10px',marginBottom:'30px'}}>
        <p style={{ margin: '0' }}>© 2024 eCart - Your trusted online shopping platform</p>
      </div>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-2">
          <div className="row mt-2">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: '16px' }}>
                <i className="fas fa-gem me-2"></i>eCart
              </h6>
              <p style={{ fontSize: '14px' }}>
                Your one-stop platform for shopping electronics, fashion, and more.
              </p>
            </div>

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: '16px' }}>
                Products
              </h6>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Electronics</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Fashion</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Home & Kitchen</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Books</a></p>
            </div>

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: '16px' }}>
                Customer Service
              </h6>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">FAQ</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Shipping & Returns</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Track Order</a></p>
              <p style={{ fontSize: '14px' }}><a href="#!" className="text-reset">Help Center</a></p>
            </div>

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
              <h6 className="text-uppercase fw-bold mb-2" style={{ fontSize: '16px' }}>
                Contact Us
              </h6>
              <p style={{ fontSize: '14px' }}><i className="fas fa-home me-2"></i> New York, NY 10012, US</p>
              <p style={{ fontSize: '14px' }}><i className="fas fa-envelope me-2"></i> support@ecart.com</p>
              <p style={{ fontSize: '14px' }}><i className="fas fa-phone me-2"></i> + 01 234 567 88</p>
              <p style={{ fontSize: '14px' }}><i className="fas fa-print me-2"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p style={{ margin: '0' }}>© 2024 eCart: <a className="text-reset fw-bold" href="https://www.ecart.com">www.ecart.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
