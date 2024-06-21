import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

const NavBar = ({ homeRef, servicesRef, doctorsRef, aboutRef, blogRef, contactRef }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = () => {
    setIsNavExpanded(false); // Collapse the menu on mobile after clicking
  };

  
 return (
   <header className="header">
     <nav className="nav container">
       <NavLink to="/" className="nav__logo">
          <svg width="218" height="50" viewBox="0 0 218 50" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 29.2174C5 26.8879 5.48855 24.5811 6.43782 22.429C7.3871 20.2767 8.77842 18.3212 10.5324 16.6739C12.2864 15.0267 14.3687 13.72 16.6603 12.8285C18.9521 11.9372 21.4083 11.4783 23.8889 11.4783V29.2174H5Z" fill="#000080d3" fillOpacity="0.8"/>
                <path d="M5 29.2174C5 31.684 5.48855 34.1264 6.43782 36.4053C7.3871 38.6841 8.77842 40.7546 10.5324 42.4987C12.2864 44.2428 14.3687 45.6264 16.6603 46.5703C18.9521 47.5142 21.4083 48 23.8889 48V29.2174H5Z" fill="#000080d3"/>
                <path d="M42.7778 29.2174C42.7778 31.684 42.2896 34.1264 41.3404 36.4053C40.3911 38.6841 38.9999 40.7546 37.2455 42.4987C35.4915 44.2428 33.4092 45.6264 31.1174 46.5703C28.8258 47.5142 26.3694 48 23.8889 48V29.2174H42.7778Z" fill="#000080d3"/>
                <path d="M55 13.5652C55 21.0571 48.5327 27.1304 40.5554 27.1304H26.1111V13.5652C26.1111 6.07338 32.5781 0 40.5554 0C48.5327 0 55 6.07338 55 13.5652Z" fill="#000080d3"/>
                <path d="M81.6807 33.5V39H69.1963V33.5H71.6963V19.6406H69.1963V14.1406L81.6807 14.1094V19.6406H79.6963V23.7344H85.6807V19.6406H83.6963V14.1094L96.165 14.1406V19.6406H93.6807V33.5H96.165V39H83.6963V33.5H85.6807V29.0781H79.6963V33.5H81.6807ZM107.821 39.2812C105.884 39.2812 104.201 38.9219 102.774 38.2031C101.337 37.4948 100.233 36.4792 99.4619 35.1562C98.7015 33.8333 98.3213 32.2865 98.3213 30.5156C98.3213 28.7656 98.6963 27.2448 99.4463 25.9531C100.186 24.6719 101.233 23.6823 102.587 22.9844C103.941 22.2865 105.53 21.9375 107.353 21.9375C109.03 21.9375 110.509 22.2656 111.79 22.9219C113.071 23.5885 114.061 24.5312 114.759 25.75C115.467 26.9688 115.821 28.3906 115.821 30.0156C115.821 30.5781 115.738 31.1094 115.571 31.6094H105.837C105.837 32.5885 106.207 33.375 106.946 33.9688C107.686 34.5521 108.576 34.8438 109.618 34.8438C110.41 34.8438 111.28 34.7083 112.228 34.4375C113.175 34.1562 114.129 33.724 115.087 33.1406L115.353 33.2344V37.4375C114.28 38.0521 113.175 38.5156 112.04 38.8281C110.915 39.1302 109.509 39.2812 107.821 39.2812ZM105.837 28.4062V28.8594H109.837V28.5312C109.837 27.7917 109.665 27.1562 109.321 26.625C108.988 26.0833 108.488 25.8125 107.821 25.8125C107.269 25.8125 106.8 26.0885 106.415 26.6406C106.03 27.1823 105.837 27.7708 105.837 28.4062ZM124.243 39.2812C123.181 39.2812 122.217 39.0729 121.353 38.6562C120.478 38.25 119.78 37.6615 119.259 36.8906C118.738 36.1198 118.478 35.224 118.478 34.2031C118.478 33.099 118.785 32.1615 119.399 31.3906C120.014 30.6406 120.816 30.0781 121.806 29.7031C122.806 29.3281 123.884 29.1406 125.04 29.1406C126.405 29.1406 127.717 29.3438 128.978 29.75V29.0469C128.978 28.2135 128.623 27.5781 127.915 27.1406C127.217 26.7031 126.269 26.4844 125.071 26.4844C124.561 26.4844 123.988 26.5469 123.353 26.6719C122.717 26.7969 122.097 26.9688 121.493 27.1875C120.889 27.4062 120.363 27.651 119.915 27.9219L119.462 27.7344V23.1875C120.722 22.7396 122.009 22.4219 123.321 22.2344C124.634 22.0365 125.858 21.9375 126.993 21.9375C133.326 21.9375 136.493 23.7188 136.493 27.2812V34.2969H137.962V39H129.962L129.259 36.4375C128.811 37.3125 128.113 38.0052 127.165 38.5156C126.217 39.026 125.243 39.2812 124.243 39.2812ZM127.181 35.2812C127.524 35.2812 127.873 35.224 128.228 35.1094C128.592 34.9948 128.842 34.875 128.978 34.75V32.125C128.821 32.1042 128.571 32.0417 128.228 31.9375C127.873 31.8438 127.566 31.7969 127.306 31.7969C126.754 31.7969 126.311 31.9688 125.978 32.3125C125.655 32.6562 125.493 33.1146 125.493 33.6875C125.493 34.1146 125.644 34.4896 125.946 34.8125C126.259 35.125 126.67 35.2812 127.181 35.2812ZM153.165 34.2969V39H140.524V34.2969H143.274V19.8906H140.524V15.6406L150.759 14.6094V34.2969H153.165ZM161.478 20.625C160.175 20.625 159.103 20.3177 158.259 19.7031C157.415 19.0885 156.993 18.2031 156.993 17.0469C156.993 15.8906 157.415 15.0156 158.259 14.4219C159.103 13.8281 160.186 13.5312 161.509 13.5312C162.832 13.5312 163.905 13.8229 164.728 14.4062C165.561 14.9896 165.978 15.8698 165.978 17.0469C165.978 18.2031 165.55 19.0885 164.696 19.7031C163.853 20.3177 162.78 20.625 161.478 20.625ZM167.228 34.2969V39H155.712V34.2969H157.728V27.0938H155.712V23.25L165.212 22.2656V34.2969H167.228ZM190.321 28.375V34.4844H192.493V39H182.821V28.3438C182.821 27.8958 182.675 27.5 182.384 27.1562C182.103 26.8125 181.759 26.6406 181.353 26.6406C180.592 26.6406 180.113 27.0208 179.915 27.7812C179.707 28.5625 179.603 29.6562 179.603 31.0625V34.4844H179.634V39H169.868V34.4844H172.134V27.0938H169.868V22.875L179.603 21.9375V24.2812C180.321 23.4271 181.139 22.8229 182.056 22.4688C182.972 22.1146 184.009 21.9375 185.165 21.9375C188.603 21.9375 190.321 24.0833 190.321 28.375ZM203.165 45.0781C200.936 45.0781 198.587 44.7604 196.118 44.125V39.6094C197.504 40.0365 198.649 40.3594 199.556 40.5781C200.462 40.8073 201.353 40.9219 202.228 40.9219C204.748 40.9219 206.009 39.6719 206.009 37.1719C205.436 37.6823 204.733 38.1146 203.899 38.4688C203.066 38.8229 202.123 39 201.071 39C199.561 39 198.285 38.6198 197.243 37.8594C196.201 37.1094 195.415 36.0938 194.884 34.8125C194.363 33.5312 194.103 32.1094 194.103 30.5469C194.103 28.9427 194.368 27.4948 194.899 26.2031C195.431 24.901 196.217 23.8646 197.259 23.0938C198.311 22.3229 199.582 21.9375 201.071 21.9375C203.123 21.9375 204.769 22.8229 206.009 24.5938L207.134 22.2656H215.087V27.0938H213.587V36.8906C213.587 38.6927 213.155 40.2031 212.29 41.4219C211.436 42.6406 210.228 43.5521 208.665 44.1562C207.103 44.7708 205.269 45.0781 203.165 45.0781ZM204.024 34.7188C204.514 34.7188 204.962 34.5677 205.368 34.2656C205.774 33.9635 206.019 33.6667 206.103 33.375V27.6719C205.707 26.901 204.972 26.5156 203.899 26.5156C203.045 26.5156 202.358 26.8854 201.837 27.625C201.326 28.3646 201.071 29.3698 201.071 30.6406C201.071 31.8594 201.326 32.8438 201.837 33.5938C202.358 34.3438 203.087 34.7188 204.024 34.7188Z" fill="url(#paint0_linear_4025_12)"/>
                <defs>
                  <linearGradient id="paint0_linear_4025_12" x1="150" y1="14.5" x2="150" y2="36.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F462"/>
                    <stop offset="0.436049" stopColor="#04A24B"/>
                    <stop offset="0.820643" stopColor="#000080d3"/>
                  </linearGradient>
                </defs>
           </svg>
       </NavLink>

       <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
        
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
         <ul className="nav__list">
           <li className="nav__item">
           <NavLink to="/#" className="nav__link_home" onClick={handleLinkClick}>Home</NavLink>
           </li>
           <li className="nav__item">
              <a href="#services" className="nav__link" onClick={handleLinkClick}>Services</a>
           </li>
           <li className="nav__item">
             <NavLink
               to="/doctors"
               className="nav__link"
               onClick={() => doctorsRef.current?.scrollIntoView({ behavior: "smooth" })} 
             >
               Find Doctors
             </NavLink>
           </li>
           <li className="nav__item">
           <a href="#about" className="nav__link" onClick={handleLinkClick}>About us</a>
           </li>

           <li className="nav__item">
           <a href="#blog" className="nav__link" onClick={handleLinkClick}>Blog</a>
           </li>

           <li className="nav__item">
           <a href="#contact" className="nav__link" onClick={handleLinkClick}>Contact us</a>
           </li>
           <li className="nav__item_join">
             <NavLink to="/get-started" className="nav__link_join nav__cta">
               Join Us
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </header>
 );
};

export default NavBar;