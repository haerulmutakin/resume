import React from 'react';
import './Header.scss';
import BrowserHistory from '../../../helpers/history/BrowserHistory';

const menus = [
    {
        name: 'ABOUT ME',
        url: '/'
    },
    {
        name: 'RESUME',
        url: 'resume'
    },
    {
        name: 'PROJECTS',
        url: 'projects'
    },
    {
        name: 'CONTACT',
        url: 'contact'
    },
];

const handleMenuClick = (url) => {
    BrowserHistory.push(url);
}

const Header = () => {
    return (
        <div className="header">
            <div className="site-brand">
                <h1>Haerul Mutakin</h1>
                <p>Software Engineer/Frontend</p>
            </div>
            <ul className="menu-list">
                {menus.map((item, index) => {
                    return <li key={index} onClick={handleMenuClick.bind(this, item.url)}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Header;