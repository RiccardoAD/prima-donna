import React from 'react';

function Pricing() {
  const pricingItems = [
    {
      id: 1,
      title: 'Hair style',
      price: '50.00',
      services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
    },
    {
      id: 2,
      title: 'Hair style', // Probabilmente dovrebbe essere un altro servizio, ma ho mantenuto l'originale
      price: '50.00',
      services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
    },
    {
      id: 3,
      title: 'Hair style', // Probabilmente dovrebbe essere un altro servizio
      price: '50.00',
      services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
    },
    {
      id: 4,
      title: 'Hair style', // Probabilmente dovrebbe essere un altro servizio
      price: '50.00',
      services: ['Hair Dryer', 'Hair Coloring', 'Hair Cut', 'Hair Dresser', 'Hair Spa'],
    },
  ];

  return (
    <section className="pb-5 mb-5" style={{ backgroundColor: '#f5f2ea' }}>
      <div className="container text-center">
        <h4 className="main-color py-3 ">Pricing </h4>
        <h1 className="display-4 font-weight-bold"><b>OUR PRICES</b></h1>
        <h6 className="text-muted py-3"><b>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</b></h6>
        <div className="row">
          {pricingItems.map((item, index) => (
            <div className="col-md-3" key={item.id}>
              <div className="card-body-price bg-transparent mb-2 rounded">
                <h4 className="main-color py-3">{item.title}</h4>
                <h3 className="purple-color py-2">${item.price}<span style={{ fontSize: '16px' }}>/Service</span> </h3>
                <ul className="list-group">
                  {item.services.map((service, idx) => (
                    <li className={`list-group-item ${idx % 2 === 0 ? 'list-styling' : ''}`} key={idx}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn price-button px-3 py-2" type="submit">Get Offer</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;