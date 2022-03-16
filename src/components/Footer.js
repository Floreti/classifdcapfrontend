import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.scss";


function footer(props) {
    
    return (
        <footer>
            <div> This is a footer </div>
            <nav>
                
                <Link to="/ads">
                    <div>Home</div>
                </Link>
                <Link to="new_ad">
                    <div>Post</div>
                </Link>
            </nav>
        </footer>
    );
};

export default footer;