'use client';
import { useState } from 'react';
import '../style.css';
import '../mediaqueries.css';

export default function Contact() {
    return (
        <>
            <section id="contact">
                <p class="section__text__p1">Get in Touch</p>
                <h1 class="title">Contact Me</h1>
                <div class="contact-info-upper-container">
                <div class="contact-info-container">
                    <img
                    src="./Assets/email.png"
                    alt="Email icon"
                    class="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:examplemail@gmail.com">sajeev.debnath@mail.utoronto.ca</a></p>
                </div>
                <div class="contact-info-container">
                    <img
                    src="./Assets/linkedin.png"
                    alt="LinkedIn icon"
                    class="icon contact-icon"
                    />
                    <p><a href="https://www.linkedin.com/in/sajeev-debnath/">LinkedIn</a></p>
                </div>
                </div>
            </section>
        </>
    );
}