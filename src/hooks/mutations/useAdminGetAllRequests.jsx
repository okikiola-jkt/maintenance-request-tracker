import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getAllRequest = async (status) => {
    console.log('>>>>> status', status, '<<<');
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + `/admin/request${status ? `?status=${status}` : ''}`;
    const response = await axios.get(requestEndpoint, 
        
     {
            headers: {
                Authorization: localStorage.getItem('adminToken')
            }
        }
    );

    return await response.data
}

export const useAdminGetAllRequests = (status) => {
    return useQuery(
        {   
            queryKey: [`getallrequest-${status}`],
            queryFn: () => getAllRequest(status)
        }
    )
}