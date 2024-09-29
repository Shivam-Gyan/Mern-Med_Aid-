import axios from "axios";

class requestService {

    login = async (data) => {

        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/login',
                data, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
            }
            )
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }
    register = async (data) => {

        try {
            const response = await axios.post('http://localhost:8000/api/v1/user/register',
                data, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
            }
            )
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }
    userDetails = async () => {

        try {
            const response = await axios.get('http://localhost:8000/api/v1/user/patient/details',
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }
    LogoutUser = async () => {

        try {
            const response = await axios.get('http://localhost:8000/api/v1/user/patient/logout',
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )
            return response.data;

        } catch (error) {
            return error.response.data;
        }
    }


}


export const RequestService = new requestService()