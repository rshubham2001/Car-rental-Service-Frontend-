import React, { useState } from 'react';
import { rentCar } from '../../services/Rental';
import { toast } from 'react-toastify';
import booking from '../../images/booking.png';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingModal({ carId, carMake, carModel, carType, capacity, carRentalRate, onClose }) {
  const [formData, setFormData] = useState({
    emailId: JSON.parse(sessionStorage.getItem('userData')).emailId,
    reservationStartDate: null,
    reservationEndDate: null,
    carId: carId
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await rentCar(formData);
      console.log(formData);
      toast.success('Your booking is done');
    } catch (error) {
      toast.error(error.response.data.errorMessage);
    }
    onClose();
  };

  // Calculate the total cost
  const calculateCost = () => {
    const start = formData.reservationStartDate;
    const end = formData.reservationEndDate;
    if (!start || !end) {
      return 0;
    }
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const cost = days * carRentalRate;
    if (isNaN(days)) {
      return 0;
    }
    return cost;
  };

  const cost = calculateCost();

  const handleOnChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: '#e5eaed' }}>
          <div className="modal-header">
            <h5 className="modal-title">Rent Car</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <div className="car-details d-flex">
              <div className="car-info">
                <p>
                  <b>Brand:</b> {carMake}
                </p>
                <p>
                  <b>Model:</b> {carModel}
                </p>
                <p>
                  <b>Car Type:</b> {carType}
                </p>
                <p>
                  <b>Capacity:</b> {capacity}
                </p>
                <p>
                  <b>Rental Rate:</b> &#x20B9;{carRentalRate} per day
                </p>
              </div>
              <div className="car-image" style={{ marginLeft: '50px' }}>
                <img src={booking} alt="Car" style={{ width: '175px' }} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="startDate" style={{ marginRight: '7px' }}>
                  <b>Start Date:</b>
                </label>
                <ReactDatePicker
                  id="startDate"
                  name="reservationStartDate"
                  selected={formData.reservationStartDate}
                  onChange={(date) => handleOnChange('reservationStartDate', date)}
                  className="form-control"
                  minDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="yyyy-MM-dd"
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="endDate" style={{ marginRight: '16px' }}>
                  <b>End Date: </b>
                </label>
                <ReactDatePicker
                  id="endDate"
                  name="reservationEndDate"
                  selected={formData.reservationEndDate}
                  onChange={(date) => handleOnChange('reservationEndDate', date)}
                  className="form-control"
                  minDate={formData.reservationStartDate || new Date()}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="yyyy-MM-dd"
                />
              </div>

              <p className="mt-2">
                <b>Total Cost:</b> {cost}
              </p>

              <button type="submit" className="btn btn-primary">
                Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
