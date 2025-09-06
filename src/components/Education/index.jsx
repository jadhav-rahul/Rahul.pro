import DypLogo from "../../assets/DypLogo.png";
import nxtWaveLogo from "../../assets/nxtWaveLogo.webp";

import {
  Section,
  DivFlexColumn,
  SectionHeading,
  SecSubHeading,
  SecDescription,
  EduList,
  EduCard,
  EduImg,
  EduInfo,
} from "./style";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <Section>
    <DivFlexColumn>
      <GraduationCap color="#ffffffff" size={22} strokeWidth={3} />
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
);

export default Education;
