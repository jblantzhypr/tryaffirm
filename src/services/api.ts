import { VerificationType, FormData, VerificationResponse } from '../types';

const API_CONFIG = {
    endpoint: `${process.env.REACT_APP_API_URL}/api/verification`
};

const fetchWithHeaders = async (url: string, options: RequestInit = {}) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
};

export const loadVerificationTypes = async (): Promise<VerificationType[]> => {
    try {
        const response = await fetchWithHeaders(`${API_CONFIG.endpoint}/types`);
        return await response.json();
    } catch (error) {
        console.error('Error loading verification types:', error);
        throw error;
    }
};

export const submitVerification = async (formData: FormData, selectedTypes: string[]): Promise<VerificationResponse> => {
    try {
        const response = await fetchWithHeaders(API_CONFIG.endpoint, {
            method: 'POST',
            body: JSON.stringify({
                ...formData,
                verificationTypes: selectedTypes,
            }),
        });

        return await response.json();
    } catch (error) {
        console.error('Error submitting verification:', error);
        throw error;
    }
}; 