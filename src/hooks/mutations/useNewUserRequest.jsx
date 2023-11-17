import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const UserDashboard2 = async ({details}) => {
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + '/request';
    const response = await axios.post(requestEndpoint, 
        {details}, {
            headers: {
                Authorization: localStorage.getItem('userToken')
            }
        }
    );

    return await response.data
}

export const useNewUserRequest = () => {
    return useMutation(
        {
            mutationFn: UserDashboard2
        }
    )
}