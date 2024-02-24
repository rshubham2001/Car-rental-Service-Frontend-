import React, { useState } from 'react';
import { StartDateInput, EndDateInput, RatingDropdown, CarTypeDropdown } from './Filters';

const Filter = ({ handleFilterChange, setFilters }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCarType, setSelectedCarType] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(parseInt(e.target.value));
  };

  const handleCarTypeChange = (e) => {
    setSelectedCarType(e.target.value);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    const filters = {
      startDate,
      endDate,
      rating: selectedRating,
      carType: selectedCarType,
    };
    handleFilterChange(filters);
  };

  const handleClearFilters = () => {
    setStartDate('');
    setEndDate('');
    setSelectedRating(0);
    setSelectedCarType('');
    setFilters({});
  };

  return (
    <div className="card mt-2 cst-card">
      <div className="card-body">
        <h3 className="card-title">Filters</h3>
        <form onSubmit={handleApplyFilters}>
          <div className="mb-4">
            <StartDateInput startDate={startDate} handleChange={handleStartDateChange} />
          </div>
          <div className="mb-4">
            <EndDateInput endDate={endDate} handleChange={handleEndDateChange} />
          </div>
          <div className="mb-4">
            <RatingDropdown selectedRating={selectedRating} handleRatingChange={handleRatingChange} />
          </div>
          <div className="mb-4">
            <CarTypeDropdown selectedCarType={selectedCarType} handleCarTypeChange={handleCarTypeChange} />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-2">Apply Filters</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={handleClearFilters}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;