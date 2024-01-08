import React from 'react';
import apple from '../IMG/ios.png';
import Play from '../IMG/playstore.png';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="text">
        <h1> <span>Looking </span> to <br />rent a car</h1>
        <p>lorem ipsum dolor sit amet consecteur adipisicing elit. Fuga, ut qui.</p>
        <div className="app-stores">
          <a href="#"><img src={apple} alt="google play" /></a>
          <a href="#"><img src={Play} alt="play store" /></a>
        </div>
      </div>
      <div className="form-container">
        <form action="">
          <div className="input-box">
            <span>Location</span>
            <input type="search" name="" id="" placeholder="Search Places" />
          </div>
          <div className="input-box">
            <span>Pick-Up Date</span>
            <input type="date" name="" id="" />
          </div>
          <div className="input-box">
            <span>Return Date</span>
            <input type="date" name="" id="" />
          </div>
          <input type="submit" name="" id="" className="btn" />
        </form>
      </div>
    </section>
  )
}

export default Home;
