export interface VerificationType {
    id: string;
    name: string;
    description: string;
    subTypes?: VerificationType[];
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    countryCode: string;
    approverEmail: string;
    approverPhone: string;
}

export interface VerificationResponse {
    verificationUrl: string;
} 