import React from 'react';
import { connect } from 'react-redux'

const Landing = props => {

    const renderContent = () => {
            switch(props.auth) {
                case null:
                    return "working on it..."
                case false:
                    return 'Welcome to Emaily!'
                default:
                    return 'Welcome Back!'
            }
        }

    return (
        <div>
            {renderContent()}
        </div>
    );
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Landing);
