import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export const getAllCars = async()=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallcar`);
        return response;
    }catch(error){
        throw error;
    }
}
export const getAllAvailableCars = async(startDate, endDate)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallavailablecar/${startDate}/${endDate}`);
        return response;
    }catch(error){
        throw error;
    }
}
export const getAllAvailableCarsByCarType = async(startDate, endDate, carType)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallavailablecarbycartype/${startDate}/${endDate}/${carType}`);
        return response;
    }catch(error){
        throw error;
    }
}
export const getAllCarsByRatings = async(ratings)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallcarbyratings/${ratings}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const getAllAvailableCarsWithRatings = async(startDate, endDate,ratings)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallavailablecarwithratings/${startDate}/${endDate}/${ratings}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const  getAllAvailableCarsByCarTypeWithRatings = async(startDate, endDate,carType,ratings)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallavailablecarbycartypewithratings/${startDate}/${endDate}/${carType}/${ratings}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const getAllCarByCarType = async(carType)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getallcarbycartype/${carType}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const getAllCarByCarTypeWithRatings = async(carType, ratings)=>{
    try{
        const response = axios.get(`${BASE_URL}/getallcarbycartypewithratings/${carType}/${ratings}`);
        return response;
    }catch(error){
        throw error;
    }
}