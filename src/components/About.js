import React from 'react';
import about from '../IMG/about.png';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading">
        <span>About Us</span>
        <h1>Best Customer Experience</h1>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src={about} alt="About" />
        </div>
        <div className="about-text">
          <span>About Us</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est incidunt quo quaerat excepturi tempora ex accusantium dolor dicta. Earum voluptatum incidunt odio quos non rem inventore perspiciatis repudiandae adipisci?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est incidunt quo quaerat excepturi tempora ex accusantium dolor dicta. Earum voluptatum incidunt odio quos non rem inventore perspiciatis repudiandae adipisci?</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default About;


