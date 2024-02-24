import React from 'react';
import { useState } from 'react';
import BookingModal from '../booking/BookingModal';

export default function Car({ carId, carMake, carModel, carType, capacity, carRentalRate, ratings }) {
  const img = require(`../../images/carImages/${carId}.png`);

  const [showModal, setShowModal] = useState(false);

  const handleRentClick = () => {
    setShowModal(true); // Show the modal when the "Rent" button is clicked
  };

  return (
    <div className="card cst-card" style={{ marginRight:'10px', height:'440px'}}>
      <div className="card-body">
        <div className="card-img-top mb-5" style={{ height: '40%'}}>
          <img className='cst-img' src={img} alt={`Car ${carId}`} />
        </div>
        <div  className="card-text" style={{ height: '60%' }}>
          <div className="row">
            <div className="col">
              <p><b>Brand:</b> {carMake}</p>
            </div>
            <div className="col">
              <p><b>Model:</b> {carModel}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p><b>Type:</b> {carType}</p>
            </div>
            <div className="col">
              <p><b>Capacity:</b> {capacity}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p><b>Rate:</b> &#x20B9;{carRentalRate} per day</p>
            </div>
            <div className="col">
              <p><b>Ratings:</b> {ratings.toFixed(2)}</p>
            </div>
          </div>
          <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary" onClick={handleRentClick} style={{width:'100px'}}>Rent</button>
          </div>
        </div>
        </div>
        {showModal && (
        <BookingModal
        carId={carId}
          carMake={carMake}
          carModel={carModel}
          carType={carType}
          capacity={capacity}
          carRentalRate={carRentalRate}
          onClose={() => setShowModal(false)}
        />
      )}
      </div>
    </div>
  );
}
