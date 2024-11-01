export class SignupRequest {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;

    constructor() {
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.password = "";
        this.confirmPassword = "";
        this.phoneNumber = "";
    }
}

export class VerifyEmailRequest {
    token: string;

    constructor() {
        this.token = "";
    }
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    userData: UserData;
    error: string;
}

export class UserData {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    role: string;


    constructor() {
        this.id = 0;
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.phoneNumber = "";
        this.role = "";
    }
}

export interface UpdateUserDataRequest {
    firstName: string;
    lastName: string;
    username: string;
}

