import React from 'react';
import SurveyField from './SurveyField'

const SurveyForm = () => {
    return (
        <div>
            <div className='ui container'>
                <form className='col s12'>
                    <div class="row">
                        <div class="input-field col s12">
                            <SurveyField label={'Title'} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <SurveyField label={'Subject'} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <SurveyField label={'Body'} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <SurveyField label={'Recipients'} />
                        </div>
                    </div>

                    <button className='ui button red'>cancel</button>
                    <button className='ui button green'>submit</button>
                </form>
            </div>
        </div>
    );
}

export default SurveyForm;
