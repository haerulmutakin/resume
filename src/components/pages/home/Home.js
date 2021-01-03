import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <div className="profile-container">
                <img alt="profile-pict" src={process.env.PUBLIC_URL + '/img/akin.jpg'}/>
                <h2>Haerul Mutakin</h2>
                <div className="profile-divider"></div>
                <p>Software Engineer</p>
                <p>Frontend</p>
                <div className="social-link">
                    <span>
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faGithubSquare}/>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                    </span>
                </div>
            </div>
            <div className="bio-container">
                <h1>Hello,</h1>
                <p className="bit-about-label">a bit about me:</p>
                <p className="bio-label">Frontend developer, code enthusiastic, always open and ready to adapt to any changes and have the ability to implement client needs into technology.</p>
            </div>
        </div>
    );
};

export default Home;