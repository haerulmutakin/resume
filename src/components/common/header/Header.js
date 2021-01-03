import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div>
                <h1>Haerul Mutakin</h1>
                <p>Software Engineer/Frontend</p>
            </div>
            <ul className="menu-list">
                <li>ABOUT ME</li>
                <li>RESUME</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Header;