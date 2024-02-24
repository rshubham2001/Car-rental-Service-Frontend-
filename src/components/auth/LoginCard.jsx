import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';
import { loginUser } from '../../services/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginCard() {
  const [formData, setFormData] = useState({
    emailId: '',
    password: ''
  });

  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(formData);
      toast.success('User logged in successfully');
      sessionStorage.setItem('userData', JSON.stringify(response));
      navigate(routes.HOME);
    } catch (error) {
      toast.error(error.response.data.errorMessage);
      console.log(error.response.data.errorCode + ' ' + error.response.data.errorMessage);
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: ''
      }));
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="card mx-auto cst-card" style={{ maxWidth: '400px', marginTop: '100px' }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              name="emailId"
              id="email"
              value={formData.emailId}
              placeholder="Enter your email"
              required
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label"></label>
            <div style={{ display: 'flex' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                required
                onChange={handleOnChange}
              />
              <button type="button" className="btn btn-outline-secondary" style={{ marginLeft: '3px' }} onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary cst-btn">
                Login
              </button>
            </div>
          </div>
        </form>

        <hr />

        <p className="text-center">
          New user? <Link style={{ textDecoration: 'none', color: '0b0633' }} to={routes.REGISTER}>Create an account</Link>
        </p>
      </div>
    </div>
  );
}
