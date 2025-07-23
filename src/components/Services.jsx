// import React from 'react';
// import menHair from '../assets/images/men-hair.png';
// import beard from '../assets/images/beard.png';
// import makeup from '../assets/images/beauty-products.png';
// import lifestyle from '../assets/images/lifestyle.png';

// const services = [
//   {
//     title: 'Haircut & Styling',
//     description: 'A small river named Duden flows by their place and supplies.',
//     img: menHair,
//   },
//   {
//     title: 'Beard',
//     description: 'A small river named Duden flows by their place and supplies.',
//     img: beard,
//   },
//   {
//     title: 'MakeUp',
//     description: 'A small river named Duden flows by their place and supplies.',
//     img: makeup,
//   },
//   {
//     title: 'Body Treatment',
//     description: 'A small river named Duden flows by their place and supplies.',
//     img: lifestyle,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="service" className="py-12 bg-[#f8f8f8]">
//       <div className="container mx-auto text-center px-4">
//         <h4 className="text-[#bf925b] text-lg">Services</h4>
//         <h1 className="text-4xl font-extrabold mb-4">Service Menu</h1>
//         <p className="text-gray-500 font-semibold mb-10">
//           Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition">
//               <img src={service.img} alt={service.title} className="w-1/2 mx-auto py-3" />
//               <h4 className="font-bold py-2">{service.title}</h4>
//               <p className="text-gray-500">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services


import React from 'react';
import menHairImg from '../assets/images/men-hair.png';
import beardImg from '../assets/images/beard.png';
import beautyProductsImg from '../assets/images/beauty-products.png';
import lifestyleImg from '../assets/images/lifestyle.png';

function Services() {
  return (
    <section className="py-5 services-bg" id="service">
      <div className="container text-center">
        <h4 style={{ color: '#bf925b' }}>Services</h4>
        <h1 className="display-3 font-weight-bold"><b>Service Menu</b></h1>
        <h6 className="text-muted"><b>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</b></h6>
        <div className="row">
          {/* Card 1: Haircut & Styling */}
          <div className="col-md-3">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body py-5 card-body-service services-bg">
                <img src={menHairImg} className="w-50 py-3" alt="Men Hair" />
                <h4 className="py-2 font-weight-bold">Haircut & Styling</h4>
                <p className="text-muted">A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Beard */}
          <div className="col-md-3">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body py-5 card-body-service services-bg">
                <img src={beardImg} className="w-50 py-3" alt="Beard" />
                <h4 className="py-2 font-weight-bold">Beard</h4>
                <p className="text-muted">A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Card 3: MakeUp */}
          <div className="col-md-3">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body py-5 card-body-service services-bg">
                <img src={beautyProductsImg} className="w-50 py-3" alt="Beauty Products" />
                <h4 className="py-2 font-weight-bold">MakeUp</h4>
                <p className="text-muted">A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Card 4: Body Treatment */}
          <div className="col-md-3">
            <div className="card" style={{ border: '0px' }}>
              <div className="card-body py-5 card-body-service services-bg">
                <img src={lifestyleImg} className="w-50 py-3" alt="Lifestyle" />
                <h4 className="py-2 font-weight-bold">Body Treatment</h4>
                <p className="text-muted">A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;