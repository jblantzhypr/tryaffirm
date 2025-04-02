import React from 'react';

interface VerificationLinkProps {
    verificationUrl: string;
}

const VerificationLink: React.FC<VerificationLinkProps> = ({ verificationUrl }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(verificationUrl);
    };

    return (
        <div className="verification-link-container">
            <h2>Verification Link</h2>
            <div className="link-box">
                <input
                    type="text"
                    value={verificationUrl}
                    readOnly
                />
                <button onClick={handleCopy} className="copy-button">
                    Copy Link
                </button>
            </div>
        </div>
    );
};

export default VerificationLink; 