import React from "react";
import './contact.scss';



const Contact = React.forwardRef ((props, ref) => {
  
    return (
            <div id="contact" ref={ref}>
                <div className="contact">
                    <h1 className="contact-h1">Reach our <span>Help Desk </span>for support</h1>
                    <p className="contact-p">Have questions or need help? Our dedicated support team is ready to assist you every step of the way. Contact us for any assistance you may need.</p>
                    <form className="conatct-form" >
                        <div className="contact-form-input">
                            <div className="contact-form-input-name">
                                <label htmlFor="name">
                                     <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 4.2998C12.845 4.2998 11.7374 4.7793 10.9207 5.63281C10.104 6.48633 9.64516 7.64394 9.64516 8.85098C9.64516 10.058 10.104 11.2156 10.9207 12.0692C11.7374 12.9227 12.845 13.4022 14 13.4022C15.155 13.4022 16.2626 12.9227 17.0793 12.0692C17.896 11.2156 18.3548 10.058 18.3548 8.85098C18.3548 7.64394 17.896 6.48633 17.0793 5.63281C16.2626 4.7793 15.155 4.2998 14 4.2998ZM9.35484 15.8295C8.19986 15.8295 7.09219 16.309 6.2755 17.1625C5.45881 18.016 5 19.1736 5 20.3806V21.8224C5 22.7375 5.63406 23.5167 6.49806 23.6635C11.4661 24.5119 16.5339 24.5119 21.5019 23.6635C21.9201 23.5924 22.3004 23.3681 22.5748 23.0308C22.8493 22.6935 23 22.2652 23 21.8224V20.3806C23 19.1736 22.5412 18.016 21.7245 17.1625C20.9078 16.309 19.8001 15.8295 18.6452 15.8295H18.2503C18.0355 15.8295 17.8218 15.8659 17.6186 15.9338L16.6129 16.2773C14.915 16.8565 13.085 16.8565 11.3871 16.2773L10.3814 15.9338C10.1778 15.8646 9.96498 15.8293 9.75084 15.8295H9.35484Z" fill="#000080" fill-opacity="0.82"/>
                                    </svg>
                                    <span className="contact-form-name">Enter Name</span>
                                </label>
                                <input 
                                    type="name" 
                                    id="name" 
                                    name="name" // Add name attribute
                                    placeholder="Enter Your name " 
                                    className="name-input name-placeholder" 
                                />
                               {/* {showErrors && !formData.isValidname && <p className="error-message">Invalid name</p>} */}
                            </div>

                            <div className="contact-form-input-email">
                                <label htmlFor="email" className="contact-form-input-email-label">
                                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3333 4.96631H4.66668C3.38334 4.96631 2.34501 6.01631 2.34501 7.29964L2.33334 21.2996C2.33334 22.583 3.38334 23.633 4.66668 23.633H23.3333C24.6167 23.633 25.6667 22.583 25.6667 21.2996V7.29964C25.6667 6.01631 24.6167 4.96631 23.3333 4.96631ZM22.8667 9.92464L14.6183 15.0813C14.245 15.3146 13.755 15.3146 13.3817 15.0813L5.13334 9.92464C5.01636 9.85897 4.91392 9.77025 4.83221 9.66384C4.75051 9.55743 4.69125 9.43555 4.65801 9.30557C4.62478 9.1756 4.61826 9.04023 4.63886 8.90767C4.65946 8.7751 4.70674 8.64809 4.77784 8.53433C4.84894 8.42056 4.94239 8.32241 5.05252 8.2458C5.16266 8.1692 5.28719 8.11574 5.41859 8.08866C5.54998 8.06158 5.68551 8.06144 5.81696 8.08825C5.94841 8.11506 6.07305 8.16826 6.18334 8.24464L14 13.133L21.8167 8.24464C21.927 8.16826 22.0516 8.11506 22.1831 8.08825C22.3145 8.06144 22.45 8.06158 22.5814 8.08866C22.7128 8.11574 22.8374 8.1692 22.9475 8.2458C23.0576 8.32241 23.1511 8.42056 23.2222 8.53433C23.2933 8.64809 23.3406 8.7751 23.3612 8.90767C23.3818 9.04023 23.3752 9.1756 23.342 9.30557C23.3088 9.43555 23.2495 9.55743 23.1678 9.66384C23.0861 9.77025 22.9837 9.85897 22.8667 9.92464Z" fill="#000080" fill-opacity="0.82"/>
                                    </svg>
                                    {/* <span className="contact-form-input-email-add">Enter Your Email Address</span> */}
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" // Add name attribute
                                    placeholder="Enter Your Email Address" 
                                    className="contact-form-input-email-add" 
                                />
                               {/* {showErrors && !formData.isValidContact && <p className="error-message">Invalid phone number</p>} */}
                            </div>

                            {/* <div className="contact-form-input-button"> */}
                            {/* <span className="contact-form-input-button"></span> */}
                                <button type="submit" className="contact-form-input-button-us">
                                    <span className="contact-form-input-button-top">Contact us</span>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 10.2998C20 8.32199 19.4135 6.3886 18.3147 4.74411C17.2159 3.09961 15.6541 1.81789 13.8268 1.06101C11.9996 0.304137 9.98891 0.106104 8.0491 0.491956C6.10929 0.877808 4.32746 1.83022 2.92893 3.22874C1.53041 4.62727 0.578003 6.40909 0.19215 8.3489C-0.193703 10.2887 0.00433106 12.2994 0.761207 14.1266C1.51808 15.9539 2.79981 17.5157 4.4443 18.6145C6.08879 19.7133 8.02219 20.2998 10 20.2998C12.6522 20.2998 15.1957 19.2462 17.0711 17.3709C18.9464 15.4955 20 12.952 20 10.2998ZM10.2688 15.2998C10.1054 15.1328 10.0139 14.9084 10.0139 14.6748C10.0139 14.4412 10.1054 14.2168 10.2688 14.0498L13.125 11.1748L4.2875 11.1748C4.05544 11.1748 3.83288 11.0826 3.66878 10.9185C3.50469 10.7544 3.4125 10.5319 3.4125 10.2998C3.4125 10.0677 3.50469 9.84518 3.66878 9.68109C3.83288 9.51699 4.05544 9.42481 4.2875 9.42481L13.0375 9.42481L10.2688 6.65606C10.103 6.4903 10.0099 6.26548 10.0099 6.03106C10.0099 5.79664 10.103 5.57182 10.2688 5.40606C10.4345 5.2403 10.6593 5.14717 10.8938 5.14717C11.1282 5.14717 11.353 5.2403 11.5188 5.40606L15.7353 9.64405C16.1236 10.0343 16.1234 10.6651 15.7349 11.0551L11.5063 15.2998C11.425 15.3811 11.3285 15.4455 11.2224 15.4895C11.1162 15.5335 11.0024 15.5561 10.8875 15.5561C10.7726 15.5561 10.6588 15.5335 10.5526 15.4895C10.4465 15.4455 10.35 15.3811 10.2688 15.2998Z" fill="white"/>
                                    </svg>
                                </button>
                            {/* </div> */}
                        </div>
                    </form>
                </div>
            </div>
    );
});

export default Contact;