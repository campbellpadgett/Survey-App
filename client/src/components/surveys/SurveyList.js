import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index'

const SurveyList = props => {


    useEffect(() => {
        props.fetchSurveys()
    }, [])

    const renderSurveys = () => {
        return props.surveys.reverse().map(survey => {
            return (
                <div className='ui container' key={Math.random()}>
                    <h2>
                        {survey.title}
                    </h2>

                    <div>
                        Number of Yes Reponses: {survey.yes}
                    </div>
                    <div>
                        Number of No Reponses: {survey.no}
                    </div>

                    <div>
                        Last Repsonse: {survey.lastResponded || 'no responses'}
                    </div>

                </div>
            )
        })
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    );
}

const mapStateToProps = state => {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
