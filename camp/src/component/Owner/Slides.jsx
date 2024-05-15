import React from 'react';
import './CSS/Slides.css';
import { Link } from 'react-router-dom';

const Slides = () => {
 return (
    <div >
      <div class="cards">
      <Link to={'/Offers'}>
    <div class="card offers">
        <h6 className='text-xl font-bold mt-0 '>See All Your Offer</h6>
    </div>
    </Link>
    <Link to={'/Reservations'}>
    <div class="card reservation">
    <h6 className='text-xl font-bold'>Discover Your Reservations</h6>
    </div>
    </Link>
    <Link to={'/NewOffers'}>
    <div class="card new">
    <h6 className='text-xl font-bold'>Add New Offer</h6>
    </div>
    </Link>
    <Link to={'/Accessories'}>
    <div class="card accessories">
    <h6 className='text-xl font-bold'>Accessories</h6>
     </div>
    </Link>
    <Link to={'/Meals'}>
    <div class="card meals">
    <h6 className='text-xl font-bold'>Meals</h6>
    </div>
</Link> 
</div>
    </div>
 )
}

export default Slides;