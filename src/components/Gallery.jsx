import React from 'react';

const galleryImages = [
  './images/work-1.jpg',
  './images/work-2.jpg',
  './images/work-3.jpg',
  './images/work-4.jpg',
  './images/work-5.jpg',
  './images/work-6.jpg',
  './images/work-7.jpg',
  './images/work-8.jpg',
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 bg-[#f5f2ea]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="text-[#bf925b] text-lg font-semibold">Gallery</h4>
        <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
        <p className="text-gray-500 mb-10">
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quam. Far far away,
            behind the word mountains, far from the countries Vokalia and Consonantia
          </b>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow hover:scale-105 transform transition"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-auto object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;