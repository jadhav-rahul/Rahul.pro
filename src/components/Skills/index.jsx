import {
  SkillsSection,
  SkillsDivFlexColumn,
  SkillsSectionHeading,
  SkillsGrid,
  SkillsHeading,
  SkillS,
  SkillsLI,
} from "./style";

import { Target } from "lucide-react";

const Skills = () => (
  <SkillsSection>
    <SkillsDivFlexColumn>
      <Target color="#ffffffff" size={22} strokeWidth={3} />
      <SkillsSectionHeading>Skills</SkillsSectionHeading>
    </SkillsDivFlexColumn>
    <SkillsLI>
      <SkillsGrid>
        <SkillsHeading>Programming:</SkillsHeading>
        <SkillS>
          Python <b>·</b> C++ <b>·</b> JavaScript <b>·</b> (DSA)
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>Front-End:</SkillsHeading>
        <SkillS>
          React.js <b>·</b> HTML <b>·</b> CSS <b>·</b> Responsive Design
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>Back-End:</SkillsHeading>
        <SkillS>
          Node.js <b>·</b> Express.js <b>·</b> REST APIs
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>Databases:</SkillsHeading>
        <SkillS>
          SQL <b>·</b> MongoDB
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>Data Science:</SkillsHeading>
        <SkillS>
          NumPy <b>·</b> Pandas <b>·</b> Matplotlib <b>·</b> Seaborn
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>Tools:</SkillsHeading>
        <SkillS>
          Git <b>·</b> GitHub <b>·</b> VS Code <b>·</b> Chrome DevTools
        </SkillS>
      </SkillsGrid>

      <SkillsGrid>
        <SkillsHeading>SoftSkills:</SkillsHeading>
        <SkillS>
          Logical Thinking <b>·</b> Communication <b>·</b> Team Work
        </SkillS>
      </SkillsGrid>
    </SkillsLI>
  </SkillsSection>
);

export default Skills;
