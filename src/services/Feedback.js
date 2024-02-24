import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export const addFeedback = async(formData)=>{
    try{
        const response = axios.post(`${BASE_URL}/addfeedback`, formData);
        return response;
    }catch(error){
        throw error;
    }
}

export const editFeedback = async(formData)=>{
    try{
        const response = axios.put(`${BASE_URL}/editfeedback`, formData);
        return response;
    }catch(error){
        throw error;
    }
}

export const findFeedbackByRentalId = async(rentalId)=>{
    try{
        const response = axios.get(`${BASE_URL}/findfeedbackbyrentalid/${rentalId}`);
        return response;
    }catch(error){
        throw error;
    }
}