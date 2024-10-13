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