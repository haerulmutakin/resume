import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './DialogNavigation.scss';
import BrowserHistory from '../../../helpers/history/BrowserHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export function DialogNavigation(props, ref) {
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
        handleClose();
    }

    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false)
    }))

    const handleClose = () => {
        setOpen(false);
    }

    return createPortal(
        <div className="dialog-modal" style={{display: + open ? '' : 'none'}} >
            <div className="modal-nav-header">
                <div onClick={handleClose} className="modal-nav-toggle">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <ul className="modal-nav-menu">
                {menus.map((item, index) => {
                    return <li key={index} onClick={handleMenuClick.bind(this, item.url)}>{item.name}</li>
                })}
            </ul>
        </div>,
        modalRoot
    );
};

export default forwardRef(DialogNavigation);