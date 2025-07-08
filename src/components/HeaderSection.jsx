import React from 'react';
import headerLogo from '../assets/images/header-logo.png';
import backgroundImage from '../assets/images/bg-1.jpg';

const HeaderSection = () => {
  return (
    <section
      className="relative min-h-[1000px] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between py-6">
          <a href="#">
            <img src={headerLogo} alt="Logo" className="h-[70px] mt-3" />
          </a>
          <ul className="flex space-x-6 text-white text-[22px]">
            {['Home', 'Service', 'Booking', 'Gallery', 'Contact Us'].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="hover:text-[#bf925b] active:text-[#bf925b]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-center items-center text-center pt-[200px]">
        <div>
          <h4 className="text-[#bf925b] text-lg">Welcome To HairCare</h4>
          <h1 className="text-white font-extrabold text-[90px] leading-tight lg:text-[60px] md:text-[50px] sm:text-[40px]">
            WE ARE PROFESSIONAL CARE FOR YOUR HAIR
          </h1>
          <button className="mt-6 border-2 border-white text-white py-2 px-4 text-lg hover:bg-[#bf925b] transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
