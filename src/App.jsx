import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RadioPlayer from './components/RadioPlayer';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-background">
      <Navbar />
      <div className="content">
        <Header />
        <div className="main-content">
          <RadioPlayer />
          <News />
        </div>
      </div>
      <Footer />
      <a href="https://wa.me/1234567890" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://image.flaticon.com/icons/png/512/124/124034.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default App;