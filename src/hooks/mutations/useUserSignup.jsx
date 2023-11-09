import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const UserSignup = async ({name, email, password, repeatPassword}) => {
    const signupEndpoint = process.env.REACT_APP_BACKEND_URL + '/user/signup';
    const response = await axios.post(signupEndpoint, {
        name, email, password
    });

    return await response.data
}

export const useUserSignup = () => {
    return useMutation(
        {
            mutationFn: UserSignup
        }
    )
}