import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Jason from '../IMG/rev1.jpg';
import John from '../IMG/rev2.jpg';
import emilia from '../IMG/rev3.jpg';

const Review = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="heading">
        <span>Reviews</span>
        <h1>What Our Customers Say</h1>
      </div>
      <div className="reviews-container">
        <div className="box">
          <div className="rev-img">
            <img src={Jason} alt="person" />
          </div>
          <h2>Jason</h2>
          <div className="stars">
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarHalf className='bx bxs-star-half'/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, neque. Vero totam corporis rerum sint. Temporibus quisquam minus magni quibusdam nobis odit doloremque modi iusto perspiciatis tempore. Repellat, est sint.</p>
        </div>
        <div className="box">
          <div className="rev-img">
            <img src={John}  alt="person" />
          </div>
          <h2>John</h2>
          <div className="stars">
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarHalf className='bx bxs-star-half'/>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, reiciendis sunt. Illum, aliquid! Quo quibusdam a iure distinctio. Aperiam inventore provident voluptatem sed quas dicta suscipit incidunt atque esse pariatur.</p>
        </div>
        <div className="box">
          <div className="rev-img">
            <img src={emilia}  alt="person" />
          </div>
          <h2>Emilia</h2>
          <div className="stars">
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarFill className='bx bxs-star'/>
            <BsStarHalf className='bx bxs-star-half'/>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusamus eos dolor laboriosam nihil id architecto ducimus illum quae, obcaecati, veniam deleniti, reprehenderit voluptate soluta officia consequuntur distinctio assumenda commodi.</p>
        </div>
      </div>
    </section>
  )
}

export default Review;
