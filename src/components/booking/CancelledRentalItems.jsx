import React from 'react';

const CancelledRentalItem = ({
  cancelledId,
  rentalId,
  carId,
  reservationStartDate,
  cancellationDate,
  totalCost,
  refundAmount,
}) => {

  return (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">Cancelled ID: {cancelledId}</h5>
        <table className="table">
          <tbody>
            <tr>
              <th>Rental ID</th>
              <th>Car ID</th>
              <th>Reservation Start Date</th>
              <th>Cancellation Date</th>
              <th>Total Cost</th>
              <th>Refund Amount</th>
            </tr>
            <tr>
              <td>{rentalId}</td>
              <td>{carId}</td>
              <td>{reservationStartDate}</td>
              <td>{cancellationDate}</td>
              <td>{totalCost}</td>
              <td>{refundAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CancelledRentalItem;
