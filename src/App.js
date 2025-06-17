import React, { useEffect } from 'react';
import './App.css';
import civLogo from './civ7_logo.png';

function App() {
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
   
      const size = Math.random() * 10 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const posX = Math.random() * 100;
      const posY = Math.random() * 100 + 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}px`;

      const delay = Math.random() * 15;
      particle.style.animationDelay = `${delay}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Background particles */}
        <div className="particles"></div>
        
        {/* Content container */}
        <div className="content-container">
          <img 
            src={civLogo} 
            className="App-logo" 
            alt="Civilization VII Logo" 
          />
          
          <h1>Civilization VII</h1>
          
          <div className="gold-line"></div>
          
          <p>Explora, conquista y forja tu imperio en la nueva era de estrategia. Con mecánicas revolucionarias, gráficos impresionantes y líderes históricos, Civilization VII redefine el género de estrategia por turnos.</p>
          
          <a
            className="App-button"
            href="https://civilization.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserva Ahora
          </a>
          
          {/* Game features */}
          <div className="features-grid">
            <div className="feature-card">
              <h3>NUEVAS MECÁNICAS</h3>
              <p>Sistema de eras dinámico y diplomacia avanzada</p>
            </div>
            <div className="feature-card">
              <h3>GRÁFICOS 4K</h3>
              <p>Mundo detallado con efectos visuales impresionantes</p>
            </div>
            <div className="feature-card">
              <h3>MULTIJUGADOR</h3>
              <p>Competencia online con hasta 12 jugadores</p>
            </div>
            <div className="feature-card">
              <h3>CIVILIZACIONES</h3>
              <p>Más de 50 culturas históricas para liderar</p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="footer">
            <p>© 2025 2K Games, Inc. Civilization es una marca registrada de Take-Two Interactive Software, Inc.</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
