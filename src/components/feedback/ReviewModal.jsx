import React, { useState } from 'react';
import { addFeedback, editFeedback } from '../../services/Feedback';
import { toast } from 'react-toastify';

const ReviewModal = ({ show, onClose, rentalId, carId, feedbackExists }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const name = JSON.parse(sessionStorage.getItem('userData')).customerName;
  const emailId = JSON.parse(sessionStorage.getItem('userData')).emailId;


  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      emailId,
      rentalId,
      message: reviewText,
      rating
    };

    if (feedbackExists) {
      try {
        await editFeedback(formData);
        toast.success("Feedback edited successfully");
      } catch (error) {
        console.log(error);
      }
      setReviewText('');
      setRating(0);
      onClose();
    } else {
      try {
        await addFeedback(formData);
        toast.success("Feedback added successfully");
      } catch (error) {
        console.log(error);
      }
      setReviewText('');
      setRating(0);
      onClose();
    }
  };
  const handleRating = (event) => {
    if (isNaN(event.target.value)) {
      setRating('');
    } else {
      setRating(parseFloat(event.target.value));
    }
  };

  return (
    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog ">
        <div className="modal-content" style={{ backgroundColor: '#e5eaed' }}>
          <div className="modal-header">
            <h5 className="modal-title">Review Form</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input type="text" id="name" className="form-control" value={name} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="rentalId" className="form-label">
                  Rental ID:
                </label>
                <input type="text" id="rentalId" className="form-control" value={rentalId} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="carId" className="form-label">
                  Car ID:
                </label>
                <input type="text" id="carId" className="form-control" value={carId} readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating:
                </label>
                <input
                  type="number"
                  id="rating"
                  step={0.5}
                  className="form-control"
                  value={rating}
                  min={0}
                  max={5}
                  onChange={handleRating}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reviewText" className="form-label">
                  Review:
                </label>
                <textarea
                  id="reviewText"
                  className="form-control"
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Enter your review..."
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary cst-btn" onClick={handleReviewSubmit}>
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
