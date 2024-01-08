import React from 'react';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Ride from './components/Ride';
import Copyright from './components/Copyright';
import Review from './components/Review';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Ride />
      <Service />
      <About /> 
      <Review />
      <Newsletter />
      <Copyright />
      
    </div>
  )
}


export default App;

