// import React from 'react';

// const galleryImages = [
//   './images/work-1.jpg',
//   './images/work-2.jpg',
//   './images/work-3.jpg',
//   './images/work-4.jpg',
//   './images/work-5.jpg',
//   './images/work-6.jpg',
//   './images/work-7.jpg',
//   './images/work-8.jpg',
// ];

// const Gallery = () => {
//   return (
//     <section id="gallery" className="py-12 bg-[#f5f2ea]">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h4 className="text-[#bf925b] text-lg font-semibold">Gallery</h4>
//         <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
//         <p className="text-gray-500 mb-10">
//           <b>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quam. Far far away,
//             behind the word mountains, far from the countries Vokalia and Consonantia
//           </b>
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {galleryImages.map((src, i) => (
//             <a
//               key={i}
//               href={src}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
//             >
//               <img
//                 src={src}
//                 alt={`gallery-${i}`}
//                 className="w-full h-auto object-cover"
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React, { useEffect } from 'react';
// Importa jQuery per Magnific Popup se necessario (assicurati che sia installato)
import $ from 'jquery';
// Magnific Popup non ha un modulo npm standard con jquery come dipendenza diretta,
// quindi l'inizializzazione globale tramite CDN in index.html è l'approccio più semplice
// se si vuole mantenere l'originale.
// Per un vero approccio React, si cercherebbe un wrapper React o una libreria alternativa.

import work1Img from '../assets/images/work-1.jpg';
import work2Img from '../assets/images/work-2.jpg';
import work3Img from '../assets/images/work-3.jpg';
import work4Img from '../assets/images/work-4.jpg';
import work5Img from '../assets/images/work-5.jpg';
import work6Img from '../assets/images/work-6.jpg';
import work7Img from '../assets/images/work-7.jpg';
import work8Img from '../assets/images/work-8.jpg';

function Gallery() {
  useEffect(() => {
    // Inizializza Magnific Popup quando il componente è montato
    // Controlla che $ e magnificPopup siano disponibili
    if ($.fn.magnificPopup) {
      $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      });
    }

    // Non è strettamente necessario distruggere Magnific Popup in questo caso
    // a meno che tu non abbia logiche complesse di rimozione/aggiunta di elementi della galleria.
  }, []); // Esegui solo una volta al montaggio

  const galleryImages = [
    { id: 1, src: work1Img },
    { id: 2, src: work2Img },
    { id: 3, src: work3Img },
    { id: 4, src: work4Img },
    { id: 5, src: work5Img },
    { id: 6, src: work6Img },
    { id: 7, src: work7Img },
    { id: 8, src: work8Img },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f5f2ea' }} id="gallery">
      <div className="container-fluid text-center">
        <h4 className="main-color text-center">Gallery </h4>
        <h1 className="display-3 font-weight-bold text-center">Our Gallery</h1>
        <h6 className="text-muted py-5 text-center"><b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, quam. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</b></h6>
        <div className="row no-gutters">
          {galleryImages.slice(0, 4).map(image => (
            <div className="col-md-3" key={image.id}>
              <a href={image.src} className="image-link gallery-item" target="_blank" data-toggle="lightbox" data-gallery="img-gallery" data-height="560" data-width="560" rel="noopener noreferrer">
                <img src={image.src} className="img-fluid" alt={`Gallery item ${image.id}`} />
              </a>
            </div>
          ))}
        </div>
        <div className="row no-gutters">
          {galleryImages.slice(4, 8).map(image => (
            <div className="col-md-3" key={image.id}>
              <a href={image.src} className="image-link gallery-item" target="_blank" data-toggle="lightbox" data-gallery="img-gallery" data-height="560" data-width="560" rel="noopener noreferrer">
                <img src={image.src} className="img-fluid" alt={`Gallery item ${image.id}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;