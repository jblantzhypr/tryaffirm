import React from 'react';
import { VerificationType } from '../types';

interface VerificationTypeSelectorProps {
    types: VerificationType[];
    selectedTypes: Set<string>;
    onTypeChange: (typeId: string, checked: boolean) => void;
}

const VerificationTypeSelector: React.FC<VerificationTypeSelectorProps> = ({
    types,
    selectedTypes,
    onTypeChange,
}) => {
    const handleParentChange = (type: VerificationType, checked: boolean) => {
        onTypeChange(type.id, checked);
        
        if (type.subTypes) {
            type.subTypes.forEach(subType => {
                onTypeChange(subType.id, checked);
            });
        }
    };

    const renderVerificationType = (type: VerificationType, isSubType = false) => {
        const isChecked = selectedTypes.has(type.id);
        const isRadio = type.id === 'live_approver' || type.id === 'automated_approver';
        const radioGroup = isRadio ? 'approverType' : undefined;

        return (
            <div key={type.id} className={`verification-type${isSubType ? ' sub-type' : ''}`}>
                <input
                    type={isRadio ? 'radio' : 'checkbox'}
                    id={type.id}
                    checked={isChecked}
                    onChange={(e) => handleParentChange(type, e.target.checked)}
                    name={radioGroup}
                    required={isRadio}
                />
                <label htmlFor={type.id}>{type.name}</label>
                <p className="description">{type.description}</p>
                {type.subTypes && (
                    <div className="sub-types">
                        {type.subTypes.map(subType => renderVerificationType(subType, true))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="verification-selection">
            <h2>Select Verification Methods</h2>
            <div className="form-group">
                <label>Verification Types</label>
                <div className="verification-types">
                    {types.map(type => renderVerificationType(type))}
                </div>
            </div>
        </div>
    );
};

export default VerificationTypeSelector; 