import React from "react";
import "./AboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/_.__swagat__._/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dqn5lkgj7/image/upload/v1688964877/IMG20211230173213_053900_4_tnot1b.jpg"
              alt="Founder"
            />
            <Typography>Swagat Satprem Jena</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Swagat Satprem Jena's Apna Bazzar: Quality products, secure
              shopping, and exceptional customer service for an enjoyable online
              shopping experience.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Reach Us</Typography>
            <a href="https://www.linkedin.com/in/swagat-jena/" target="blank">
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>

            <a href="https://github.com/Swagat-Satprem-Jena" target="blank">
              <GitHubIcon className="GitHubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
