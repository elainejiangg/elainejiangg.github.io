import React from "react";
import "./About.css";

// icons from react-icon library
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const About = () => {
  return (
    <div id="home" className="about-container">
      <div className="title-container">
        <h1>
          hiheyhello!<span className="block lg:inline"> I'm Elaine 👋</span>
        </h1>
        <h2 id="title-caption"></h2>
      </div>

      <p className="max-w-1/2 mt-2 lg:mt-0">
        I am a sophomore at MIT studying CS & AI 🤖 and minoring in Economics
        📈. I'm originally from Queens, NYC 🗽, but am currently based in
        Cambridge, MA 🏫. I’m interested in{" "}
        <span className="group">
          <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
            Computer Vision
          </span>
        </span>
        ,{" "}
        <span className="group">
          <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
            Natural Language Processing
          </span>
        </span>
        , and{" "}
        <span className="group">
          <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
            Full-stack Development
          </span>
        </span>
        . In my free time, you can find me curating my next pizza recipe 🍕 or
        on a new scenic bike route exploring NYC/Boston 🚲 🏙️.
        <div className="mt-2 italic">🌱 I can't wait to work with you!</div>
      </p>

      <div className="py-4">
        <h2 className="connect-title pb-0">let's connect!</h2>
        <div className="icons-container">
          <a href="mailto:ejiang@mit.edu" className="group">
            <ImMail
              className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
              style={{ lineHeight: 0 }}
            />
          </a>
          <a href="https://www.linkedin.com/in/elainemjiang/" className="group">
            <FaLinkedin
              className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
              style={{ lineHeight: 0 }}
            />
          </a>
          <a href="https://github.com/elainejiangg" className="group">
            <FaGithubSquare
              className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
              style={{ lineHeight: 0 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
