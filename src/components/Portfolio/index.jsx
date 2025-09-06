import Profile from "../Profile";
import About from "../About";
import Projects from "../Projects";
import Education from "../Education";
import Skills from "../Skills";

import { MainContainer, TagLine } from "./styledComponents";

const TagLineText = () => (
  <TagLine>
    <q>
      Everything has a <span>solution</span> if you are <span>willing</span> to
      find it.
    </q>
  </TagLine>
);

const Portfolio = () => (
  <MainContainer>
    <TagLineText />
    {/* Profile Section */}
    <Profile />

    {/* About Section */}
    <About />

    {/* Project Section */}
    <Projects />

    {/* Education Section */}
    <Education />

    {/* Skills Section */}
    <Skills />
  </MainContainer>
);

export default Portfolio;
