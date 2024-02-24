import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import CustomerCard from "./CustomerCard";
import RentalHistory from "../booking/RentalHistory";

export default function Customer() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4 mb-4">
        <div className="row">
        <div className="d-flex justify-content-center mt-3">
            <CustomerCard />
          </div>

          <div className="col-lg-12 mt-3">
            <RentalHistory />
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
}
