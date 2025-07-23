import React from 'react';
import headerLogo1 from '../assets/images/header-logo1.png'; // Importa l'immagine

function ColumnsSection() {
  return (
    <section className="">
      <div className="row">
        {/* Colonna per Uomini */}
        <div className="col-md for-men align-items-stretch">
          <div className="p-5 m-5 box-all">
            <div className="container py-5 mt-5 box-inside">
              <h3 className="text-center text-white">For Men</h3>
              <a href="#" className="pricing-men">
                <h5>See Pricing </h5>
              </a>
            </div>
          </div>
        </div>

        {/* Colonna Centrale Welcome */}
        <div className="col-md-3 align-items-stretch services-bg">
          <div className="container text-center py-5 mt-5">
            <img src={headerLogo1} className="logo-col" alt="Salon Logo" />
            <p style={{ fontSize: '19px' }}><b>Welcome To Saloon</b></p>
            <hr className="bg-transparent" /> {/* Ho corretto 'bg-tranparent' in 'bg-transparent' */}
            <p className="text-muted">
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="btn btn-transparent btn-lg py-2 px-4 ">Read Mores</button>
          </div>
        </div>

        {/* Colonna per Donne */}
        <div className="col-md for-women align-items-stretch">
          <div className="p-5 m-5 box-all">
            <div className="container py-5 mt-5 box-inside">
              <h3 className="text-center text-white">For WOMen</h3> {/* Ho mantenuto 'WOMen' come nell'originale, ma potresti correggerlo in 'Women' */}
              <a href="#" className="pricing-men">
                <h5>See Pricing </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColumnsSection;