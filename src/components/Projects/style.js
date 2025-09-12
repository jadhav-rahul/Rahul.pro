import styled from "styled-components";

export const Section = styled.div`
  margin-top: 38px;
  @media (min-width: 1024px) {
    width: 56vw;
  }
`;
export const DivFlexColumn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;
export const SectionHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 6px;
`;
export const ProjectList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  gap: 20px;
  margin: 0px;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: space-between;
  }
`;
export const ProjectLI = styled.li`
  display: flex;
  padding: 0 0 10px 6px;
  align-items: flex-start;

  @media (min-width: 1024px) {
    width: 48%;
`;
export const ProjectImg = styled.img`
  width: 46px;
  height: 46px;
  object-fit: cover;
  background-color: #ffffff;
  border-radius: 8px;
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
  color: #b0b0b0;
  margin: 0px;
`;
