'use client';
import { useState } from 'react';
import '../style.css';
import '../mediaqueries.css';

export default function About() {
    return (
        <>
        <section id="about">
            <p class="section__text__p1">Get To Know More</p>

            <h1 class="title">About Me</h1>

            <div class="section-container">
                <div class="section__pic-container">
                    <img
                    src="./Assets/about.jpg"
                    alt="Profile picture"
                    class="about-pic"
                    />
                </div>
                <div class="about-details-container">
                    <div class="about-containers">
                        <div class="details-container">
                            <img
                            src="./Assets/experience.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <h3>Experience</h3>
                            <p>Startup Founder <br />UTRA Hacks Winner 2024</p>
                        </div>
                        <div class="details-container">
                            <img
                            src="./Assets/education.png"
                            alt="Education icon"
                            class="icon"
                            />
                            <h3>Education</h3>
                            <p>BASc. Computer Engineering<br />University of Toronto</p>
                        </div>
                    </div>
                    <div class="text-container">
                        <p>
                            I enjoy software development and have experience in
                            back-end development using C++ and Python. I am also familiar with
                            front-end development using HTML and CSS. I am always eager to learn
                            new technologies and tools to improve my skills. My approach to coding and life is guided by Winston Churchill's 
                            wisdom: 'Success is not final, failure is not fatal: it is the courage 
                            to continue that counts.' This philosophy fuels my resilience in 
                            tackling complex problems and commitment to continuous growth.
                        </p>
                    </div>
                </div>
            </div>
            <img
            src="./Assets/arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#experience'"
            />
        </section>
        </>
    );
}