import "./App.scss";
import { useState, useRef, useMemo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useTrackVisibility } from "react-intersection-observer-hook";
import Space from "./files/space-4.png";
import Blogr from "./files/blogr-snapshot.png";
import ToDo from "./files/to-do-app.png";
import TallyStick from "./files/tallystick-snapshot.png";
import CV from "./files/sikiru-razak-boluwatife.pdf";
import ContactUs from "./components/contact/contact";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { AiOutlineCloudDownload, AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { SiRedux, SiJquery, SiMaterialui, SiFirebase } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FiLink, FiPhoneCall } from "react-icons/fi";
import { VscBracketDot } from "react-icons/vsc";
import { IoLogoWhatsapp } from "react-icons/io";
function App() {
  const [inView, setInView] = useState(false);
  const [activateNav, setActivateNav] = useState(true);
  const [skillVisible, setSkillVisible] = useState(false);
  const [spaceVisible, setSpaceVisible] = useState(false);
  const [tallyVisible, setTallyVisible] = useState(false);
  const [todoVisible, setTodoVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [popUp, setPopup] = useState(false);
  const AlterPopup = () => {
    setPopup(!popUp);
  };
  const homeRef = useRef();
  const allRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const spaceRef = useRef();
  const tallyRef = useRef();
  const todoRef = useRef();
  const blogRef = useRef();
  const callBack = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const currentTarget = homeRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [homeRef, options]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSkillVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    const observer1 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setContactVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSpaceVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    const observer3 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTallyVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    const observer4 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setBlogVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    const observer5 = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTodoVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    observer.observe(skillRef.current);
    observer1.observe(contactRef.current);
    observer2.observe(spaceRef.current);
    observer3.observe(tallyRef.current);
    observer4.observe(blogRef.current);
    observer5.observe(todoRef.current);
  }, []);
  return (
    <div ref={allRef} className="App">
      <header ref={homeRef} className="header" id="header">
        <div className="header-content">
          <div className="intro-flex">
            <h2 className="header1">Hi</h2>
            <div>
              <span className="header-intro">
                <span className="bracket bracket-open">{`{`}</span>
                <span>i'm </span>
                <h1 className="inline"> Razak</h1>
                <div className="header-intro-line2">
                  <span>a </span>
                  <h2 className="inline">
                    FrontEnd Developer
                    <span className="bracket bracket-close">{`}`}</span>
                  </h2>
                </div>
              </span>
            </div>
          </div>
          <p className="shortphrase">
            I build things for the web, Need a website/app on the web
            <br />
            <button onClick={AlterPopup} className="btn btn-cta btn-contact">
              Contact me
            </button>{" "}
            for a job|Project.
          </p>
          <div className="iconslist">
            <a
              href="https://www.linkedin.com/in/sikiru-razak-89b372225/"
              target="_blank"
            >
              <FaLinkedin className="socialIcon linkedin" />
            </a>
            <a
              href="https://github.com/roscoericch/space-tourism-app"
              target="_blank"
            >
              <FaGithub className="socialIcon github" />
            </a>
            <a href="https://twitter.com/sikirurazak1" target="_blank">
              <FaTwitter className="socialIcon twitter" />
            </a>
            {/* <FaLinkedin className="socialIcon linkedin" />
            <FaGithub className="socialIcon github" />
            <FaTwitter className="socialIcon twitter" /> */}
          </div>
          <div className="cv-download">
            <a
              href={CV}
              download
              id="cv"
              className="btn btn-cta btn-cv btn-cv-bg moveinbottom"
            >
              <span>Download CV </span>
              <AiOutlineCloudDownload className="btn-cv-icon" />
            </a>
          </div>
        </div>
      </header>
      <section
        ref={skillRef}
        className={skillVisible ? "skills moveinbottom" : "skills section"}
        id="Skills"
      >
        <h2 className="skills-header">My Tech Stack</h2>
        <div className="skillsgrid">
          <div className="javascript skillIcons">
            <TbBrandJavascript className="skillsIcon javascriptIcon" />
            <div className="overlay">
              <p className="label">Javascript</p>
            </div>
          </div>
          <div className="html skillIcons">
            <AiOutlineHtml5 className="skillsIcon htmlIcon" />
            <div className="overlay">
              <p className="label">HTML</p>
            </div>
          </div>
          <div className="css skillIcons">
            <TbBrandCss3 className="skillsIcon cssIcon" />
            <div className="overlay">
              <p className="label">Css</p>
            </div>
          </div>
          <div className="react skillIcons">
            <FaReact className="skillsIcon reactIcon" />
            <div className="overlay">
              <p className="label">React</p>
            </div>
          </div>
          <div className="redux skillIcons">
            <SiRedux className="skillsIcon reduxIcon" />
            <div className="overlay">
              <p className="label">Redux</p>
            </div>
          </div>
          <div className="jquery skillIcons">
            <SiJquery className="skillsIcon jqueryIcon" />
            <div className="overlay">
              <p className="label">Jquery</p>
            </div>
          </div>
          <div className="sass skillIcons">
            <FaSass className="skillsIcon sassIcon" />
            <div className="overlay">
              <p className="label">Sass</p>
            </div>
          </div>
          <div className="github skillIcons">
            <FaGithub className="skillsIcon githubIcon" />
            <div className="overlay">
              <p className="label">GitHub</p>
            </div>
          </div>
          <div className="git skillIcons">
            <DiGit className="skillsIcon gitIcon" />
            <div className="overlay">
              <p className="label">Git</p>
            </div>
          </div>
          <div className="firebase skillIcons">
            <SiFirebase className="skillsIcon firebaseIcon" />
            <div className="overlay">
              <p className="label">Firebase</p>
            </div>
          </div>
          <div className="bootStrap skillIcons">
            <FaBootstrap className="skillsIcon bootstrapIcon" />
            <div className="overlay">
              <p className="label">Bootstrap</p>
            </div>
          </div>
          <div className="materialui skillIcons">
            <SiMaterialui className="skillsIcon materialuiIcon" />
            <div className="overlay">
              <p className="label">Material Ui</p>
            </div>
          </div>
        </div>
        <div className="skillsIntro">
          <div className="shortIntro">
            I'm <span>Sikiru Razak</span> a Passionate and detail-oriented
            Frontend Software Developer using my skills in programming and
            software development, in the timely completion of projects, creation
            of highly functional and responsive Software applications and
            Website.
            <br />I can be of value to your Organization or on that your next
            big idea that needs a website/webapp.
          </div>
          <ul className="skillsList">
            <li className="skill">Html</li>
            <li className="skill">Css</li>
            <li className="skill">Javascript</li>
            <li className="skill">Jquery</li>
            <li className="skill">React</li>
            <li className="skill">Redux</li>
            <li className="skill">Sass</li>
            <li className="skill">Material Ui</li>
            <li className="skill">Bootstrap</li>
            <li className="skill">Firebase</li>
            <li className="skill">Git</li>
            <li className="skill">GitHub</li>
            <li className="skill">Rest Api</li>
          </ul>
        </div>
      </section>
      <section className="projects" id="Projects">
        <h2 className="skills-header">Projects</h2>
        <div className="projectsList">
          <div
            ref={spaceRef}
            className={
              spaceVisible ? "project moveinbottom" : "project section"
            }
          >
            <div className="project-description">
              <h1 className="Project-title">Space Website</h1>
              <p className="description">
                This Project was inspired by my obsession of the outer space and
                a web development challenge website, it’s basically a
                multiplePage website that simulates a space tourism Team
                travelling to outer space and onboarding individuals who are
                interested in travelling outer space for a hypothetical tour...
                The Project was built with React.js,Javascript,Html and css.
                <div className="Techstacks"></div>
              </p>
              <div className="links">
                <a
                  href="https://github.com/roscoericch/space-tourism-app"
                  target="_blank"
                  className="btn link-btn"
                >
                  github repository
                </a>
                <a
                  href="https://space-tourism-razak-dev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  live Url
                </a>
              </div>
            </div>
            <div className="project-img">
              <img src={Space} className="project-snapshot" />
              <div className="overlay overlay-btn">
                {/* <FaGithub className="bg-font" />
                <FiLink className="bg-font" /> */}
                <a
                  href="https://github.com/roscoericch/space-tourism-app"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FaGithub className="link-btn-icon" />
                </a>
                <a
                  href="https://space-tourism-razak-dev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FiLink />
                </a>
              </div>
            </div>
          </div>
          <div
            ref={todoRef}
            className={todoVisible ? "project moveinbottom" : "project section"}
          >
            <div className="project-img">
              <img src={ToDo} className="project-snapshot" />
              <div className="overlay overlay-btn">
                {/* <FaGithub className="bg-font" />
                <FiLink className="bg-font" /> */}
                <a
                  href="https://github.com/roscoericch/TO-DO-APP"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FaGithub className="link-btn-icon" />
                </a>
                <a
                  href="https://to-do-app-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FiLink />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h1 className="Project-title">To-Do-App</h1>
              <p className="description">
                I Designed and Developed a to-do-app that helps in organizing
                daily activities using web development technologies like
                HTML,CSS,JAVASCRIPT and frameworks like REACT JS and more.... I
                created a software that helps us organize our day we all know
                how Hectic an unplanned busy day can be. I added a functionality
                that keeps track of the due time you input in the activity and
                alerts you when the activity planned time elapses...
              </p>
              <div className="links">
                <a
                  href="https://github.com/roscoericch/TO-DO-APP"
                  target="_blank"
                  className="btn link-btn"
                >
                  github repository
                </a>
                <a
                  href="https://to-do-app-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  live Url
                </a>
              </div>
            </div>
          </div>
          <div
            ref={blogRef}
            className={blogVisible ? "project moveinbottom" : "project section"}
          >
            <div className="project-description">
              <h1 className="Project-title">Blogr Website</h1>
              <p className="description">
                This Project is a landing page of an hypothetical blogging
                platform. It was designed with HTML,CSS and plain Javascript....
              </p>
              <div className="links">
                <a
                  href="https://github.com/roscoericch/blogr-landing-page-project"
                  target="_blank"
                  className="btn link-btn"
                >
                  github repository
                </a>
                <a
                  href="https://blogr-page-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  live Url
                </a>
              </div>
            </div>
            <div className="project-img">
              <img src={Blogr} className="project-snapshot" />
              <div className="overlay overlay-btn">
                {/* <FaGithub className="bg-font" />
                <FiLink className="bg-font" /> */}
                <a
                  href="https://github.com/roscoericch/blogr-landing-page-project"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FaGithub className="link-btn-icon" />
                </a>
                <a
                  href="https://blogr-page-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FiLink />
                </a>
              </div>
            </div>
          </div>
          <div
            ref={tallyRef}
            className={
              tallyVisible ? "project moveinbottom" : "project section"
            }
          >
            <div className="project-img">
              <img src={TallyStick} className="project-snapshot" />
              <div className="overlay overlay-btn">
                <a
                  href="https://github.com/roscoericch/counter---app"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FaGithub className="link-btn-icon" />
                </a>
                <a
                  href="https://tallysticks-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  <FiLink />
                </a>
              </div>
            </div>
            <div className="project-description">
              <h1 className="Project-title">TallyStick App</h1>
              <p className="description">
                This is basically a counter-app I developed and designed to help
                a store keeper while I was an Intern. The store keeper was
                facing a challenge of keeping Track of the newly arrived stock
                when they are been delivered and offloaded in the store. So I
                made a counter App to keep track of count and a method to store
                information to every count. This project was created using
                HTML,CSS and plain Javascript.....
              </p>
              <div className="links">
                <a
                  href="hhttps://github.com/roscoericch/counter---app"
                  target="_blank"
                  className="btn link-btn"
                >
                  github repository
                </a>
                <a
                  href="https://tallysticks-razakdev.netlify.app/"
                  target="_blank"
                  className="btn link-btn"
                >
                  live Url
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={contactRef}
        className={contactVisible ? "contactme moveinbottom" : "contactme"}
      >
        <div className="contactmeFont">
          <span>I'm currently Open to new opportunities,</span>
          <br />
          <span>And Taking Freelance Clients.</span>
          <br />
          <span>Click The button to send me a Messsage</span>
          <br />
          <span>I'll get back to You as soon as possible.</span>
        </div>
        <button onClick={AlterPopup} className="btn getInTouch getInTouch-bg">
          Get In Touch
        </button>
        {/* <ContactUs /> */}
      </section>
      <footer className="footer">
        <div className="footerNote">&copy; Sikiru Razak.</div>
      </footer>
      {!inView && (
        <nav
          className={
            activateNav
              ? "nav dropinanimate moveOutNav"
              : "nav dropinanimate moveInNav"
          }
        >
          <div>
            <a href="#header" className="Home">
              <VscBracketDot className="HomeIcon" />
            </a>
          </div>
          <a href="#Projects" className="navItem">
            Projects
          </a>
          <a href="#Skills" className="navItem">
            Skills
          </a>
          <div className="btn-group">
            <a
              href={CV}
              download
              id="cv"
              className="btn btn-cv btn-cv-sm nav-btn"
            >
              <span>Download CV </span>
              <AiOutlineCloudDownload className="btn-cv-icon" />
            </a>
            <button
              onClick={AlterPopup}
              className="nav-btn btn getInTouch getInTouch-sm"
            >
              Get In Touch
            </button>
          </div>
        </nav>
      )}
      {!inView && (
        <div
          className={
            activateNav
              ? "hamburger animate-reverse dropinanimate"
              : "hamburger animate dropinanimate"
          }
          onClick={() => {
            setActivateNav(!activateNav);
          }}
        >
          <span className=" lines line1"></span>
          <span className="line2">
            <span className="line-half line-half1"></span>
            <span className="line-half line-half2"></span>
          </span>
          <span className=" lines line3"></span>
        </div>
      )}

      {!inView && (
        <div className="sidesocials moveinanimate">
          <a
            href="https://twitter.com/sikirurazak1"
            target="_blank"
            className="sidesocialIcon"
          >
            <FaTwitter className="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/sikiru-razak-89b372225/"
            target="_blank"
            className="sidesocialIcon"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://wa.me/2347013879246"
            target="_blank"
            className="sidesocialIcon"
          >
            <IoLogoWhatsapp className="whatsapp" />
          </a>
        </div>
      )}
      {popUp && <ContactUs AlterPopup={AlterPopup} Popup={popUp} />}
    </div>
  );
}

export default App;
