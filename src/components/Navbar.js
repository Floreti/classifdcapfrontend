import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.scss";


function Nav(props) {

    return (
        <header>
            <nav>
                <Link to="/ads">
                    <div>Home</div>
                </Link>
                <Link to="/user/:id">
                    <div>Profile</div>
                </Link>
                <Link to="login">
                    <div>Sign in</div>
                </Link>
                <Link to="register">
                    <div>Sign up</div>
                </Link>
                <Link to="new_ad">
                    <div>Post Ad</div>
                </Link>
            </nav>
        </header>
    );
};

export default Nav;