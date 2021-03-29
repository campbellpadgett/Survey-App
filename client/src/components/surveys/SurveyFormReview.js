import React from 'react';

const SurveyFormReview = props => {
    return (
        <div>
            <h5>Please confirm your entries</h5>

            <button 
                onClick={props.onSurveyCancel} 
                className='ui button light-blue lighten-3'>
                    Back ↩️ 
            </button>

            <button type='submit' className='ui button green'>Submit ✔ </button>
        </div>

    );
}

export default SurveyFormReview;
