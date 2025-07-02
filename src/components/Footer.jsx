import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const FooterSection = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollFunc = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', scrollFunc);
    return () => window.removeEventListener('scroll', scrollFunc);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="about" className="bg-[#1b1b1b] py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HairCare */}
          <div>
            <h3 className="font-bold text-xl pb-4">HairCare</h3>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nihil ad atque, expedita voluptate libero, c!</p>
            <div className="flex gap-4 pt-4 text-[#bf925b]">
              <a href="#"><FaFacebook size={24} /></a>
              <a href="#"><FaInstagram size={24} /></a>
              <a href="#"><FaTwitter size={24} /></a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-xl pb-4">Information</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>FaQs</li>
              <li>Privacy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-xl pb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Questions */}
          <div>
            <h4 className="font-bold text-xl pb-4">Have A Questions?</h4>
            <div className="flex items-start gap-3 mb-3 text-sm">
              <FaMapMarkerAlt className="mt-[3px]" />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex items-center gap-3 mb-3 text-sm">
              <FaPhoneAlt />
              <p>090078601</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope />
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
          &copy; 2025 All rights reserved | This template is made with RA design
        </div>
      </section>

      {/* Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-6 z-50 bg-[#bf925b] text-white p-4 rounded shadow hover:bg-[#f5f2ea] hover:text-black transition"
          title="Go to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default FooterSection;