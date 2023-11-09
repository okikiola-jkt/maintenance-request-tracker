import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const userLogin = async ({ email, password }) => {
    const loginEndpoint = process.env.REACT_APP_BACKEND_URL + '/user/signin';
    const response = await axios.post(loginEndpoint, {
        email, password
    });

    return await response.data;
}

export const useUserLogin = () => {
    return useMutation(
        {
            mutationFn: userLogin
        }
    )
}
