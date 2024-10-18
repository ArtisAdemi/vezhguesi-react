import axios from "axios";
import { LoginRequest, LoginResponse, SignupRequest, VerifyEmailRequest } from "../models/Auth";
import { API_URL } from "./backendUrl";


class AuthService {

    async signup(signupRequest: SignupRequest): Promise<void> {
        const response = await axios.post(`${API_URL}/auth/`, signupRequest);
        return response.data;
    }

    async verifyEmail(req: VerifyEmailRequest): Promise<void> {
        const response = await axios.get(`${API_URL}/auth/verify-signup/${req.token}`);
        return response.data;
    }

    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        const response = await axios.post(`${API_URL}/auth/login`, loginRequest);
        return response.data;
    }

    logout() {
        localStorage.removeItem("token");
    }
}

export default new AuthService();