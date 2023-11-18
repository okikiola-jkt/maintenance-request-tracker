import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";


const UserDashboard2 = async () => {
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + '/request';
    const response = await axios.get(requestEndpoint, 
     {
            headers: {
                Authorization: localStorage.getItem('userToken')
            }
        }
    );

    return await response.data
}

export const useGetAllUserRequests = () => {
    return useQuery(
        {   
            queryKey: ["getalluserrequest"],
            queryFn: UserDashboard2
        }
    )
}