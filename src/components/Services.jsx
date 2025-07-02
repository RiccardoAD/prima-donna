import React from 'react';
import menHair from './images/men-hair.png';
import beard from './images/beard.png';
import makeup from './images/beauty-products.png';
import lifestyle from './images/lifestyle.png';

const services = [
  {
    title: 'Haircut & Styling',
    description: 'A small river named Duden flows by their place and supplies.',
    img: menHair,
  },
  {
    title: 'Beard',
    description: 'A small river named Duden flows by their place and supplies.',
    img: beard,
  },
  {
    title: 'MakeUp',
    description: 'A small river named Duden flows by their place and supplies.',
    img: makeup,
  },
  {
    title: 'Body Treatment',
    description: 'A small river named Duden flows by their place and supplies.',
    img: lifestyle,
  },
];

const Services = () => {
  return (
    <section id="service" className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto text-center px-4">
        <h4 className="text-[#bf925b] text-lg">Services</h4>
        <h1 className="text-4xl font-extrabold mb-4">Service Menu</h1>
        <p className="text-gray-500 font-semibold mb-10">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition">
              <img src={service.img} alt={service.title} className="w-1/2 mx-auto py-3" />
              <h4 className="font-bold py-2">{service.title}</h4>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services