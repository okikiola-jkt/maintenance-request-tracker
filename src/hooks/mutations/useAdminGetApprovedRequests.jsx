import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ApprovedRequestsTable = async () => {
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + '/admin/request?status=completed';


        const response = await axios.get(requestEndpoint, 
       
     {
            headers: {
                Authorization: localStorage.getItem('adminToken')
            }
        }
    );

    return await response.data
}

export const useAdminGetApprovedRequests = () => {
    return useQuery(
        {   
            queryKey: ["getapprovedrequest"],
            queryFn: ApprovedRequestsTable
        }
    )
}