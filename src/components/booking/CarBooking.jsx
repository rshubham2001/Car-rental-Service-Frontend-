import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import CarList from '../car/Car';
import Filter from '../car/Filter';
import { useState, useEffect } from 'react';
import {
  getAllCars,
  getAllCarsByRatings,
  getAllAvailableCars,
  getAllAvailableCarsByCarType,
  getAllAvailableCarsByCarTypeWithRatings,
  getAllAvailableCarsWithRatings,
  getAllCarByCarTypeWithRatings,
  getAllCarByCarType,
} from '../../services/Car'; // Import the API service functions
import routes from '../../constant/routes';
import { useNavigate } from 'react-router-dom';

export default function CarBooking() {
  const [carList, setCarList] = useState([]);
  const [filters, setFilters] = useState({}); // Store the selected filters
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (!userDataString) {
      navigate(routes.LOGIN);
    }
    fetchCars();
  }, [filters]); 

  const fetchCars = async () => {
    try {
      let response;

      if(filters.rating==='Choose'){
        filters.rating = null;
      }

      if (filters.startDate && filters.endDate) {

        if (filters.carType && filters.rating) {
          response = await getAllAvailableCarsByCarTypeWithRatings(filters.startDate, filters.endDate, filters.carType, filters.rating);

        } else if (filters.rating) {
          response = await getAllAvailableCarsWithRatings(filters.startDate, filters.endDate, filters.rating);

        } else if (filters.carType) {
          response = await getAllAvailableCarsByCarType(filters.startDate, filters.endDate, filters.carType);
        } else {
          response = await getAllAvailableCars(filters.startDate, filters.endDate);
        }
      } else if (filters.rating && filters.carType) {
        response = await getAllCarByCarTypeWithRatings(filters.carType, filters.rating);
      }else if(filters.rating){
        response = await getAllCarsByRatings(filters.rating);
      }else if(filters.carType){
        response = await getAllCarByCarType(filters.carType);
      }
       else {
        response = await getAllCars();
      }
  
      const data = response.data;
      setCarList(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
      setCarList([]);
    }
  };
  

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-2 mt-2">
            <Filter 
            handleFilterChange={handleFilterChange} 
            setFilters={setFilters}/>
          </div>
          <div className="col-md-10 mt-3 d-flex flex-wrap">
          {errorMessage ? (
              <div role="alert">
                {errorMessage}
              </div>
            ) : (
              carList.map((car) => (
                <div key={car.carId} className="col-md-4 mb-4">
                  <CarList
                    carId={car.carId}
                    carMake={car.carMake}
                    carModel={car.carModel}
                    carType={car.carType}
                    capacity={car.capacity}
                    carRentalRate={car.carRentalRate}
                    ratings={car.ratings}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
