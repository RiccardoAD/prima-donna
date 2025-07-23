

// import './App.css'

// import HeaderSection from './components/HeaderSection';
// import Services from './components/Services';
// import BookingForm from './components/BookingForm';
// import Footer from './components/Footer';
// import Testimonials from './components/Testimonials';
// import Gallery from './components/Gallery';
// import Prices from './components/Prices';
// import ForMenWomenSection from './components/ForMenWomenSection';


// function App() {
  

//   return (
//     <>
//      <div className="font-sans overflow-x-hidden scroll-smooth">
//       <HeaderSection />
//       <ForMenWomenSection/>
//       <Services />
//       <BookingForm />
//       <Prices />
//       <Gallery />
//       <Testimonials />
//       <Footer />
//     </div>
//     </>
//   )
// }

// export default App


import React from 'react';
import Header from './components/Header';
import ColumnsSection from './components/ColumnsSection';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {

  return (
    <>
      <Header />
      <ColumnsSection />
      <Services />
      <BookingForm />
      <Gallery />
      <Pricing />
      <TestimonialCarousel />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;