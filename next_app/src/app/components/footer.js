'use client';
import { useState } from 'react';
import '../style.css';
import '../mediaqueries.css';

export default function Footer() {
    return (
        <>
            <footer>
                <nav>
                <div class="nav-links-container">
                    <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                </nav>
                <p>Copyright &#169; 2024 Sajeev Debnath. All Rights Reserved.</p>
            </footer>
        </>
    );
}