import React, { useState, useEffect} from 'react';
import ReviewModal from '../feedback/ReviewModal';
import {findFeedbackByRentalId} from '../../services/Feedback';

const RentalItem = ({
  rentalId,
  carId,
  bookingDate,
  reservationStartDate,
  reservationDuration,
  totalCost,
  reservationStatus,
  handleCancel,
}) => {
  const cardClassName = `card mt-3 mb-3 ${reservationStatus === 'Confirm'
    ? 'confirmed'
    : reservationStatus === 'Cancelled'
      ? 'cancelled'
      : ''
    }`;

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [feedbackExists, setFeedbackExists] = useState(false);

  useEffect(() => {
    checkFeedbackStatus();
  });

  const checkFeedbackStatus = async () => {
    try {
   await findFeedbackByRentalId(rentalId);
    } catch (error) {
      setFeedbackExists(error.response.data);
    }
  };

  const handleReviewClick = () => {
    setShowReviewModal(true);
  };

  const handleReviewClose = () => {
    setShowReviewModal(false);
  };


  const currentDate = new Date();
  const reservationEndDate = new Date(reservationStartDate);
  reservationEndDate.setDate(reservationEndDate.getDate() + reservationDuration);

  const shouldShowGiveReviewButton =
    reservationStatus === 'Cancelled' ||
    reservationEndDate <= currentDate;

    const giveReviewButtonText = feedbackExists ? 'Edit Review' : 'Give Review';

  return (
    <div className={cardClassName}>
      <div className="card-body">
        <h5 className="card-title">Rental ID: {rentalId}</h5>
        <table className="table">
          <tbody>
            <tr>
              <th>Car ID</th>
              <th>Booking Date</th>
              <th>Reservation Start Date</th>
              <th>Reservation Duration</th>
              <th>Reservation Status</th>
              <th>Total Cost</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{carId}</td>
              <td>{bookingDate}</td>
              <td>{reservationStartDate}</td>
              <td>
                {`${reservationDuration} ${reservationDuration > 1 ? 'days' : 'day'}`}
              </td>
              <td>{reservationStatus}</td>
              <td>{totalCost}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(rentalId)}
                  disabled={reservationStatus === 'Cancelled'}
                >
                  {reservationStatus === 'Cancelled' ? 'Cancelled' : 'Cancel'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {shouldShowGiveReviewButton && (
          <button className="btn btn-primary cst-btn" onClick={handleReviewClick}>
           {giveReviewButtonText}
          </button>
        )}
      </div>

      <ReviewModal 
      show={showReviewModal} 
      onClose={handleReviewClose} 
      rentalId={rentalId} 
      carId={carId} 
      feedbackExists={feedbackExists}
     />
    </div>
  );
};

export default RentalItem;
