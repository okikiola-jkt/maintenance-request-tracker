import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const NewRequestTable = async () => {
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + '/admin/request';
    const response = await axios.get(requestEndpoint, 
     {
            headers: {
                Authorization: localStorage.getItem('adminToken')
            }
        }
    );

    return await response.data
}

export const useAdminGetAllRequests = () => {
    return useQuery(
        {   
            queryKey: ["getallrequest"],
            queryFn: NewRequestTable
        }
    )
}