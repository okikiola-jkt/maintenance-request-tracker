import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const NewRequestTable = async ({status, id}) => {
    const requestEndpoint = process.env.REACT_APP_BACKEND_URL + `/admin/request/${id}`;
    const response = await axios.put(requestEndpoint, 
        { status },
     {
            headers: {
                Authorization: localStorage.getItem('adminToken')
            }
        }
    );

    return await response.data
}

export const useChangeRequestStatus = () => {
    return useMutation({
        mutationFn: NewRequestTable
    })
}