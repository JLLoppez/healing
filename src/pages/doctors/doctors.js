import React from "react";
import './doctors.scss';
import photo4 from '../images/photo4.png';
import photo5 from '../images/photo5.png';


const Doctors = React.forwardRef ((props, ref) => {
  
    return (
            <div id="doctors" ref={ref}>
                <div className="doctors">
                    <h1 className="docs-top">
                        <span> Masters of Medicine:</span> Meet our team of specialists
                    </h1>
                    <p className="docs-p">
                        Our team of expert medical specialists is dedicated to providing you with the highest quality care using the latest advancements in medicine. We combine expertise, empathy, and years of experience to prioritize your health and well-being.
                    </p>
                    <div className="docs-cards">
                        <div className="docs-cards-1">
                        <img 
                            alt="Doctor Sarah" 
                            className="docs-cards-1-image" 
                            src={photo5} 
                            width="300" 
                            height="200" 
                        />
                        <svg width="822" height="385" viewBox="0 0 822 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_4566_79)">
                                <rect x="19" y="13.3501" width="778" height="340" rx="28" fill="url(#paint0_radial_4566_79)"/>
                                <rect x="20" y="14.3501" width="776" height="338" rx="27" stroke="#000080" stroke-opacity="0.82" stroke-width="2"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_4566_79" x="0.268294" y="0.862294" width="821.707" height="383.707" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3.12195" dy="9.36585"/>
                                <feGaussianBlur stdDeviation="10.9268"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4566_79"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4566_79" result="shape"/>
                                </filter>
                                <radialGradient id="paint0_radial_4566_79" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(337.606 -22.1723) rotate(49.1427) scale(450.596 833.836)">
                                <stop offset="0.442754" stop-color="white"/>
                                <stop offset="0.976391" stop-color="#0808CF" stop-opacity="0.63"/>
                                </radialGradient>
                                </defs>
                            </svg>
                            <h2 className="docs-cards-1-h2">
                                Dr. Sarah Johnson (Cardiologist)
                            </h2>
                            <p className="docs-cards-1-p">Dr. Johnson is a leading cardiologist dedicated to providing compassionate care and utilizing the latest technology in the prevention and treatment of heart disease. She is a trusted partner to her patients, empowering them to achieve optimal wellness.</p>
                            <button className="docs-cards-1-button">Book appointment 
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6676 15.9854L16.562 14.0902C16.8172 13.8381 17.14 13.6655 17.4913 13.5934C17.8426 13.5213 18.2072 13.5528 18.541 13.6841L20.8498 14.6063C21.1871 14.7432 21.4763 14.977 21.681 15.2781C21.8857 15.5793 21.9967 15.9343 22 16.2984V20.5287C21.998 20.7764 21.946 21.0212 21.847 21.2482C21.748 21.4753 21.6041 21.6799 21.4239 21.8499C21.2438 22.0198 21.0311 22.1516 20.7987 22.2371C20.5663 22.3227 20.3191 22.3603 20.0718 22.3477C3.89312 21.3409 0.628639 7.63472 0.0112629 2.38914C-0.0173962 2.13155 0.00878882 1.8708 0.0880951 1.62406C0.167401 1.37731 0.298031 1.15016 0.471392 0.95755C0.644752 0.764939 0.856914 0.611231 1.09392 0.506538C1.33092 0.401846 1.5874 0.348542 1.84648 0.350132H5.93131C6.29582 0.351212 6.65168 0.461362 6.9531 0.666415C7.25453 0.871468 7.48774 1.16205 7.62275 1.50078L8.54458 3.81052C8.68011 4.14309 8.71469 4.50822 8.644 4.86033C8.5733 5.21243 8.40047 5.53589 8.14709 5.79031L6.25268 7.68549C6.25268 7.68549 7.34366 15.0716 14.6676 15.9854Z" fill="url(#paint0_linear_4566_90)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_4566_90" x1="9.95473" y1="5.8501" x2="9.95472" y2="14.1949" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F4D92" stop-opacity="0.24"/>
                                    <stop offset="0.436049" stop-color="#0047AB" stop-opacity="0.65"/>
                                    <stop offset="0.820643" stop-color="#000080" stop-opacity="0.79"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                            </button>
                        </div>

                        <div className="docs-cards-2">
                            <img 
                                alt="Doctor Sarah" 
                                className="docs-cards-2-image" 
                                src={photo4} 
                                width="300" 
                                height="200" 
                            />
                            <svg width="822" height="385" viewBox="0 0 822 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_4566_79)">
                                <rect x="19" y="13.3501" width="778" height="340" rx="28" fill="url(#paint0_radial_4566_79)"/>
                                <rect x="20" y="14.3501" width="776" height="338" rx="27" stroke="#000080" stroke-opacity="0.82" stroke-width="2"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_4566_79" x="0.268294" y="0.862294" width="821.707" height="383.707" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="3.12195" dy="9.36585"/>
                                <feGaussianBlur stdDeviation="10.9268"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4566_79"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4566_79" result="shape"/>
                                </filter>
                                <radialGradient id="paint0_radial_4566_79" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(337.606 -22.1723) rotate(49.1427) scale(450.596 833.836)">
                                <stop offset="0.442754" stop-color="white"/>
                                <stop offset="0.976391" stop-color="#0808CF" stop-opacity="0.63"/>
                                </radialGradient>
                                </defs>
                            </svg>
                            <h2 className="docs-cards-2-h2">
                                Dr. Mark Lee (Dermatologist )
                            </h2>
                            <p className="docs-cards-2-p">Dr. Lee is a visionary dermatologist known for his gentle, holistic approach to skin health. He's a leader in the field, renowned for his commitment to clinical excellence, patient education, and precision in delivering patient-centered care.</p>
                            <button className="docs-cards-2-button">Book appointment 
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6676 15.9854L16.562 14.0902C16.8172 13.8381 17.14 13.6655 17.4913 13.5934C17.8426 13.5213 18.2072 13.5528 18.541 13.6841L20.8498 14.6063C21.1871 14.7432 21.4763 14.977 21.681 15.2781C21.8857 15.5793 21.9967 15.9343 22 16.2984V20.5287C21.998 20.7764 21.946 21.0212 21.847 21.2482C21.748 21.4753 21.6041 21.6799 21.4239 21.8499C21.2438 22.0198 21.0311 22.1516 20.7987 22.2371C20.5663 22.3227 20.3191 22.3603 20.0718 22.3477C3.89312 21.3409 0.628639 7.63472 0.0112629 2.38914C-0.0173962 2.13155 0.00878882 1.8708 0.0880951 1.62406C0.167401 1.37731 0.298031 1.15016 0.471392 0.95755C0.644752 0.764939 0.856914 0.611231 1.09392 0.506538C1.33092 0.401846 1.5874 0.348542 1.84648 0.350132H5.93131C6.29582 0.351212 6.65168 0.461362 6.9531 0.666415C7.25453 0.871468 7.48774 1.16205 7.62275 1.50078L8.54458 3.81052C8.68011 4.14309 8.71469 4.50822 8.644 4.86033C8.5733 5.21243 8.40047 5.53589 8.14709 5.79031L6.25268 7.68549C6.25268 7.68549 7.34366 15.0716 14.6676 15.9854Z" fill="url(#paint0_linear_4566_90)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_4566_90" x1="9.95473" y1="5.8501" x2="9.95472" y2="14.1949" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F4D92" stop-opacity="0.24"/>
                                    <stop offset="0.436049" stop-color="#0047AB" stop-opacity="0.65"/>
                                    <stop offset="0.820643" stop-color="#000080" stop-opacity="0.79"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
});

export default Doctors;