import user from '../../images/user.png';

export default function CustomerCard() {
  const { emailId, customerName, phone, drivingLicence, dateOfBirth, address } = JSON.parse(
    sessionStorage.getItem('userData')
  );

  return (
    <div className="card mt-3 cst-card" style={{ marginRight: '5px' }}>
      <div className="card-body d-flex flex-column">
        <div className="text-center d-flex align-items-center justify-content-center">
          <div className="user-icon">
            <img src={user} alt="User" />
          </div>
        </div>
        <div className="table-responsive cst-table">
          <div
            className="table-row-bg m-2 p-2 cst-details"
            style={{ backgroundColor: 'rgb(226 234 239)' }}
          >
            <div className="row mt-2">
              <div className="col-4 fw-bold w-40">Name:</div>
              <div className="col-8">{customerName}</div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold w-40">Email:</div>
              <div className="col-8">{emailId}</div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold w-40">Phone Number:</div>
              <div className="col-8">{phone}</div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold">Driving Licence:</div>
              <div className="col-8">{drivingLicence}</div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold">Date of Birth:</div>
              <div className="col-8">{dateOfBirth}</div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold w-40">Address:</div>
              <div className="col-8">{address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
