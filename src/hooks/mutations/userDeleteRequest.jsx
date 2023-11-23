import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const UserDashboard2 = async (userId) => {
const requestEndpoint = process.env.REACT_APP_BACKEND_URL + `/request/${userId}`;
    const response = await axios.delete(requestEndpoint, 
         {
            headers: {
                Authorization: localStorage.getItem('userToken')
                
            }
        }
    );

    return await response.data
}

export const useDeleteRequest = () => {
    return useMutation(
        {
            mutationFn: UserDashboard2
        }
    )
}