import React from 'react';

const Header = () => {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="center brand-logo">Emaily</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/auth/google">Login With Google</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
