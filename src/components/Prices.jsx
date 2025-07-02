import React from 'react';

const pricingOptions = [
  {
    title: 'Hair Style',
    price: '$50.00',
    services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
  },
  // Puoi duplicare o variare i dati per altre card
  {
    title: 'Hair Style',
    price: '$50.00',
    services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
  },
  {
    title: 'Hair Style',
    price: '$50.00',
    services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
  },
  {
    title: 'Hair Style',
    price: '$50.00',
    services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
  },
];

const Prices = () => {
  return (
    <section className="bg-[#f5f2ea] py-16" id="pricing">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h4 className="text-[#bf925b] text-lg font-semibold mb-2">Pricing</h4>
        <h1 className="text-4xl font-extrabold mb-4">OUR PRICES</h1>
        <p className="text-gray-600 font-medium mb-10">
          <b>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</b>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-transparent border border-[#bf925b] rounded-lg p-6 flex flex-col items-center shadow hover:shadow-md transition"
            >
              <h4 className="text-[#bf925b] text-xl font-semibold py-2">{option.title}</h4>
              <h3 className="text-purple-700 text-2xl py-2">
                {option.price}
                <span className="text-sm text-gray-700"> /Service</span>
              </h3>

              <ul className="text-gray-700 mt-4 space-y-2 text-sm">
                {option.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>

              <button className="mt-6 bg-[#bf925b] text-white px-4 py-2 rounded hover:bg-[#a27a4b] transition">
                Get Offer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
