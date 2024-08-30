'use client';
import { useState } from 'react';
import '../style.css';
import '../mediaqueries.css';

export default function Projects() {
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/startup.png"
                                    alt="NomNom"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Startup</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://disputelens.my.canva.site/')}
                                >
                                    Pitch deck
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://disputelens.netlify.app/')}
                                >
                                    Website
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/NomNom.png"
                                    alt="NomNom"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">NomNom</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://docs.google.com/presentation/d/1GaHiMJCsEhvF5Y8gDRKeQavjXD5Qwab9qlhyU_GP_II/edit')}
                                >
                                    Slide deck
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://www.youtube.com/watch?v=xRSWXJOSBh0')}
                                >
                                    Demo
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/graphify.png"
                                    alt="Graphify"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Graphify</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://github.com/Sajeev-D/Graphify')}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://www.youtube.com/watch?v=gPTzh0_9cTU')}
                                >
                                    Demo
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/rover.jpg"
                                    alt="Rover"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Autonomous Rover</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://devpost.com/software/unititles')}
                                >
                                    Devpost
                                </button>
                            </div>
                        </div>
                        <div className="details-container color-container">
                            <div className="article-container">
                                <img
                                    src="./assets/othello.png"
                                    alt="Othello"
                                    className="project-img"
                                />
                            </div>
                            <h2 className="experience-sub-title project-title">Othello</h2>
                            <div className="btn-container">
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://github.com/Sajeev-D/Othello/blob/main/othello.c')}
                                >
                                    Github
                                </button>
                                <button
                                    className="btn btn-color-2 project-btn"
                                    onClick={() => handleClick('https://www.youtube.com/watch?v=_ityEcGKHsM')}
                                >
                                    Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                />
            </section>
        </>
    );
}