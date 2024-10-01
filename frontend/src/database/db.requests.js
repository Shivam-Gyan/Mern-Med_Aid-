import axios from "axios";

class requestService {

    login = async (data) => {

        try {
            const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN+'/user/login',
                data, {
                withCredentials: true,
                headers: { "Content-Type": "application/json" }
            }
            )
            return response.data;

        } catch (error) {
            throw error.response.data;
        }
    }
    register = async (data) => {

        try {
            const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN+'/user/register',
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
            const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN+'/user/patient/details',
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
            const response = await axios.get(import.meta.env.VITE_SERVER_DOMAIN+'/user/patient/logout',
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )
            return response.data;

        } catch (error) {
            throw error.response.data;
        }
    }


}


export const RequestService = new requestService()