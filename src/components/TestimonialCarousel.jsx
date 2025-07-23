import React from 'react';
import artist1Img from '../assets/images/artist-1.jpg'; // Usiamo le stesse immagini degli artisti per i testimonial
import artist4Img from '../assets/images/artist-4.jpg';


function TestimonialCarousel() {
  return (
    <section className="mt-0 py-0">
      <div className="container">
        <div className="row">
          <div className="col-md-5 img-colo d-none d-sm-block col-sm-12">
            {/* Background image o altro contenuto, gestire tramite CSS */}
          </div>
          <div className="col-md-7 pt-5 pl-5 text-dark align-middle">
            <h4 className="main-color">Testimony </h4>
            <h3 className="display-4 font-weight-bold"><b>Happy Customer</b></h3>
            <div className="bd-example">
              <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>  // Rimosso perché avevi solo 2 item */}
                </ol>
                <div className="carousel-inner text-dark">
                  {/* Primo slide */}
                  <div className="carousel-item active">
                    <div className="testimonial">
                      <div className="mx-auto mb-4">
                        <img src={artist1Img} className="rounded-circle img-fluid w-25" alt="First sample avatar image" />
                      </div>
                      <p>
                        <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
                      </p>
                      <h4 className="font-weight-bold">Anna Deynah</h4>
                      <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star-half-alt blue-text"> </i>
                    </div>
                  </div>
                  {/* Secondo slide */}
                  <div className="carousel-item">
                    <div className="testimonial">
                      <div className="mx-auto mb-4 ">
                        <img src={artist4Img} className="w-25 img-fluid rounded-circle" alt="" />
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ratione cum magni impedit aspernatur enim repellat doloremque natus numquam earum iure velit illo exercitationem, veniam magnam. Aperiam doloremque facere, hic possimus iste laborum ipsam dicta, excepturi atque officiis, animi beatae!</p>
                      <h4 className="font-weight-bold">Anna Deynah</h4>
                      <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star blue-text"> </i>
                      <i className="fas fa-star-half-alt blue-text"> </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;