import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields'

const SurveyFormReview = ({ onSurveyCancel, survey }) => {

    const renderReviewContent = formFields.map(({ key, name, label }) => {
            return (
                <div className="row" key={key}>
                    <div className="col s12">
                        <label>{label}</label>
                        <div>{survey[name]}</div>
                    </div>
                </div>
            )
        })

    return (
        <div>
            <h5>Please confirm your entries</h5>

            {renderReviewContent}

            <button onClick={onSurveyCancel} className='ui button light-blue lighten-3'>
                Back ↩️ 
            </button>

            <button type='submit' className='ui button green'>Submit ✔ </button>
        </div>

    );
}

const mapStateToProps = state => {
    return { survey: state.form.surveyForm.values }
}

export default connect(mapStateToProps)(SurveyFormReview);
