import axios from "axios";
import { SignupRequest, VerifyEmailRequest } from "../models/Users";
import { API_URL } from "./backendUrl";


class AuthService {

    async signup(signupRequest: SignupRequest): Promise<void> {
        console.log("API_URL", API_URL);
        const response = await axios.post(`${API_URL}/users/`, signupRequest);
        return response.data;
    }

    async verifyEmail(req: VerifyEmailRequest): Promise<void> {
        console.log("token", req.token);
        const response = await axios.get(`${API_URL}/users/verify-signup/${req.token}`);
        return response.data;
    }
}

export default new AuthService();