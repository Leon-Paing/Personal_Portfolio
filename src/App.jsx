import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import "@fontsource/pacifico";
import Projects from './components/Projects';
import { useEffect, useRef, useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiUserFocusLight } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import TechStack from './components/TechStack';
import Footer from './components/Footer';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const techStackRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: projectRef, id: "project" },
        { ref: techStackRef, id: "techStack" },
      ];

      sections.forEach(({ ref, id }) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>  

      <div className="w-screen h-screen flex justify-center font-sf font-light scroll-smooth relative">
        <div className="xl:w-[80%] xs:w-full flex justify-start flex-col p-2">

          <Contact/>

          <nav className="w-full flex justify-center items-center bottom-0 left-0 fixed p-5 z-40">
                <div className="w-auto h-auto flex justify-between items-center rounded-3xl border-4 border-slate-100 gap-5 shadow-xl p-2 bg-white z-40">

                    <a href='#home' className={`flex justify-center items-center p-2 rounded-xl cursor-pointer ${activeSection === "home" ? "shadow-in" : ""}`}>
                        <IoHomeOutline className="w-8 h-8"></IoHomeOutline>
                    </a>

                    <a href='#about' className={`flex justify-center items-center p-2 rounded-xl cursor-pointer ${activeSection === "about" ? "shadow-in" : ""}`}>
                        <PiUserFocusLight className="w-8 h-8"></PiUserFocusLight>
                    </a>

                    <a href="#project" className={`flex justify-center items-center p-2 rounded-xl cursor-pointer ${activeSection === "project" ? "shadow-in" : ""}`}>
                        <AiOutlineFundProjectionScreen className="w-8 h-8"></AiOutlineFundProjectionScreen>
                    </a>

                    <a href='#techStack' className={`flex justify-center items-center p-2 rounded-xl cursor-pointer ${activeSection === "techStack" ? "shadow-in" : ""}`}>
                        <GoStack className="w-8 h-8"></GoStack>
                    </a>
                </div>
          </nav>

          <div id="home" ref={homeRef}>
            <Home/>
          </div>
          
          <div id='about' ref={aboutRef}>
            <AboutMe/>
          </div>
          
          <div id='project' ref={projectRef}>
            <Projects/>
          </div>
          
          <div id='techStack' ref={techStackRef}>
            <TechStack/>
          </div>

            <Footer/>

          
        </div>
      </div>
    </>
  )
}

export default App;
