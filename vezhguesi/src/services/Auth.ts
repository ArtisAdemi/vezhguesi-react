import axios from "axios";
import { LoginRequest, LoginResponse, SignupRequest, UpdateUserDataRequest, VerifyEmailRequest } from "../models/Auth";
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
        localStorage.removeItem("userData");
    }

    async getUserData(token: string): Promise<LoginResponse> {
        const response = await axios.get(`${API_URL}/users/user-data`, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    }

    async updateUserData(req: UpdateUserDataRequest, token: string, setUser: (user: LoginResponse) => void): Promise<void> {
        const response = await axios.put(`${API_URL}/auth/update`, req, { headers: { Authorization: `Bearer ${token}` } });
        const newUserData: LoginResponse = {
            token: token,
            userData: response.data
        }
        setUser(newUserData);
        return response.data;
    }
}

export default new AuthService();
