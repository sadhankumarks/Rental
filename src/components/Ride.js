import React from 'react';
import { BiCar, BiCalendarCheck, BiCalendarStar } from 'react-icons/bi';

const Ride = () => {
  return (
    <section className="ride" id="ride">
      <div className="heading">
        <span>How It Works</span>
        <h1>Rent With 3 Easy Steps</h1>
      </div>
      <div className="ride-container">
        <div className="box">
          <BiCar className="icon"/>
          <h2>Choose A Location</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </div>

        <div className="box">
          <BiCalendarCheck className="icon"/>
          <h2>Pick-Up Date</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </div>

        <div className="box">
          <BiCalendarStar className="icon"/>
          <h2>Book A Car</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </div>
      </div>
    </section>
  )
}

export default Ride;
