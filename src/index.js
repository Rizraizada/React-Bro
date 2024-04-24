import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Carousel from './components/Carousel'; // Import the Carousel component
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Carousel */}
      <Carousel />

      <div className="homepage">
        <h1>Welcome to My Calculator</h1>
      </div>
      
      {/* Render the Calculator component */}
      <Calculator />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
