import styled from "styled-components";

export const MainContainer = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: rgba(0, 0, 0, 1);
`;

export const TagLine = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  color: #ffffff;
  font-family: "Roboto";
  span {
    color: #ff8800ff;
  }
  margin-bottom: 40px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 21, 108, 0.4) 7%,
    rgba(75, 21, 108, 0.1) 50%,
    rgba(0, 0, 0, 0) 80%
  );
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-bottom: 20px;
`;

export const InfoDiv = styled.div`
  color: #ffffff;
`;

export const Name = styled.h1`
  font-size: 19px;
  margin: 0;
`;

export const HeadLine = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
`;

export const Section = styled.div`
  margin-top: 22px;
`;
export const DivFlexColumn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
export const SectionHeading = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 8px;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: #b0b0b0;
  margin: 0;
`;
export const ProjectList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
`;
export const ProjectLI = styled.li`
  display: flex;
  align-items: start;
`;
export const ProjectImg = styled.img`
  width: 42px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 4px;
`;
export const ProjectInfoDiv = styled.div`
  padding-left: 12px;
`;
export const SecSubHeading = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;
export const SecDescription = styled.p`
  font-size: 0.75rem;
  color: #716c89;
  margin: 0px;
`;

export const EduList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  gap: 20px;
  margin: 0px;
`;
export const EduCard = styled.li`
  display: flex;
  padding: 0 0 10px 0;
  align-items: start;
`;
export const EduImg = styled.img`
  width: 42px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 4px;
`;
export const EduInfo = styled.div`
  padding-left: 10px;
`;
export const SkillsGrid = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 6px;
`;

export const SkillS = styled.p`
  font-size: 0.75rem;
  color: #716c89;
  margin: 0px;
`;
