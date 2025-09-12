import {
  CertSection,
  CertDivFlexColumn,
  CertSectionHeading,
  CertList,
  CertLI,
  CertImg,
  CertInfoDiv,
  CertTitle,
  CertIssuer,
} from "./style";
import { Award } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";

// Example logos
import nxtWaveLogo from "../../assets/nxtWaveLogo.webp";

const Certifications = () => (
  <CertSection>
    <CertDivFlexColumn>
      <Award color="#ffffffff" size={22} strokeWidth={3} />
      <CertSectionHeading>Certifications</CertSectionHeading>
    </CertDivFlexColumn>

    <CertList>
      <CertLI>
        <CertImg src={nxtWaveLogo} alt="AWS" />
        <CertInfoDiv>
          <CertTitle>
            AWS Cloud Practitioner
            <a
              href="https://aws.amazon.com/verification-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                marginLeft: "6px",
              }}
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </CertTitle>
          <CertIssuer>Amazon Web Services · 2024</CertIssuer>
        </CertInfoDiv>
      </CertLI>

      <CertLI>
        <CertImg src={nxtWaveLogo} alt="Nxtwave" />
        <CertInfoDiv>
          <CertTitle>Full-Stack Development Program</CertTitle>
          <CertIssuer>Nxtwave Academy · 2025</CertIssuer>
        </CertInfoDiv>
      </CertLI>
    </CertList>
  </CertSection>
);

export default Certifications;
