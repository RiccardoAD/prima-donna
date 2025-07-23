import React from 'react';
import headerLogo from '../assets/images/header-logo.png'; // Importa l'immagine

function Header() {
  return (
    <section className="header">
      <div className="dark-overlay">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-5">
            <a className="navbar-brand" href="#">
              <img src={headerLogo} className="mt-3" alt="HairCare Logo" style={{ height: '70px' }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse" // Usa data-bs-toggle per Bootstrap 5
              data-bs-target="#navbarNav" // Usa data-bs-target per Bootstrap 5
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home</a> {/* ho aggiunto un id per coerenza */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#booking">Booking</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container text-center header-big fadeInUp justify-content-center">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="Head-content-small">Welcome To HairCare</h4>
              <h1 className="text-white Head-content-lg">WE ARE PROFESSIONAL CARE FOR YOUR HAIR</h1>
              <button className="btn btn-transparent btn-lg py-2 px-4 ">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;