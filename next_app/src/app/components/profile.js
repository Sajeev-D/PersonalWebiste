'use client';
import '../style.css';
import '../mediaqueries.css';

export default function Profile() {

    const handleResumeDownload = () => {
        window.open('/Assets/Resume (3).pdf'); // Assuming 'Assets' is in the 'public' folder
    };

    const handleContactClick = () => {
        // You might want to use smooth scrolling here instead of a direct jump
        location.href = './#contact'; 
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/sajeev-debnath/', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/Sajeev-D', '_blank');
    };

    return(
        <>
        <section id="profile">
            <div className="section__pic-container">
                <img src="./Assets/IMG_8862.jpg" alt="Sajeev Debnath profile picture" className="profile-pic"/>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello I'm</p>
                <h1 className="title">Sajeev Debnath</h1>
                <p className="section__text__p2">Computer Engineering Student</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick ={handleResumeDownload}>Download Resume</button>
                    <button className="btn btn-color-1" onClick ={handleContactClick}>Contact Info</button>
                </div>
                <div id="socials-container">
                    <img src="./Assets/linkedin.png" alt="My LinkedIn Profile" className="icon" onClick ={handleLinkedInClick}/>
                    <img src="./Assets/github.png" alt="My Github Profile" className="icon" onClick ={handleGithubClick}/>
                </div>
            </div>
        </section>
        </>
    );
}