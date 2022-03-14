import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    // const navStyle = {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     border: "1px purple",
    //     margin: "auto",
    //     padding: "5px",
    //     width: "88%",
    // };

    return (
        <Header>
            <nav style={navStyle}>
                <Link to="/">
                    <div>Navbar</div>
                </Link>
                <Link to="/user">
                    <div>Profile</div>
                </Link>
                <Link to="/signin">
                    <div>Sign in</div>
                </Link>
                <Link to="/signup">
                    <div>Create account</div>
                </Link>
            </nav>
        </header>
    );
}

export default Nav;