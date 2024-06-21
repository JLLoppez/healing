import React from "react";
import './about.scss';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.png';

const About = React.forwardRef((props, ref) => {
    return (
        <div id="about" ref={ref}>
            <div className="about-us">
                <h1 className="about-us-button-header">
                    <span>Healing's Story</span> Get to know us
                </h1>
                <img 
                    alt="Healing's Story" 
                    className="about-us-button-image" 
                    src={photo2} 
                    width="300" 
                    height="200" 
                />
                <p className="about-us-button-text">
                    Healing is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s just a click away.
                </p>
                <button type="submit" className="about-us-button">
                    <span className="book-top">Learn more about us</span>
                </button>
            </div>
            {/* <div className="about-us-how">
                <h1 className="about-us-how-h1">
                     How <span>our platform</span> works
                </h1>
                <p className="about-us-how-para">
                    Navigating your healthcare journey with Heading is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:                
                </p>
                <ol className="about-us-how-guide">
                    <li className="about-us-guide-1">
                        <span>Create Your Profile</span>
                        <p>Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                    </li>
                    <li className="about-us-guide-2">
                        <span>Choose Your Service</span> 
                        <p>Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.</p>
                    </li>

                    <li className="about-us-guide-3">
                        <span> Meet Your Doctor</span>
                        <p>Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.</p>
                    </li>
                </ol>
         
                <p className="about-us-team">
                    <svg className="about-us-team-svg" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="4" fill="#B6FFC6"/>
                    <path d="M14 19.3995L18.3649 21.8549C19.1642 22.3049 20.1424 21.6397 19.932 20.7984L18.7751 16.1811L22.6351 13.0703C23.3398 12.5029 22.9611 11.4268 22.0356 11.3583L16.9555 10.9573L14.9676 6.59428C14.61 5.80191 13.39 5.80191 13.0324 6.59428L11.0445 10.9475L5.96443 11.3486C5.03887 11.417 4.66023 12.4931 5.36492 13.0605L9.22494 16.1713L8.06799 20.7886C7.85763 21.6299 8.83578 22.2951 9.63513 21.8451L14 19.3995Z" fill="#000080d3"/>
                    </svg>
                    <span>Best Certified Team of Specialists</span>
                </p>
            </div> */}
        </div>
    );
});

export default About;
