import React from "react";
import './about.scss';
import photo2 from '../images/photo2.jpg';
// import photo3 from '../images/photo3.png';

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
                Experience the future of healthcare with Healing, a digital platform designed to make quality medical care accessible and convenient for everyone. Our team of dedicated professionals is committed to delivering personalized, compassionate care from a diverse network of licensed practitioners. Join the movement towards better health – start your journey with Healing today.
                <p>Healing leverages cutting-edge technology to enhance your healthcare experience. Our secure platform ensures seamless communication, convenient scheduling, and access to your medical records anytime, anywhere. Through virtual visits, digital prescriptions, and personalized health insights, we empower you to take charge of your health and make informed decisions.</p>
                </p>
                <button type="submit" className="about-us-button">
                    <span className="about-us-button-span">Learn more about us</span>
                </button>
            </div>
            {/* <div className="about-us-how">
                <div >
                        <h1 className="about-us-how-h1">How
                            <span> our platform</span> works
                        </h1>
                        <p className="about-us-how-para">
                        Are you ready to take charge of your health and well-being? Healing is here to guide you through a seamless healthcare journey. Whether you're seeking preventative care, managing a chronic condition, or exploring specialized treatments, we've got you covered.
                        </p>
                </div>
                <ul class="about-us-how-guide">
                    <li  className="about-us-how-guide-1">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="26" fill="#000080" fill-opacity="0.82"/>
                            <path d="M25.7244 38V19.168L21.4044 21.808V17.552L25.7244 14.96H29.6604V38H25.7244Z" fill="white"/>
                        </svg>
                        <span>Create Your Profile</span>
                        <p>Sign up and complete your medical history confidentially to ensure personalized care and stay informed about your health progress. Your secure profile allows you to easily track appointments, access your medical records, and receive updates on your treatment plan.</p>
                    </li>
                    <li className="about-us-how-guide-2">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="26" fill="#000080" fill-opacity="0.82"/>
                            <path d="M18.0688 37.968V34.608L27.9248 25.824C28.6928 25.1413 29.2261 24.496 29.5248 23.888C29.8234 23.28 29.9728 22.6933 29.9728 22.128C29.9728 21.36 29.8074 20.6773 29.4768 20.08C29.1461 19.472 28.6874 18.992 28.1008 18.64C27.5248 18.288 26.8581 18.112 26.1008 18.112C25.3008 18.112 24.5914 18.2987 23.9728 18.672C23.3648 19.0347 22.8901 19.52 22.5488 20.128C22.2074 20.736 22.0474 21.392 22.0688 22.096H18.1008C18.1008 20.56 18.4421 19.2213 19.1248 18.08C19.8181 16.9387 20.7674 16.0533 21.9728 15.424C23.1888 14.7947 24.5914 14.48 26.1808 14.48C27.6528 14.48 28.9754 14.8107 30.1488 15.472C31.3221 16.1227 32.2448 17.0293 32.9167 18.192C33.5888 19.344 33.9248 20.672 33.9248 22.176C33.9248 23.2747 33.7754 24.1973 33.4768 24.944C33.1781 25.6907 32.7301 26.3787 32.1328 27.008C31.5461 27.6373 30.8154 28.336 29.9408 29.104L22.9488 35.296L22.5968 34.336H33.9248V37.968H18.0688Z" fill="white"/>
                        </svg>
                        <span>Choose Your Service</span>
                        <p>Ready to start your healing journey? Explore our range of services and book a consultation with ease. Our streamlined booking process makes it simple and straightforward to connect with the right specialist for your needs.</p>
                    </li>
                    <li className="about-us-how-guide-3 ">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="26" fill="#000080" fill-opacity="0.82"/>
                            <path d="M26.0351 38.432C24.8831 38.432 23.7951 38.208 22.7711 37.76C21.7471 37.312 20.8565 36.6773 20.0991 35.856C19.3525 35.0347 18.8138 34.064 18.4831 32.944L22.2111 31.936C22.4778 32.8533 22.9631 33.5627 23.6671 34.064C24.3818 34.5547 25.1658 34.7947 26.0191 34.784C26.7765 34.784 27.4538 34.608 28.0511 34.256C28.6485 33.904 29.1178 33.4293 29.4591 32.832C29.8005 32.224 29.9711 31.5467 29.9711 30.8C29.9711 29.6587 29.6031 28.704 28.8671 27.936C28.1311 27.168 27.1818 26.784 26.0191 26.784C25.6671 26.784 25.3205 26.832 24.9791 26.928C24.6485 27.024 24.3285 27.1573 24.0191 27.328L22.2591 24.288L30.0031 17.664L30.3391 18.592H19.3791V14.96H33.5071V18.608L27.2831 24.592L27.2511 23.456C28.6485 23.552 29.8378 23.9413 30.8191 24.624C31.8111 25.3067 32.5685 26.1867 33.0911 27.264C33.6245 28.3413 33.8911 29.52 33.8911 30.8C33.8911 32.2507 33.5338 33.552 32.8191 34.704C32.1151 35.856 31.1658 36.768 29.9711 37.44C28.7871 38.1013 27.4751 38.432 26.0351 38.432Z" fill="white"/>
                        </svg>
                        <span>Meet Your Doctor</span>
                        <p>Not sure if you need a virtual or in-person doctor appointment? We offer both options to meet your healthcare needs. Certified specialists available for online consultations and physical exams.</p>
                    </li>
                </ul>

                <div className="about-us-team">
                <img 
                    alt=""
                    src={photo3} 
                    width="1" 
                    height="1"
                    /> 
                    <svg width="620" height="383" viewBox="0 0 363 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_52_240)">
                        <rect x="19" y="13" width="319" height="284" rx="24" fill="url(#paint0_linear_52_240)" shape-rendering="crispEdges"/>
                        <rect x="20" y="14" width="317" height="282" rx="23" stroke="#000080" stroke-opacity="0.82" stroke-width="2" shape-rendering="crispEdges"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_52_240" x="0.268294" y="0.512197" width="362.707" height="327.707" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="3.12195" dy="9.36585"/>
                        <feGaussianBlur stdDeviation="10.9268"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_240"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_240" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_52_240" x1="163.344" y1="84" x2="163.343" y2="191.724" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0F4D92" stop-opacity="0.24"/>
                        <stop offset="0.436049" stop-color="#0047AB" stop-opacity="0.65"/>
                        <stop offset="0.820643" stop-color="#000080" stop-opacity="0.79"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <p className="about-us-team-p">
                        <svg  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="28" rx="4" fill="#CACAD7"/>
                        <path d="M14 19.3995L18.3649 21.8549C19.1642 22.3049 20.1424 21.6397 19.932 20.7984L18.7751 16.1811L22.6351 13.0703C23.3398 12.5029 22.9611 11.4268 22.0356 11.3583L16.9555 10.9573L14.9676 6.59428C14.61 5.80191 13.39 5.80191 13.0324 6.59428L11.0445 10.9475L5.96443 11.3486C5.03887 11.417 4.66023 12.4931 5.36492 13.0605L9.22494 16.1713L8.06799 20.7886C7.85763 21.6299 8.83578 22.2951 9.63513 21.8451L14 19.3995Z" fill="#000080d3"/>
                        </svg>
                        <span>Best Certified Team of Specialists</span>
                    </p>
                </div>
            </div> */}
        </div>
    );
});

export default About;
