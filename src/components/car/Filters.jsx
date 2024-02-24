// StartDateInput.js
import React from 'react';

export const StartDateInput = ({ startDate, handleChange }) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date

  return (
    <div>
      <label>Start Date:</label>
      <input type="date" value={startDate} min={currentDate} onChange={handleChange} />
    </div>
  );
};



// EndDateInput.js

export const EndDateInput = ({ endDate, handleChange }) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date

  return (
    <div>
      <label>End Date:</label>
      <input type="date" value={endDate} min={currentDate} onChange={handleChange} />
    </div>
  );
};




// RatingRadioButtons.js

export const RatingDropdown = ({ selectedRating, handleRatingChange }) => {
  const ratings = ['Choose',1, 2, 3, 4, 5];

  return (
    <div>
      <label>Rating:</label>
      <select className='mx-2 px-2' value={selectedRating} onChange={handleRatingChange}>
        {ratings.map((rating) => (
          <option  key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </div>
  );
};





// CarTypeDropdown.js

export const CarTypeDropdown = ({ selectedCarType, handleCarTypeChange }) => {
  const carTypes = ['Sedan', 'SUV', 'Hatchback'];

  return (
    <div>
      <label>Car Type:</label>
      <select value={selectedCarType} onChange={handleCarTypeChange}>
        <option value="">All</option>
        {carTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
