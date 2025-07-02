

import './App.css'

import HeaderSection from './components/HeaderSection';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Prices from './components/Prices';



function App() {
  

  return (
    <>
     <div className="font-sans overflow-x-hidden scroll-smooth">
      <HeaderSection />
      <Services />
      <BookingForm />
      <Prices />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App
