import { Section, DivFlexColumn, SectionHeading, Description } from "./style";
import { UserRound } from "lucide-react";

const About = () => (
  <Section>
    <DivFlexColumn>
      <UserRound color="#ffffffff" size={22} strokeWidth={3} />
      <SectionHeading>About</SectionHeading>
    </DivFlexColumn>
    <Description>
      I am a passionate Engineering Student in AI & DS (DY Patil Institute of
      Technology) and a Full-Stack Developer (MERN) with hands-on experience in
      building responsive, secure, and user-friendly applications.
    </Description>
  </Section>
);

export default About;
