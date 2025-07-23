import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Funzione per mostrare o nascondere il pulsante basata sullo scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Mostra dopo 300px di scroll
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funzione per scrollare in cima alla pagina
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rende lo scroll più fluido
    });
  };

  useEffect(() => {
    // Aggiungi l'event listener allo scroll al montaggio del componente
    window.addEventListener('scroll', toggleVisibility);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta

  return (
    <button
      onClick={scrollToTop}
      id="myBtn"
      title="Go to top"
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: '99',
        border: 'none',
        outline: 'none',
        backgroundColor: '#bf925b', // Colore del pulsante, puoi definirlo nel CSS
        color: 'white',
        cursor: 'pointer',
        padding: '15px',
        borderRadius: '10px',
        fontSize: '18px'
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollToTopButton;