import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AdminLogin = async ({email, password}) => {
    const adminLoginEndpoint = process.env.REACT_APP_BACKEND_URL + '/admin/signin';
    const response = await axios.post( adminLoginEndpoint, {
        email, password
    });

    return await response.data;
}

export const useAdminLogin = () => {
    return useMutation({
        mutationFn: AdminLogin
    })
}