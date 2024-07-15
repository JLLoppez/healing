import './home.scss';
import photo1 from '../images/photo1.png';
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css'; 



// Calendly Object Reference


// Home Component
const Home = React.forwardRef((props, ref) => {
  // Form Data State
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    countryCode: '', 
    isValidContact: false,
    isValidEmail: false
  });

  const handlePhoneChange = (value, data) => {
    setFormData({
      ...formData,
      contact: value,
      countryCode: data.dialCode,
      isValidContact: true, // Adjust validation logic if needed
    });
  };

  const [showErrors, setShowErrors] = useState(false);

  const validateEmail = (email) => {
    // Basic email validation regex (improve as needed)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const calendlyRef = useRef(window.Calendly);
  // Calendly Script Loading
    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            isValidEmail: validateEmail(prevFormData.email),
          }));
        }, [formData.email]); 
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.head.appendChild(script);
    
  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calendly Popup Function
  const handleCalendlyClick = () => {
    if (calendlyRef.current) {  
      calendlyRef.current.initPopupWidget({ url:  "https://calendly.com/contact-jallopes"});
    } else {
      console.error("Calendly script not loaded yet.");
    }
    return false;
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true); // Show errors if the validation fails

    if (formData.isValidEmail && formData.isValidContact) {
      handleCalendlyClick();
        e.preventDefault();
        handleCalendlyClick(); // Open Calendly popup
        try {
        const response = await fetch('/api/bookAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Booking successful');
        } else {
            console.error('Booking failed');
        }
        } catch (error) {
        console.error('Error:', error);
        }
    }
  };

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
                                        <span>Your Health, Your Way: Personalized Virtual Medical Care </span> Experience convenient, tailored
                                        <span> medical care</span> from the comfort of your home. 
                                        <span> Consult with certified doctors online, manage medications, and Schedule appointments effortlessly.</span> Take charge of your well-being today.
                                    </p>
                                    <div className="booking">
                                    <a className="btn" href="/">Book an Appointment</a>
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
                                            <stop stopColor="#3333eab4"/>
                                            <stop offset="0.678457" stopColor="#3333eab4"/>
                                            </linearGradient>
                                        </defs>

                                        <path d="M31 267C31 160.409 117.409 74 224 74C330.591 74 417 160.409 417 267V455.646C417 459.693 417 461.717 416.636 463.394C415.306 469.521 410.521 474.306 404.394 475.636C402.717 476 400.693 476 396.646 476H51.3544C47.3071 476 45.2835 476 43.606 475.636C37.4794 474.306 32.694 469.521 31.3641 463.394C31 461.717 31 459.693 31 455.646V267Z" fill="url(#paint0_linear_39_22)"/>
                                        <rect width="482" height="476" fill="url(#pattern0_39_22)"/>
                                        </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-header">
                    <h2 className="top-header-h2">Easily book an appointment in 3 simple steps.</h2>
                    <form className="input-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-email">
                                <label htmlFor="email" className="icon-label">
                                    <svg className='email-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill='#000080d3' d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8c-22.4 18.3-58.2 46.7-134.6 106.5-16.8 13.2-50.2 45.1-73.4 44.7-23.2 .4-56.6-31.5-73.4-44.7C106.2 199.5 70.4 171.1 48 152.8V112h416zM48 400V214.4c22.9 18.3 55.4 43.9 104.9 82.6 21.9 17.2 60.1 55.2 103.1 55 42.7 .2 80.5-37.2 103.1-54.9 49.5-38.8 82-64.4 104.9-82.7V400H48z"/>
                                    </svg>
                                    <span className="email-add">Email Address</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" // Add name attribute
                                    placeholder="Enter Your Email Address" 
                                    className="email-input email-placeholder" 
                                    value={formData.email}
                                    onChange={handleChange} // Attach the handler
                                />
                               {showErrors && !formData.isValidEmail && <p className="error-message">Invalid email address</p>}
                            </div>

                            <div className="input-group-contact">
                                <label htmlFor="contact" className="icon-label">
                                    <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill='#000080d3' d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"/>
                                    </svg>
                                    <span className="contact-add">Contact Number</span>
                                </label>
                                <PhoneInput
                                    country={'za'} 
                                    value={formData.contact}
                                    onChange={handlePhoneChange}
                                    inputProps={{
                                    name: 'contact',
                                    required: true,
                                    autoFocus: true
                                    }}
                                />
                               {showErrors && !formData.isValidContact && <p className="error-message">Invalid phone number</p>}
                                </div>

                            <div className="input-group-date">
                                <label htmlFor="appointment" className="icon-label">
                                  <svg  className="appointment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill='#000080d3' d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54a6 6 0 0 1 -6-6V160h352v298a6 6 0 0 1 -6 6zm-52.8-200.7L198.8 404.5c-4.7 4.7-12.3 4.6-17-.1l-75.1-75.7c-4.7-4.7-4.6-12.3 .1-17l22.7-22.5c4.7-4.7 12.3-4.6 17 .1l44.1 44.5 111.1-110.2c4.7-4.7 12.3-4.6 17 .1l22.5 22.7c4.7 4.7 4.6 12.3-.1 17z"/></svg>
                                    <span className="date-top">Date of Appointment</span>
                                </label>
                                <input 
                                    type="text"
                                    id="appointment"
                                    placeholder="Click to Schedule" 
                                    readOnly 
                                    onClick={handleCalendlyClick} 
                                    className="date-input" 
                                />
                            </div>
                            <div className="input-group-book">
                            <span className="email-add"></span>
                                <button type="submit" className="book-button">
                                    <span className="book-top">Book Now</span>
                                    <svg className='book-icon'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#f3efef' >
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

  