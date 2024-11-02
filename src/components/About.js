import React from "react";
import "./About.css";

// icons from react-icon library
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const About = () => {
  return (
    <div id="home" className="about-container">
      <div className="title-container">
        <h1>elaine jiang.</h1>
        <h2 id="title-caption">aspiring software engineer</h2>
      </div>

      <h2>about me</h2>
      <p>
        hiheyhello! I’m Elaine 👋. I am a rising sophomore at MIT majoring in 6-4
        (AI & Decision-Making), minoring in Economics. I’m interested in computer 
        vision, NLP, and full-stack development 💻. I was born and raised in Queens, NYC 🗽, 
        but am currently based in Cambridge, MA 🏫. In my free time, you can find me 
        curating my next pizza recipe 🍕 or on a new scenic bike route exploring NYC/Boston 🚲 🏙️.
        <em> I can't wait to work with you! </em>
      </p>

      <div className="py-3">
        <h2 className="connect-title pb-0">let's connect!</h2>
        <div className="icons-container">
          <a href="mailto:ejiang@mit.edu">
            <ImMail className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/elainemjiang/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/elainejiangg">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
