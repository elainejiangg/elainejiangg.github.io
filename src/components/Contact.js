import React from "react";
import "./Contact.css";

// icons from react-icon library
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 id="contact">contact</h2>
      <p>Reach out to me at ejiang@mit.edu! :)</p>
      <p className="pb-1">Or check up what else I've been up to here:</p>
      <div className="icons-container">
        <a href="https://www.linkedin.com/in/elainemjiang/">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/elainejiangg">
          <FaGithubSquare className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
