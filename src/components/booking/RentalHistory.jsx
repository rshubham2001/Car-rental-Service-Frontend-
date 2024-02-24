import React, { useEffect, useState } from 'react';
import RentalItem from './RentalItem';
import { getCancelledRentalByEmailId, getRentalByEmailId, cancellRentalsByRentalId } from '../../services/Rental';
import { toast } from 'react-toastify';
import CancelledRentalItem from './CancelledRentalItems';

export default function RentalHistory() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const emailId = userData.emailId;
  const [status, setStatus] = useState(false);
  const [selectedTab, setSelectedTab] = useState('rentals');
  const [rentalHistory, setRentalHistory] = useState([]);
  const [cancelledRental, setCancelledRental] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [cancelErrorMessage, setCancelErrorMessage] = useState('');

  useEffect(() => {
    fetchRentalHistory();
    fetchCancelledRentalHistory();
  }, [status,emailId]);

  const fetchRentalHistory = async () => {
    try {
      const response = await getRentalByEmailId(emailId);
      setRentalHistory(response.data);
    } catch (error) {
      setErrorMessage('No rental history found');
    }
  };

  const fetchCancelledRentalHistory = async () => {
    try {
      const response = await getCancelledRentalByEmailId(emailId);
      setCancelledRental(response.data);
    } catch (error) {
      setCancelErrorMessage('No cancelled rental history found');
    }
  };


  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleCancel = async (rentalId) => {
    try {
      await cancellRentalsByRentalId(rentalId);
      setStatus(!status);
    } catch (error) {
      toast.error(error.response.data.errorMessage);
    }
  };

  const renderRentalItems = () => {
    if (errorMessage || rentalHistory.length === 0) {
      return <p>{errorMessage || 'No rental history available'}</p>;
    }

    return rentalHistory.map((rental) => (
      <RentalItem
        key={rental.rentalId}
        rentalId={rental.rentalId}
        carId={rental.carId}
        bookingDate={rental.bookingDate}
        reservationStartDate={rental.reservationStartDate}
        reservationDuration={rental.reservationDuration}
        totalCost={rental.totalCost}
        reservationStatus={rental.reservationStatus}
        handleCancel={handleCancel}
      />
    ));
  };

  const renderCancelledRentalItems = () => {
    if (cancelErrorMessage && cancelledRental.length === 0) {
      return <p>{cancelErrorMessage || 'No cancelled rental available'}</p>;
    }

    return cancelledRental.map((cancelledItem) => (
      <CancelledRentalItem
        key={cancelledItem.cancelledId}
        cancelledId={cancelledItem.cancelledId}
        rentalId={cancelledItem.rentalId}
        carId={cancelledItem.carId}
        reservationStartDate={cancelledItem.reservationStartDate}
        cancellationDate={cancelledItem.cancellationDate}
        totalCost={cancelledItem.totalCost}
        refundAmount={cancelledItem.refundAmount}
      />
    ));
  };

  return (
    <>
      <div className="btn-group mb-4" role="group" aria-label="Rental History Tabs">
        <button
          type="button"
          className={`btn ${selectedTab === 'rentals' ? 'btn-primary' : 'btn-secondary'} me-2`}
          onClick={() => handleTabChange('rentals')}
        >
          Rentals
        </button>
        <button
          type="button"
          className={`btn ${selectedTab === 'cRentals' ? 'btn-danger' : 'btn-secondary'}`}
          onClick={() => handleTabChange('cRentals')}
        >
          Cancelled Rentals
        </button>
      </div>

      {selectedTab === 'rentals' && <div>{renderRentalItems()}</div>}

      {selectedTab === 'cRentals' && <div>{renderCancelledRentalItems()}</div>}
    </>
  );
}
