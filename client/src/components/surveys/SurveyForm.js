import React from 'react';
import SurveyField from './SurveyField'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { validateEmails } from '../../utils/validateEmail'
import surveyFields from './formFields'

const SurveyForm = props => {

    const renderFields = () => {
        return surveyFields.map(({ key, type, name, label, palceholder }) => {
            return (
                <div className="row" key={key}>
                    <div className="input-field col s12">

                        <Field
                            type={type}
                            name={name}
                            label={label}
                            palceholder={palceholder}
                            component={SurveyField} />

                    </div>
                </div>
            )
        })
    }

    return (
        <div className='ui container'>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)} className='col s12'>
                
                {renderFields()}

                <Link to='/surveys' className='ui button red'>Cancel</Link>
                <button type='submit' className='ui button green'>Next ✔ </button>

            </form>
        </div>
    );
}

function validate(values) {

    const errors = {}
    errors.recipients = validateEmails(values.recipients || '')
    
    surveyFields.forEach(({ name }) => {
        if (!values[name]) { errors[name] = 'Value required for your survey!' }
    })

    return errors
}

export default reduxForm({ validate, form: 'surveyForm', destroyOnUnmount: false })(SurveyForm);