import React from 'react';
import './Projects.scss';

const Projects = () => {
    return (
        <React.Fragment>
            <div className="content-header">
                <h2 className="page-title">Projects</h2>
            </div>
            <div className="project-container">
                <section className="project-section">
                    <div className="project-info">
                        <img alt="project-img" src={process.env.PUBLIC_URL + '/img/ugw.jpg'}/>
                        <div className="pproject-content">
                            <h4>UII GATEWAY</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <ul className="project-tags">
                        <li>Angular</li>
                        <li>Google Analytics</li>
                        <li>SASS</li>
                        <li>Highcharts</li>
                    </ul>
                </section>
                <section className="project-section">
                    <div className="project-info">
                        <img alt="project-img" src={process.env.PUBLIC_URL + '/img/pilar.png'}/>
                        <div className="pproject-content">
                            <h4>PILAR NG</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <ul className="project-tags">
                        <li>Angular</li>
                        <li>SASS</li>
                        <li>Firebase</li>
                    </ul>
                </section>
                <section className="project-section">
                    <div className="project-info">
                        <img alt="project-img" src={process.env.PUBLIC_URL + '/img/tmmin.jpg'}/>
                        <div className="pproject-content">
                            <h4>T-CLASS</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <ul className="project-tags">
                        <li>React js</li>
                        <li>Redux js</li>
                        <li>CSS</li>
                        <li>Cart js</li>
                    </ul>
                </section>
                <section className="project-section">
                    <div className="project-info">
                        <img alt="project-img" src={process.env.PUBLIC_URL + '/img/bau.png'}/>
                        <div className="pproject-content">
                            <h4>BAU AUTOMATION</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <ul className="project-tags">
                        <li>Angular</li>
                        <li>Rxjs</li>
                        <li>Azure Login</li>
                        <li>SASS</li>
                    </ul>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Projects;