import React, { useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/nav'; 
// import Loader from './components/loader/loader';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/Services/Services';
//import Contact from './pages/contact/contact';
// import Blog from './pages/blog/Blog';
// import Footer from './components/footer/footer';
import './App.css'; // Assuming you have global styles
//import Doctors from './pages/doctors/doctors';

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef();
  const aboutRef = useRef(null);
  //const doctorsRef = useRef(null);
  //const contactRef = useRef(null);

  return (
    <div className='App'>
      <NavBar
        homeRef={homeRef}
        servicesRef={servicesRef}
        aboutRef={aboutRef}
        //doctorsRef={doctorsRef}
      //  contactRef={contactRef}
        // ... (pass other refs)
      />

      {/* Single Route for Both Components */}
      <Routes>
        <Route path="/" element={ 
          <>
            <Home ref={homeRef} />
            <Services ref={servicesRef} />
            <About ref ={aboutRef}/>
            {/*<Doctors ref={doctorsRef}/>
            <Contact ref={contactRef}/>*/}
          </>
        } />
      </Routes> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
