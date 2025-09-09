import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px); /* Moves up slightly */
  }
`;

export const MyProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(
    ellipse at center,
    rgba(75, 21, 108, 0.4) 7%,
    rgba(75, 21, 108, 0.1) 50%,
    rgba(0, 0, 0, 0) 80%
  );
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-bottom: 20px;
  animation: ${bounce} 3s ease-in-out infinite;
`;

export const InfoDiv = styled.div`
  color: #ffffff;
`;

export const Name = styled.h1`
  font-size: 19px;
  margin: 0;
`;

export const HeadLine = styled.p`
  font-size: 0.9rem;
  margin: 5px 0 0 0;
  color: #b0b0b0;
`;
