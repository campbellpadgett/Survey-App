import React from 'react';

const SurveyField = ({ label, palceholder, input, meta: { error, touched } }) => {
    return (
        <div>
            <p>{label}</p>
            <input  placeholder={palceholder} {...input} />
            <p style={{color: 'red'}}>{touched && error}</p>
        </div>
    );
}

export default SurveyField;
