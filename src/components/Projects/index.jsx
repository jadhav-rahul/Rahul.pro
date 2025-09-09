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
        <ProjectImg
          src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-2636.jpg?w=360"
          alt="Img"
        />
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
        <ProjectImg
          src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-2636.jpg?w=360"
          alt="Img"
        />
        <ProjectInfoDiv>
          <SecSubHeading>
            Cricket Analysis Dashboard
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
      <ProjectLI>
        <ProjectImg
          src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-2636.jpg?w=360"
          alt="Img"
        />
        <ProjectInfoDiv>
          <SecSubHeading>
            Advanced Task Organizer
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
      <ProjectLI>
        <ProjectImg
          src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-2636.jpg?w=360"
          alt="Img"
        />
        <ProjectInfoDiv>
          <SecSubHeading>
            Rock Papper Scissor Game
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
            A responsive web game built with ReactJS and Styled Components,
            featuring a clean UI, smooth animations, and score tracking to
            challenge the computer, see if you can win!
          </SecDescription>
        </ProjectInfoDiv>
      </ProjectLI>
      <ProjectLI>
        <ProjectImg
          src="https://img.freepik.com/free-vector/coding-website-development-technical-support-programming-engineering-coder-web-developer-computer-software-programmer-male-flat-character_335657-2636.jpg?w=360"
          alt="Img"
        />
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
