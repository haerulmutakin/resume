import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './DialogNavigation.scss';

import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export function DialogNavigation(props, ref) {

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
            <button onClick={handleClose}>Close</button>
        </div>,
        modalRoot
    );
};

export default forwardRef(DialogNavigation);