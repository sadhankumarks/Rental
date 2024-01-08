import React from 'react';
import City from '../IMG/car1.jpg';
import Accord from '../IMG/car2.jpg';
import City1 from '../IMG/car3.jpg';
import Civic from '../IMG/car4.jpg';
import Civic1 from '../IMG/car5.jpg';
import ferrari from '../IMG/car6.jpg';


const Service = () => {
  return(
    <section className="services" id="services">
      <div className="heading">
        <span>Best Services</span>
        <h1>Explore Out Top Deals <br/> From Top Rated Dealers</h1>
      </div>
      <div className="services-container">
        <div className="box">
          <div className="box-img">
            <img src={City} alt="Honda"/>
          </div>
          <p>2017</p>
          <h3>2018 City</h3>
          <h2>50000 | 70000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={Accord} alt="Honda"/>
          </div>
          <p>2018</p>
          <h3>2018 Accord</h3>
          <h2>30000 | 30000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={City1} alt="Honda"/>
          </div>
          <p>2019</p>
          <h3>2019 City</h3>
          <h2>60000 | 70000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        <div className="box">
          <div className ="box-img">
            <img src={Civic} alt="Honda"/>
          </div>
          <p>2017</p>
          <h3>2017 Honda Civic</h3>
          <h2>60000 | 70000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={Civic1} alt="Honda"/>
          </div>
          <p>2018</p>
          <h3>2018 Honda Civic</h3>
          <h2>70000 | 80000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>

        <div className="box">
          <div className="box-img">
            <img src={ferrari} alt="Honda"/>
          </div>
          <p>2016</p>
          <h3>2016 ferrari</h3>
          <h2>100000 | 150000 Rupees <span>/Month</span></h2>
          <a href="#" className="btn">Rent Now</a>
        </div>
      </div>
    </section>
  )
}

export default Service;