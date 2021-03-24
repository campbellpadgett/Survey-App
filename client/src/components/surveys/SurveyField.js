import React from 'react';

const SurveyField = props => {
    return (
        <div>
            <label for={props.label}>{props.label}</label>
            <input placeholder='...' id={props.label} label="text" class="validate" />
        </div>
    );
}

export default SurveyField;
