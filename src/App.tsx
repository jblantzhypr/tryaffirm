import React, { useState, useEffect } from 'react';
import VerificationTypeSelector from './components/VerificationTypeSelector';
import VerificationForm from './components/VerificationForm';
import VerificationLink from './components/VerificationLink';
import { loadVerificationTypes, submitVerification } from './services/api';
import { VerificationType, FormData, VerificationResponse } from './types';
import './App.css';

function App() {
    const [verificationTypes, setVerificationTypes] = useState<VerificationType[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
    const [verificationUrl, setVerificationUrl] = useState<string>('');
    const [showAddressFields, setShowAddressFields] = useState(false);
    const [showPhoneField, setShowPhoneField] = useState(false);
    const [showApproverFields, setShowApproverFields] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchVerificationTypes = async () => {
            try {
                const types = await loadVerificationTypes();
                setVerificationTypes(types);
            } catch (err) {
                setError('Failed to load verification types');
                console.error(err);
            }
        };

        fetchVerificationTypes();
    }, []);

    const handleTypeChange = (typeId: string, checked: boolean) => {
        setSelectedTypes(prev => {
            const newSet = new Set(prev);
            if (checked) {
                newSet.add(typeId);
            } else {
                newSet.delete(typeId);
            }
            return newSet;
        });

        // Update form visibility based on selected types
        if (typeId === 'location') {
            setShowAddressFields(checked);
        }
        if (typeId === 'phone_verification') {
            setShowPhoneField(checked);
        }
        if (typeId === 'live_approver' || typeId === 'escalate_on_failure') {
            setShowApproverFields(checked);
        }
    };

    const handleFormSubmit = async (formData: FormData) => {
        try {
            const response: VerificationResponse = await submitVerification(
                formData,
                Array.from(selectedTypes)
            );
            setVerificationUrl(response.verificationUrl);
            setError('');
        } catch (err) {
            setError('Failed to submit verification');
            console.error(err);
        }
    };

    return (
        <div className="container">
            <header>
                <h1>HYPR Affirm Demo</h1>
            </header>

            {error && <div className="error-message">{error}</div>}

            <VerificationTypeSelector
                types={verificationTypes}
                selectedTypes={selectedTypes}
                onTypeChange={handleTypeChange}
            />

            <VerificationForm
                onSubmit={handleFormSubmit}
                showAddressFields={showAddressFields}
                showPhoneField={showPhoneField}
                showApproverFields={showApproverFields}
            />

            {verificationUrl && (
                <VerificationLink verificationUrl={verificationUrl} />
            )}
        </div>
    );
}

export default App;
