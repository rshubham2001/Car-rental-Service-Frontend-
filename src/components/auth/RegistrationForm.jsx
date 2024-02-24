import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import SignInImage from "../../images/Login.svg";
import RegistrationCard from "./RegistrationCard";

export default function RegistrationForm() {
    return (
        <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <RegistrationCard/>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img className="img" src={SignInImage} alt="SignIn" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  
    )
}