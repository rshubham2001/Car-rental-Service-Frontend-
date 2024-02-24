import axios from 'axios';

const BASE_URL = "http://localhost:8080";
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/addcustomer`, userData, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        return response;
      } catch (error) {
        throw error;
      }
}

export const loginUser = async (userCredentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/customerlogin`, userCredentials);
        return response.data;
    } catch (error) {
        throw error;
    }
}