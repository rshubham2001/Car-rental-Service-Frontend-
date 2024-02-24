import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../services/User';
import { useNavigate } from 'react-router-dom';
import routes from '../../constant/routes';


export default function RegistrationCard() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: '',
    emailId: '',
    drivingLicence: '',
    phone: '',
    password: '',
    dateOfBirth: '',
    address: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currDate = new Date();

    let yearsDiff = currDate.getFullYear() - formData.dateOfBirth.getFullYear();
const monthsDiff = currDate.getMonth() - formData.dateOfBirth.getMonth();
const daysDiff = currDate.getDate() - formData.dateOfBirth.getDate();

if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
  yearsDiff--;
}

if(yearsDiff<18){
  toast.error("User should be atleast 18 years old");
  return;
}

    
    try {
      await registerUser(formData);
      toast.success("User Registered Successfully.");
      navigate(routes.LOGIN);

    } catch (error) {

      if (error.response && error.response.status){
        toast.error(error.response.data.errorMessage);
        console.error(error.response.data.errorCode + " " + error.response.data.errorMessage);
      }
      else {
        toast.error("Some error occurres during registration");
        console.error("Some error occurred during registration");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: date
    }));
  };

  return (
    <div className="card mx-auto cst-card cst-Rcard" style={{ maxWidth: '550px',marginTop:"100px" }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-lg-6">
              <label htmlFor="name" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="customerName"
                placeholder="Full name"
                required
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 cst-m">
              <label htmlFor="emailId" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                id="emailId"
                name="emailId"
                placeholder="Email Id"
                required
                value={formData.emailId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <label htmlFor="drivingLicence" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="drivingLicence"
                name="drivingLicence"
                placeholder="Driving Licence"
                required
                value={formData.drivingLicence}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 cst-m">
              <label htmlFor="phoneNumber" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phone"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-6">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-6 cst-m mt-4">
              <label htmlFor="dob" className="form-label"></label>
              <DatePicker
                className="form-control"
                id="dob"
                name="dateOfBirth"
                required
                selected={formData.dateOfBirth}
                onChange={handleDateChange}
                placeholderText='DOB:- yyyy-MM-dd'
                dateFormat="yyyy-MM-dd" 
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-12">
              <label htmlFor="address" className="form-label"></label>
              <textarea
                maxLength={50}
                className="form-control textarea-auto-height"
                id="address"
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary cst-btn">Register</button>
            </div>
          </div>
          <hr />
          <div className="row mt-3 justify-content-center">
            <div className="col-auto">
              <p>Already have an account? <Link style={{ textDecoration: "none" }} to={routes.LOGIN}>Login</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
