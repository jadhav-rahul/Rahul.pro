import mypic5 from "../../assets/mypic5.jpg";
import DypLogo from "../../assets/DypLogo.png";
import nxtWaveLogo from "../../assets/nxtWaveLogo.webp";

import {
  MainContainer,
  TagLine,
  Profile,
  Avatar,
  InfoDiv,
  Name,
  HeadLine,
  Section,
  DivFlexColumn,
  SectionHeading,
  Description,
  ProjectList,
  ProjectLI,
  ProjectImg,
  ProjectInfoDiv,
  SecSubHeading,
  SecDescription,
  EduList,
  EduCard,
  EduImg,
  EduInfo,
  SkillsGrid,
  SkillS,
} from "./styledComponents";
import { UserRound, CodeXml, Target, GraduationCap } from "lucide-react";

const Portfolio = () => (
  <MainContainer>
    <TagLine>
      <q>
        Everything has a <span>solution</span> if you are <span>willing</span>{" "}
        to find it.
      </q>
    </TagLine>
    <Profile>
      <Avatar src={mypic5} />
      <InfoDiv>
        <Name>Rahul U. Jadhav</Name>
        <HeadLine>
          Engineering Student (AI & DS) | Full-Stack Developer (MERN) | React.js
          | SQL | Data Science Enthusiast
        </HeadLine>
      </InfoDiv>
    </Profile>

    {/* About Section */}

    <Section>
      <DivFlexColumn>
        <UserRound color="#ffffffff" size={20} />
        <SectionHeading>About</SectionHeading>
      </DivFlexColumn>
      <Description>
        I am a passionate Engineering Student in AI & DS (DY Patil Institute of
        Technology) and a Full-Stack Developer (MERN) with hands-on experience
        in building responsive, secure, and user-friendly applications.
      </Description>
    </Section>

    {/* Project Section */}

    <Section>
      <DivFlexColumn>
        <CodeXml color="#ffffffff" size={20} />
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
              Developer (MERN) with hands-on experience in building
              user-friendly applications.
            </SecDescription>
          </ProjectInfoDiv>
        </ProjectLI>
      </ProjectList>
    </Section>

    {/* Education Section */}

    <Section>
      <DivFlexColumn>
        <GraduationCap color="#ffffffff" size={20} />
        <SectionHeading>Education</SectionHeading>
      </DivFlexColumn>
      <EduList>
        <EduCard>
          <EduImg src={nxtWaveLogo} alt="logo" />
          <EduInfo>
            <SecSubHeading>NxtWave CCBP 4.0 Academy</SecSubHeading>
            <SecDescription>
              Certified in Full-Stack Development, Databases, Data Structures &
              Algorithms, and Data Science
            </SecDescription>
          </EduInfo>
        </EduCard>

        <EduCard>
          <EduImg src={DypLogo} alt="logo" />
          <EduInfo>
            <SecSubHeading>
              Dr. D. Y. Patil Institute of Technology, Pimpri
            </SecSubHeading>
            <SecDescription>
              B.E. Artificial Intelligence & Data Science
            </SecDescription>
          </EduInfo>
        </EduCard>
      </EduList>
    </Section>

    {/* Skills Section */}

    <Section>
      <DivFlexColumn>
        <Target color="#ffffffff" size={20} />
        <SectionHeading>Skills</SectionHeading>
      </DivFlexColumn>
      <SkillsGrid>
        <SecSubHeading>Programming:</SecSubHeading>
        <SkillS>
          Python <b>·</b> C++ <b>·</b> JavaScript <b>·</b> (DSA)
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SecSubHeading>Front-End:</SecSubHeading>
        <SkillS>
          React.js <b>·</b> HTML <b>·</b> CSS <b>·</b> Responsive Design
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SecSubHeading>Back-End:</SecSubHeading>
        <SkillS>
          Node.js <b>·</b> Express.js <b>·</b> REST APIs
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SecSubHeading>Databases:</SecSubHeading>
        <SkillS>
          SQL <b>·</b> MongoDB
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SecSubHeading>Tools:</SecSubHeading>
        <SkillS>
          Git <b>·</b> GitHub <b>·</b> VS Code <b>·</b> Chrome DevTools
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SecSubHeading>SoftSkills:</SecSubHeading>
        <SkillS>
          Logical Thinking <b>·</b> Communication <b>·</b> Team Work
        </SkillS>
      </SkillsGrid>
    </Section>
  </MainContainer>
);

export default Portfolio;
