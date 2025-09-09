import Profile from "../Profile";
import About from "../About";
import Projects from "../Projects";
import Education from "../Education";
import Skills from "../Skills";

import { MainContainer, TagLine, GlobalStyle } from "./styledComponents";

const TagLineText = () => (
  <TagLine>
    <q>
      Everything has a <span>solution</span> if you are <span>willing</span> to
      find it.
    </q>
  </TagLine>
);

const Portfolio = () => (
  <>
    <GlobalStyle />
    <MainContainer>
      <TagLineText />
      {/* Profile Section */}
      <Profile />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Project Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </MainContainer>
  </>
);

export default Portfolio;
