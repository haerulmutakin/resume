import React, { useRef } from 'react';
import './Header.scss';
import BrowserHistory from '../../../helpers/history/BrowserHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import DialogNavigation from '../dialog-navigation/DialogNavigation';

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
    const modal = useRef(null);
    return (
        <React.Fragment>
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
                <div onClick={() => modal.current.open()} className="navigation-toggle">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <DialogNavigation ref={modal} />
        </React.Fragment>
    )
}

export default Header;