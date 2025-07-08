
import React from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





const testimonials = [
  {
    name: 'Anna Deynah',
    role: 'Founder at ET Company',
    image: './images/artist-1.jpg',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit.',
    rating: 4.5,
  },
  {
    name: 'Anna Deynah',
    role: 'Founder at ET Company',
    image: './images/artist-4.jpg',
    quote:
      'Laborum ratione cum magni impedit aspernatur enim repellat doloremque natus numquam earum iure velit illo exercitationem. Aperiam doloremque facere, hic possimus iste laborum ipsam dicta.',
    rating: 4.5,
  },
];





const TestimonialSection = () => {

const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };



  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Image Column */}
        <div className="hidden sm:block bg-cover bg-center rounded-md" style={{ backgroundImage: `url('./images/testimonial-bg.jpg')` }} />

        {/* Testimonials Carousel */}
        <div className="px-6">
          <h4 className="text-[#bf925b] text-lg font-semibold mb-2">Testimony</h4>
          <h2 className="text-4xl font-bold mb-6">Happy Customer</h2>

       
           <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="text-left bg-[#f5f2ea] p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <p className="italic text-sm mb-4">“{t.quote}”</p>
                <h4 className="font-bold">{t.name}</h4>
                <h6 className="text-sm font-medium text-gray-600">{t.role}</h6>
                <div className="mt-2 text-[#bf925b]">
                  {'★'.repeat(Math.floor(t.rating))}{t.rating % 1 ? '½' : ''}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
