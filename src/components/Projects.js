import React from "react";
import "./Projects.css";
import DBTMountSinai from "../assets/DBT_mountsinai.png";
import Link from "../assets/LINK.png";
import { FaRegImage } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 id="projects">projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <div className="img-container  max-w-1/5 relative">
            <iframe
              className="absolute top-0 left-0 w-full"
              src="https://drive.google.com/file/d/1qPKe5Ok0HKYoR-RVM7ctCEQR-lKeflHB/preview"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="project-item-text mt-4">
            <h3>Amika</h3>
            <ul className="">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>OpenAI Assistants API</li>
            </ul>
            <p>
              Your personal AI assistant to help you keep track of your
              relationships and stay in touch with love ones
            </p>
          </div>
        </div>

        <div className="project-item">
          <div className="img-container">
            <a href="https://github.com/elainejiangg/LINK-Federal-State-Benefits-RAG-Chatbot">
              <img className="w" src={Link}></img>
            </a>
          </div>
          <div className="project-item-text">
            <h3>Federal & State Benefits Chatbot</h3>
            <ul className="pb-2">
              <li>React</li>
              <li>Node.js</li>
              <li>OpenAI APIs</li>
            </ul>
            <p>
              An AI-powered expert on federal and state (MA) benefits, enabling
              those in need to access information about necessary resources
            </p>
          </div>
        </div>

        <div className="project-item">
          <div className="img-container">
            <a href="https://github.com/elainejiangg/DBT_Breast_Cancer_Deep_Learning">
              <img className="w" src={DBTMountSinai}></img>
            </a>
          </div>
          <div className="project-item-text">
            <h3>Breast Cancer Lesion Object Detector</h3>
            <ul className="pb-2">
              <li>Python</li>
              <li>Pytorch</li>
              <li>Detectron2</li>
            </ul>
            <p>
              Trained Faster R-CNN for tomosynthesis (3D Mammograms). Work done
              under mentorship of the Dr. Li Shen Lab at Neuroscience Department
              @ Mount Sinai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
