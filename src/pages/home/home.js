import './home.scss';
import photo1  from '../images/photo1.png';
import React from "react";

const Home = React.forwardRef ((props, ref)=> {
    return (
        <div ref={ref}>
               <div className="wrapper">
                    <div className="hero">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="contain">
                                <div className="col-md-6">
                                    <h1 className="Heading">Your
                                    <span> trusted partner</span> in digital healthcare.
                                    </h1>
                                    <p className="Emp">
                                        <span>Empowering Your Health, Every Step of the Way.</span> Experience personalized medical care from the comfort of your home. Connect with 
                                        <span> certified doctors</span> or manage prescriptions, and schedule appointments with ease. Ready to take control of your health?
                                        <span> Get Started</span> or Book an Appointment today.
                                    </p>
                                    <div className="booking">
                                    <a className="btn" href="/#">Book an Appointment</a>
                                    </div>
                                </div>
                                <div className="docImage">
                                    <svg width="482" height="476" viewBox="0 0 482 476" fill="none">
                                        <defs>
                                            <pattern 
                                            id="pattern0_39_22" 
                                            patternContentUnits="objectBoundingBox" 
                                            width="1" 
                                            height="1"
                                            >
                                            <image href={photo1} width="1" height="1" /> 
                                            </pattern>
                                            <linearGradient id="paint0_linear_39_22" x1="250" y1="6.59504" x2="300" y2="476" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#00F462"/>
                                            <stop offset="0.678457" stopColor="#C2FFDB"/>
                                            </linearGradient>
                                        </defs>

                                        <path d="M31 267C31 160.409 117.409 74 224 74C330.591 74 417 160.409 417 267V455.646C417 459.693 417 461.717 416.636 463.394C415.306 469.521 410.521 474.306 404.394 475.636C402.717 476 400.693 476 396.646 476H51.3544C47.3071 476 45.2835 476 43.606 475.636C37.4794 474.306 32.694 469.521 31.3641 463.394C31 461.717 31 459.693 31 455.646V267Z" fill="url(#paint0_linear_39_22)"/>
                                        <rect width="482" height="476" fill="url(#pattern0_39_22)"/>
                                        </svg>
                                </div>
                            </div>
                        {/* <div className="linear">
                        <svg width="1440" height="594" viewBox="0 0 1440 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1440 2.91192C1377.69 2.91192 1315.28 -5.31503 1260.06 27.652C1225.69 48.1733 1203.43 80.1683 1184.14 113.515C1159.8 155.578 1143.2 204.341 1105.03 235.76C1066.86 267.178 1019.65 286.156 972.923 296.3C916.298 308.593 862.634 272.529 824.418 236.051C777.451 191.219 744.42 130.362 743.636 65.7808C743.376 44.3243 760.453 20.5938 784.331 17.9015C825.582 13.2502 831.601 131.49 832.617 154.554C833.953 184.844 835.791 217.534 825.936 246.82C805.405 307.837 707.027 329.708 692.076 333.046C677.124 336.385 575.288 361.391 476.607 376.996C377.925 392.602 263.92 383.588 165.475 414.252C115.568 429.797 63.3955 458.754 31.0914 499.096C6.32301 530.027 -0.14602 554.534 -3.5 591.5" stroke="url(#paint0_linear_48_11)" strokeWidth="4" strokeLinecap="round" stroke-dasharray="12 12"/>
                            <defs>
                            <linearGradient id="paint0_linear_48_11" x1="3.43019" y1="499.473" x2="1376.94" y2="-36.2909" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#00F462" stop-opacity="0.42"/>
                            <stop offset="0.563099" stopColor="#00F453" stop-opacity="0.11"/>
                            <stop offset="0.887261" stopColor="#00F470" stop-opacity="0.6"/>
                            </linearGradient>
                            </defs>
                        </svg>

                        </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="trustees">
                    <h3 className="trusted">Trusted by millions across the globe:</h3>
                    <ul className="trustees-icons">
                        <li className="amazon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/>
                            </svg>
                        </li>
                        <li className="google">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                            </svg>
                        </li>
                        <li className="apple">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                            </svg>
                        </li>
                    </ul>
                </div> */}


                <div className="top-header">
                    <h2 className="top-header-h2">Easily book an appointment in 3 simple steps.</h2>
                    <form className="input-form">
                        <div className="input-group">
                            <div className="input-group-email">
                                <label htmlFor="email" className="icon-label">
                                    <svg className='email-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill='#000080d3' d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8c-22.4 18.3-58.2 46.7-134.6 106.5-16.8 13.2-50.2 45.1-73.4 44.7-23.2 .4-56.6-31.5-73.4-44.7C106.2 199.5 70.4 171.1 48 152.8V112h416zM48 400V214.4c22.9 18.3 55.4 43.9 104.9 82.6 21.9 17.2 60.1 55.2 103.1 55 42.7 .2 80.5-37.2 103.1-54.9 49.5-38.8 82-64.4 104.9-82.7V400H48z"/>
                                    </svg>
                                    <span className="email-add">Email Address</span>
                                </label>
                                <input type="email" id="email" placeholder="Enter Your Email Address" className="email-input email-placeholder" />
                            </div>

                            <div className="input-group-contact">
                                <label htmlFor="contact" className="icon-label">
                                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill='#000080d3' d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"/>
                                    </svg>
                                    <span className="contact-add">Contact Number</span>
                                </label>
                                <input type="tel" id="contact" placeholder="Enter Your Contact Number" className="contact-input" />
                            </div>

                            <div className="input-group-date">
                                <label htmlFor="appointment" className="icon-label">
                                  <svg  className="appointment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill='#000080d3' d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54a6 6 0 0 1 -6-6V160h352v298a6 6 0 0 1 -6 6zm-52.8-200.7L198.8 404.5c-4.7 4.7-12.3 4.6-17-.1l-75.1-75.7c-4.7-4.7-4.6-12.3 .1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l44.1 44.5 111.1-110.2c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.1 17z"/></svg>
                                    <span className="date-top">Date of Appointment</span>
                                </label>
                                <input type="date" id="appointment" placeholder="Select Date of Appointment" className="date-input" />
                            </div>

                            <div className="input-group-book">
                            <span className="email-add"></span>
                                <button type="submit" className="book-button">
                                    <span className="book-top">Book Now</span>
                                    <svg className='book-icon'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 48c110.5 0 200 89.5 200 200 0 110.5-89.5 200-200 200-110.5 0-200-89.5-200-200 0-110.5 89.5-200 200-200m140.2 130.3l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L215.3 303.7l-59.8-60.3c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3 .1-17z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
  });
  
  export default Home;

  