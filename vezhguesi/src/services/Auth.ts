import axios from "axios";
import { LoginRequest, LoginResponse, SignupRequest, UpdateUserDataRequest, UserData, VerifyEmailRequest } from "../models/Auth";
import { MAIN_API_URL } from "./backendUrl";

class AuthService {

    async signup(signupRequest: SignupRequest): Promise<void> {
        const response = await axios.post(`${MAIN_API_URL}/auth/`, signupRequest);
        return response.data;
    }

    async verifyEmail(req: VerifyEmailRequest): Promise<void> {
        const response = await axios.get(`${MAIN_API_URL}/auth/verify-signup/${req.token}`);
        return response.data;
    }

    async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        const response = await axios.post(`${MAIN_API_URL}/auth/login`, loginRequest);
        return response.data;
    }

    async getUserData(token: string): Promise<UserData> {
        const response = await axios.get(`${MAIN_API_URL}/users/user-data`, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    }

    async updateUserData(req: UpdateUserDataRequest, token: string, setUser: (user: UserData) => void): Promise<void> {
        const response = await axios.put(`${MAIN_API_URL}/auth/update`, req, { headers: { Authorization: `Bearer ${token}` } });
        const newUserData: LoginResponse = {
            token: token,
            userData: response.data
        }
        setUser(newUserData.userData);
        return response.data;
    }

    async forgotPassword(email: string): Promise<void> {
        const response = await axios.post(`${MAIN_API_URL}/auth/forgot-password`, { email });
        return response.data;
    }

    async resetPassword(token: string, password: string, confirmPassword: string): Promise<void> {
        const newPassword = password;
        const confirmNewPassword = confirmPassword;
        const response = await axios.put(`${MAIN_API_URL}/auth/reset-password/${token}`, { newPassword, confirmNewPassword });
        return response.data;
    }
}

export default new AuthService();
