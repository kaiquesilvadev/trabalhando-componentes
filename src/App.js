import React from 'react';
import './App.css';
import Footer from './componentes/footer';
import Header from './componentes/header';
import HomePage from './componentes/HomPages';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
