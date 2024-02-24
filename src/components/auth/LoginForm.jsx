import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import LoginCard from "./LoginCard";
import LoginImage from "../../images/Login.svg"

export default function LoginForm() {
    return (
        <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <LoginCard/>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img  src={LoginImage} alt="Login" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  
    )
}