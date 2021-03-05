import React from 'react';
import { connect } from 'react-redux'

const Header = props => {

    const renderContent = () => {
        switch(props.auth) {
            case null:
                return "working on it..."
            case false:
                return <a href="/auth/google">Sign Into Google</a>
            default:
                return <a href='/api/logout'>Log Out</a>
        }
    }

    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="center brand-logo">Emaily</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>{renderContent()}</li>
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
