import React from 'react';
import SurveyField from './SurveyField'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { validateEmails } from '../../utils/validateEmail'


const FIELDS = [
    {
        key: 0,
        type: 'text',
        name: 'surveyTitle',
        label: 'Title',
        placeholder: 'Survey Title'
    },
    {
        key: 1,
        type: 'text',
        name: 'surveySubject',
        label: 'Subject',
        placeholder: 'Would You Like to Take a Survey?'
    },
    {
        key: 2,
        type: 'text',
        name: 'surveyBody',
        label: 'Body',
        placeholder: 'Lorem Ipsum Badou Yipsum...'
    },
    {
        key: 3,
        type: 'text',
        name: 'surveyRecipients',
        label: 'Recipients',
        placeholder: 'sample@gmail.com, other@outlook.com'
    }
]

const SurveyForm = props => {

    const renderFields = () => {
        return FIELDS.map(({ key, type, name, label, palceholder }) => {
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
            <form onSubmit={props.handleSubmit(values => console.log(values))} className='col s12'>
                
                {renderFields()}

                <Link to='/surveys' className='ui button red'>Cancel</Link>
                <button type='submit' className='ui button green'>Next ✔ </button>

            </form>
        </div>
    );
}

function validate(values) {

    const errors = {}
    errors.surveyRecipients = validateEmails(values.surveyRecipients || '')
    
    FIELDS.forEach(({ name }) => {
        if (!values[name]) { errors[name] = 'Value required for your survey!' }
    })

    return errors
}

export default reduxForm({ validate, form: 'surveyForm' })(SurveyForm);





















