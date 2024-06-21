import React, { useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navigation/nav'; 
// import Loader from './components/loader/loader';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/Services/Services';
// import Blog from './pages/blog/Blog';
// import Footer from './components/footer/footer';
import './App.css'; // Assuming you have global styles

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef();
  const aboutRef = useRef(null);
  return (
    <div className='App'>
      <NavBar
        homeRef={homeRef}
        servicesRef={servicesRef}
        // ... (pass other refs)
      />

      {/* Single Route for Both Components */}
      <Routes>
        <Route path="/" element={ 
          <>
            <Home ref={homeRef} />
            <Services ref={servicesRef} />
            <About ref ={aboutRef}/>
          </>
        } />
      </Routes> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
