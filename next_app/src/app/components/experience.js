'use client';
import { useState } from 'react';
import '../style.css';
import '../mediaqueries.css';

export default function Experience() {
    return (
        <>
        <section id="experience">
            <p class="section__text__p1">Explore My</p>
            <h1 class="title">Experience</h1>
            
            <div class="experience-details-container">
                <div class="about-containers">
                <div class="details-container">
                    <h2 class="experience-sub-title">Back End Development</h2>
                    <div class="article-container">
                    <article>
                        <img
                        src="./Assets/checkmark.png"
                        alt="Experience icon"
                        class="icon"
                        />
                        <div>
                        <h3>C++</h3>
                        <p>Proficient</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="./Assets/checkmark.png"
                        alt="Experience icon"
                        class="icon"
                        />
                        <div>
                        <h3>C</h3>
                        <p>Proficient</p>
                        </div>
                    </article>
                    <article>
                        <img
                        src="./Assets/checkmark.png"
                        alt="Experience icon"
                        class="icon"
                        />
                        <div>
                        <h3>Python</h3>
                        <p>Proficient</p>
                        </div>
                    </article>
                    
                    <article>
                        <img
                        src="./Assets/checkmark.png"
                        alt="Experience icon"
                        class="icon"
                        />
                        <div>
                        <h3>Javascript</h3>
                        <p>Basic</p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="./Assets/checkmark.png"
                            alt="Experience icon"
                            class="icon"
                        />
                        <div>
                            <h3>Node JS</h3>
                            <p>Basic</p>
                        </div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Front End Development</h2>
                    <div class="article-container">
                    <article>
                        <img
                            src="./Assets/checkmark.png"
                            alt="Experience icon"
                            class="icon"
                        />
                        <div>
                            <h3>HTML</h3>
                            <p>Intermediate</p>
                        </div>
                        </article>
                        <article>
                        <img
                            src="./Assets/checkmark.png"
                            alt="Experience icon"
                            class="icon"
                        />
                        <div>
                            <h3>CSS</h3>
                            <p>Intermediate</p>
                        </div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Other Tools</h2>
                    <div class="article-container">
                        <article>
                            <img
                            src="./Assets/checkmark.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                            <h3>Git</h3>
                            <p>Proficient</p>
                            </div>
                        </article>
            
                    </div>
                    </div>
                </div>
            </div>
            <img
                src="./Assets/arrow.png"
                alt="Arrow icon"
                class="icon arrow"
                onclick="location.href='./#projects'"
            />
        </section>
        </>
    );

}