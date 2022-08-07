import React from "react";

function Home() {
  return (
    <div>
      <header className="header">
        <h2>Hi</h2>
        <div>
          i'm <h1>Sikiru Razak</h1>
        </div>
        <div>
          a <h2>FrontEnd Developer</h2>
        </div>
        <div className="iconslist"></div>
        <p className="shortphrase">
          I build things for the web, Need anything on the web
          <br />
          <button>Contact me</button> for a job|Project.
        </p>
        {/* social icons
        short phrase about me */}
        {/* my skills 
        list of skills 
        short sentence about me*/}
        {/* projects
          tech used
          screenshot
          live link button
          github repository*/}
        {/* get in Touch */}
      </header>
      <section className="skills">
        <h2>My skills</h2>
        <div className="skillsgrid"></div>
      </section>
      <section className="projects">

      </section>
      <section className="contactme"></section>
    </div>
  );
}

export default Home;
