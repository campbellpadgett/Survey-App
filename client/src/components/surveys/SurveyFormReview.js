import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields'
import { submitSurvey } from '../../actions/index'
import { withRouter } from 'react-router-dom'

const SurveyFormReview = ({ onSurveyCancel, survey, submitSurvey, history }) => {

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

            <button onClick={() => submitSurvey(survey, history)} type='submit' className='ui button green'>Send Survey 📧</button>
        </div>

    );
}

const mapStateToProps = state => {
    return { survey: state.form.surveyForm.values }
}

export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview));
