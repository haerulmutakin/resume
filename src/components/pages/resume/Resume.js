import React from 'react';
import './Resume.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faGlobe, faBook, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <React.Fragment>
            <h2 className="page-title">Resume</h2>
            <div className="resume-container">
                <div className="resume-left-container">
                    <section className="resume-section">
                        <h3 className="resume-section-title">
                            <FontAwesomeIcon icon={faAlignCenter} />
                            Summary
                        </h3>
                        <div className="resume-section-content">
                            <p>Frontend developer, code enthusiastic, always open and ready to adapt to any changes and have the ability to implement client needs into technology. More than 4 years of experience using Javascript Frameworks in developing Information Systems for Academic needs and Multinational Companies.</p>
                        </div>
                    </section>
                    <section className="resume-section">
                        <h3 className="resume-section-title">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            Educations
                        </h3>
                        <div className="resume-section-content">
                            <section className="experience-section">
                                <div className="dot"></div>
                                <div className="experience-section-content">
                                    <h4 className="experience-title">Bachelor Degree, Informatics Engineering</h4>
                                    <p>Universitas Islam Indonesia</p>
                                    <p>2013 - 2017</p>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="resume-section">
                        <h3 className="resume-section-title">
                            <FontAwesomeIcon icon={faBriefcase} />
                            Work Experiences
                        </h3>
                        <div className="resume-section-content">
                            <section className="experience-section">
                                <div className="dot"></div>
                                <div className="experience-section-content">
                                    <h4 className="experience-title">Badan Sistem Informasi, UII</h4>
                                    <p>January, 2018 - December, 2020</p>
                                    <p>Lead Frontend Developer</p>
                                    <p>Develop and maintain web-based information systems for academic need using Angular. As a Frontend Leader, review other developers code and make reusable web components for future use.</p>
                                </div>
                            </section>
                            <section className="experience-section">
                                <div className="dot"></div>
                                <div className="experience-section-content">
                                    <h4 className="experience-title">Hilo Tech Indonesia</h4>
                                    <p>July, 2020 - January, 2020</p>
                                    <p>Frontend Developer</p>
                                    <p>Develop and maintain web-based application for our clients using React Js.</p>
                                </div>
                            </section>
                            <section className="experience-section">
                                <div className="dot"></div>
                                <div className="experience-section-content">
                                    <h4 className="experience-title">Axiata Digital Labs</h4>
                                    <p>December, 2020 - July, 2021</p>
                                    <p>Frontend Developer</p>
                                    <p>Develop and maintain web-based information systems for academic need using Angular. As a Frontend Leader, review other developers code and make reusable web components for future use.</p>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className="resume-right-container">
                    <section className="resume-section">
                        <h3 className="resume-section-title">
                            <FontAwesomeIcon icon={faGlobe} />
                            Languages
                        </h3>
                        <div className="resume-section-content">
                            <p>Javascript</p>
                            <p>Typescript</p>
                            <p>Java</p>
                            <p>Kotlin</p>
                            <p>PHP</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>SASS</p>
                            <p>SQL</p>
                        </div>
                    </section>
                    <section className="resume-section">
                        <h3 className="resume-section-title">
                            <FontAwesomeIcon icon={faBook} />
                            Frameworks & Libraries
                        </h3>
                        <div className="resume-section-content">
                            <p>React js</p>
                            <p>Angular</p>
                            <p>Angular js</p>
                            <p>Redux js</p>
                            <p>Vue</p>
                            <p>Svelte</p>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;