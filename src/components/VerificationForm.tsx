import React, { useState } from 'react';
import { FormData } from '../types';

interface VerificationFormProps {
    onSubmit: (formData: FormData) => void;
    showAddressFields: boolean;
    showPhoneField: boolean;
    showApproverFields: boolean;
}

const defaultValues: FormData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@acme.com',
    phone: '5555555555',
    streetAddress: '1001 6th Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10012',
    countryCode: 'US',
    approverEmail: 'jane.doe@acme.com',
    approverPhone: '5555555556'
};

const VerificationForm: React.FC<VerificationFormProps> = ({
    onSubmit,
    showAddressFields,
    showPhoneField,
    showApproverFields
}) => {
    const [formData, setFormData] = useState<FormData>(defaultValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="affirm-form">
            <div className="form-section">
                <h2>Personal Information</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                {showPhoneField && (
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
            </div>

            {showAddressFields && (
                <div className="form-section">
                    <h2>Address Information</h2>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input
                            type="text"
                            id="streetAddress"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="countryCode">Country Code</label>
                        <input
                            type="text"
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            )}

            {showApproverFields && (
                <div className="form-section">
                    <h2>Approver Information</h2>
                    <div className="form-row">
                        <div className="form-field">
                            <label htmlFor="approverEmail">Approver Email</label>
                            <input
                                type="email"
                                id="approverEmail"
                                name="approverEmail"
                                value={formData.approverEmail}
                                onChange={handleChange}
                                placeholder="jane.doe@acme.com"
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="approverPhone">Approver Phone</label>
                            <input
                                type="tel"
                                id="approverPhone"
                                name="approverPhone"
                                value={formData.approverPhone}
                                onChange={handleChange}
                                placeholder="5555555556"
                                required
                            />
                        </div>
                    </div>
                </div>
            )}

            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default VerificationForm; 