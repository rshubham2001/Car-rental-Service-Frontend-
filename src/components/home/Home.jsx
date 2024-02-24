import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import About1 from '../../images/Home/About1.png';
import About2 from '../../images/Home/About2.png';
import About3 from '../../images/Home/About3.png';
import Middle from '../../images/Home/Middle.jpg';
import { Link } from 'react-router-dom';
import routes from '../../constant/routes';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="position-relative middle" style={{ marginTop: '8px' }}>
        <img src={Middle} className="d-block w-100 img-fluid" alt="Last" />
        <div className="position-absolute top-50 start-50 translate-middle text-center cst-cpt">
          <p>Drive Anyywhere</p>
          <h1>Drive Safar</h1>
        </div>
      </div>
      <div className="mt-2 mb-2 instruction">
        <p>Book a car in 3 Simple steps</p>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <div className="card-body cst-cnt">
                <img src={About1} alt="About1" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="card-body cst-inst">
                <h5 className="card-title">
                  <Link to={routes.LOGIN}>Login</Link> or <Link to={routes.REGISTER}>Create Account</Link>
                </h5>
                <p className="card-text mt-5">Fill up your credentials, your details, and join us.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div>
              <div className="card-body cst-inst">
                <h5 className="card-title">
                  <Link to={routes.BOOKING}>Rent a Car</Link>
                </h5>
                <p className="card-text mt-5">Find a car that suits you.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="card-body cst-cnt">
                <img src={About3} alt="About2" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div>
              <div className="card-body cst-cnt">
                <img src={About2} alt="About3" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <div className="card-body cst-inst">
                <h5 className="card-title">Let's GO. Drive Safe.</h5>
                <p className="card-text mt-5">Please share your valuable experience with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
