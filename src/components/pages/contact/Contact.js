import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="content-header">
                <h2 className="page-title">Contact</h2>
            </div>
            <div className="contact-container">
                <div className="message-form">
                    <div className="form-inline">
                        <div className="form-group">
                            <label className="form-label label-required">First Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label className="form-label label-required">Last Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label label-required">Email</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label className="form-label label-required">Subject</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label className="form-label label-required">Message</label>
                        <textarea  ></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn send-btn">SEND</button>
                    </div>
                </div>
                <div className="socials-contact">
                    <ul className="contact-socials">
                        <li><FontAwesomeIcon icon={faLinkedin} /> </li>
                        <li><FontAwesomeIcon icon={faGithubSquare} /> </li>
                        <li><FontAwesomeIcon icon={faInstagramSquare} /> </li>
                    </ul>
                    <ul className="contact-private">
                        <li><span>Email:</span> muttaqin0110@gmail.com</li>
                        <li><span>Phone:</span> +62 85339310146</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;