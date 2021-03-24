import React from 'react';
import SurveyField from './SurveyField'
import { reduxForm, Field } from 'redux-form'

const SurveyForm = () => {
    return (
        <div>
            <div className='ui container'>
                <form  className='col s12'>
                    <div class="row">
                        <div class="input-field col s12">
                            <Field type='text' name='surveyTitle' title='Title' component={SurveyField} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <Field type='text' name='surveySubject' title='Subject' component={SurveyField} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <Field type='text' name='surveyBody' title='Body' component={SurveyField} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <Field type='text' name='surveyRecipients' title='Recipients' component={SurveyField} />
                        </div>
                    </div>

                    <button className='ui button red'>cancel</button>
                    <button className='ui button green'>submit</button>
                </form>
            </div>
        </div>
    );
}

export default reduxForm({ form: 'surveyForm' })(SurveyForm);
