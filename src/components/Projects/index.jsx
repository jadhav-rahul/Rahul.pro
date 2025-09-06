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
          <SecSubHeading>Web Shope</SecSubHeading>
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
