// import React from "react";
// import "./About.css";

// // icons from react-icon library
// import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
// import { ImMail } from "react-icons/im";

// const About = () => {

//   return (
//     <div id="home" className="about-container">
//       <div className="title-container">
//         <h1>
//           hiheyhello!<span className="block lg:inline"> I'm Elaine 👋</span>
//         </h1>
//         <h2 id="title-caption"></h2>
//       </div>

//       <p className="max-w-1/2 mt-2 lg:mt-0">
//         I am a sophomore at MIT studying CS & AI 🤖 and minoring in Economics
//         📈. I'm originally from Queens, NYC 🗽, but am currently based in
//         Cambridge, MA 🏫. I’m interested in{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Computer Vision
//           </span>
//         </span>
//         ,{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Natural Language Processing
//           </span>
//         </span>
//         , and{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Full-stack Development
//           </span>
//         </span>
//         . In my free time, you can find me curating my next pizza recipe 🍕 or
//         on a new scenic bike route exploring NYC/Boston 🚲 🏙️.
//         <div className="mt-2 italic">🌱 I can't wait to work with you!</div>
//       </p>

//       <div className="py-4">
//         <h2 className="connect-title pb-0">let's connect!</h2>
//         <div className="icons-container">
//           <a href="mailto:ejiang@mit.edu" className="group">
//             <ImMail
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//           <a href="https://www.linkedin.com/in/elainemjiang/" className="group">
//             <FaLinkedin
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//           <a href="https://github.com/elainejiangg" className="group">
//             <FaGithubSquare
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React, { useState, useEffect } from "react";
// import "./About.css";
// import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
// import { ImMail } from "react-icons/im";

// const About = () => {
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const textArray = [
//     "I'm a New Yorker born and raised 🗽.",
//     "I love exploring scenic bike routes 🚲 🏙️.",
//     "I’m passionate about machine learning 🤖! ",
//     "Pizza-making is my creative outlet 🍕.",
//   ];

//   const typingSpeed = 65; // typing speed in ms
//   const deletingSpeed = 40; // deleting speed in ms
//   const pause = 1500; // pause before deleting/next text

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentText = textArray[index];
//       if (!isDeleting) {
//         // Typing
//         setDisplayText((prev) => currentText.substring(0, prev.length + 1));
//         if (displayText === currentText) {
//           setTimeout(() => setIsDeleting(true), pause);
//         }
//       } else {
//         // Deleting
//         setDisplayText((prev) => currentText.substring(0, prev.length - 1));
//         if (displayText === "") {
//           setIsDeleting(false);
//           setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to the next text
//         }
//       }
//     };

//     const timer = setTimeout(
//       handleTyping,
//       isDeleting ? deletingSpeed : typingSpeed
//     );
//     return () => clearTimeout(timer);
//   }, [displayText, isDeleting, index]);

//   return (
//     <div id="home" className="about-container ">
//       <div className="title-container">
//         <h1 className="">
//           hiheyhello!<span className="block lg:inline"> I'm Elaine 👋 </span>
//         </h1>
//         <h2 id="title-caption " className="typing-effect">
//           {displayText || "\u00A0" /* Non-breaking space when text is empty */}
//           <span className="blinking-cursor">|</span>
//         </h2>
//       </div>

//       <p className="max-w-1/2 mt-2 lg:mt-0">
//         I am a sophomore at MIT studying CS & AI 🤖 and minoring in Economics
//         📈. I'm interested in{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Computer Vision
//           </span>
//         </span>
//         ,{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Natural Language Processing
//           </span>
//         </span>
//         , and{" "}
//         <span className="group">
//           <span className="bg-left-bottom bg-gradient-to-r from-indigo-300 to-pink-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-blue-300">
//             Full-stack Development
//           </span>
//         </span>
//         .<div className="mt-2 italic">🌱 I can't wait to work with you!</div>
//       </p>

//       <div className="py-4">
//         <h2 className="connect-title pb-0">let's connect!</h2>
//         <div className="icons-container">
//           <a href="mailto:ejiang@mit.edu" className="group">
//             <ImMail
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//           <a href="https://www.linkedin.com/in/elainemjiang/" className="group">
//             <FaLinkedin
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//           <a href="https://github.com/elainejiangg" className="group">
//             <FaGithubSquare
//               className="icon transition-all duration-300 ease-in-out group-hover:text-blue-300 "
//               style={{ lineHeight: 0 }}
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import "./About.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const About = () => {
  const [introText, setIntroText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isIntroDone, setIsIntroDone] = useState(false);

  const introLine = "hiheyhello! I'm Elaine 👋";
  const textArray = [
    "I'm a New Yorker born and raised 🗽.",
    "I love exploring scenic bike routes 🚲 🏙️.",
    "I’m passionate about machine learning 🤖!",
    "Pizza-making is my creative outlet 🍕.",
  ];

  const typingSpeed = 60; // Typing speed in ms
  const deletingSpeed = 40; // Deleting speed in ms
  const pause = 1500; // Pause before deleting/next text

  useEffect(() => {
    if (!isIntroDone) {
      const handleTypingIntro = () => {
        setIntroText((prev) => introLine.substring(0, prev.length + 1));
        if (introText.length + 1 === introLine.length) {
          // Changed to length check
          setTimeout(() => setIsIntroDone(true), pause); // Mark intro as done
        }
      };

      const timer = setTimeout(handleTypingIntro, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [introText, isIntroDone]);

  // Typing logic for the second line (h2)
  useEffect(() => {
    if (isIntroDone) {
      const handleTyping = () => {
        const currentText = textArray[index];
        if (!isDeleting) {
          setDisplayText((prev) => currentText.substring(0, prev.length + 1));
          if (displayText.length + 1 === currentText.length) {
            // Changed to length check
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplayText((prev) => currentText.substring(0, prev.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to the next text
          }
        }
      };

      const timer = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
      return () => clearTimeout(timer);
    }
  }, [displayText, isDeleting, isIntroDone, index]);

  return (
    <div id="home" className="about-container">
      <div className="title-container">
        {/* Static intro line after typing */}
        <h1>
          {introText}
          {!isIntroDone && <span className="blinking-cursor">|</span>}
        </h1>

        {/* Second line starts typing only after intro is done */}
        {isIntroDone && (
          <h2 id="title-caption" className="typing-effect">
            {
              displayText ||
                "\u00A0" /* Non-breaking space when text is empty */
            }
            <span className="blinking-cursor">|</span>
          </h2>
        )}
      </div>

      <p className="max-w-1/2 mt-2 lg:mt-0">
        I am a sophomore at MIT studying CS & AI 🤖 and minoring in Economics
        📈. I'm interested in{" "}
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
        .<div className="mt-2 italic">🌱 I can't wait to work with you!</div>
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
