import React from 'react';
import Payments from './Payments'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = props => {

    const renderContent = () => {
        switch(props.auth) {
            case null:
                return [
                <li key={Math.random()}><Payments /></li>,  
                <li key={Math.random()} style={{ margin: '0 10px' }}>Credits: {props.auth.credits}</li>,
                <li key={Math.random()}><a href='/api/logout'>Log Out</a></li>
            ]
            case false:
                return <a href="/auth/google">Sign Into Google</a>
            default:
                return [
                <li key={Math.random()}><Payments /></li>,  
                <li key={Math.random()} style={{ margin: '0 10px' }}>Credits: {props.auth.credits}</li>,
                <li key={Math.random()}><a href='/api/logout'>Log Out</a></li>
            ]
        }
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to={props.auth ? "/surveys" : "/"} className="center brand-logo">
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {renderContent()}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Header);
