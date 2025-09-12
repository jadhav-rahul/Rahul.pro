import styled from "styled-components";

export const CertSection = styled.div`
  margin-top: 38px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 56vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CertDivFlexColumn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const CertSectionHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 6px;
`;

export const CertList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin: 0;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* two per row */
    gap: 20px 32px;
  }
`;

export const CertLI = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 0px 0px 10px 6px;
`;

export const CertImg = styled.img`
  width: 46px;
  height: 46px;
  object-fit: contain;
  background-color: #fff;
  border-radius: 8px;
`;

export const CertInfoDiv = styled.div`
  padding-left: 12px;
`;

export const CertTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;

export const CertIssuer = styled.p`
  font-size: 0.75rem;
  color: #b0b0b0;
  margin: 0px;
`;
