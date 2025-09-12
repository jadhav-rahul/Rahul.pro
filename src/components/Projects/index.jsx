import shopProImg from "../../assets/shopProImg.jpg";
import pswImg from "../../assets/pswImg.jpg";
import cricImg from "../../assets/cricImg.png";
import taskManagerImg from "../../assets/taskManagerImg.png";
import RPSImg from "../../assets/RPSImg.jpeg";
import NotesImg from "../../assets/NotesImg.jpg";

import {
  Section,
  DivFlexColumn,
  SectionHeading,
  ProjectList,
  ProjectLI,
  ProjectImg,
  ProjectInfoDiv,
  SecSubHeading,
  SecDescription,
} from "./style";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CodeXml } from "lucide-react";

const Projects = () => (
  <Section>
    <DivFlexColumn>
      <CodeXml color="#ffffffff" size={22} strokeWidth={3} />
      <SectionHeading>Projects</SectionHeading>
    </DivFlexColumn>
    <ProjectList>
      <ProjectLI>
        <ProjectImg src={shopProImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Nxt Trendz
            <a
              href="https://nxtshopwebclone.ccbp.tech/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            I am a passionate Engineering Student in AI & DS and a Full-Stack
            Developer (MERN) with hands-on experience in building user-friendly
            applications.
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg src={pswImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Password Manager
            <a
              href="https://pswmanager11.ccbp.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            A responsive React app to securely store, search, and manage website
            credentials with password masking, easy navigation, and a
            user-friendly interface.
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg src={cricImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Cricket Analysis Dashboard
            <a
              href="https://ipl11dashboard.ccbp.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            A responsive Dashboard showing IPL teams, latest matches, and stats
            with dynamic routing, API integration, and smooth user experience.
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg src={taskManagerImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Advanced Task Organizer
            <a
              href="https://taskmanager11.ccbp.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            I am a passionate Engineering Student in AI & DS and a Full-Stack
            Developer (MERN) with hands-on experience in building user-friendly
            applications.
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg src={RPSImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Rock Papper Scissor Game
            <a
              href="https://winifyoucan11.ccbp.tech"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            A responsive web game built with ReactJS and Styled Components,
            featuring a clean UI, smooth animations, and score tracking to
            challenge the computer, see if you can win!
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg src={NotesImg} alt="Img" />
        <ProjectInfoDiv>
          <SecSubHeading>
            Quick Notes
            <a
              href="https://yourprojectlink.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                position: "relative",
                top: "1px",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </SecSubHeading>
          <SecDescription>
            I am a passionate Engineering Student in AI & DS and a Full-Stack
            Developer (MERN) with hands-on experience in building user-friendly
            applications.
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
    </ProjectList>
  </Section>
);

export default Projects;
