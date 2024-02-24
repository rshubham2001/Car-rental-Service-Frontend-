import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getRentalByEmailId = async (emailId)=>{
    try{
        const response  = await axios.get(`${BASE_URL}/getrentalsbycustomerid/${emailId}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const getCancelledRentalByEmailId = async(emailId)=>{
    try{
        const response = await axios.get(`${BASE_URL}/getcancelledrentalsbyemailid/${emailId}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const cancellRentalsByRentalId = async(rentalId)=>{
    try{
        const response = await axios.get(`${BASE_URL}/cancelrentals/${rentalId}`);
        return response;
    }catch(error){
        throw error;
    }
}

export const rentCar = async(data)=>{
    try{
        const response = await axios.post(`${BASE_URL}/rentcar`, data);
        return response;
    }catch(error){
        throw error;
    }
}