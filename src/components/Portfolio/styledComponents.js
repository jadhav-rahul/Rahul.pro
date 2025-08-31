import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: rgba(0, 0, 0, 1);
`;


export const TagLine = styled.div`
  
`;


export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  padding-bottom: 30px;
  background: radial-gradient(ellipse at center, 
   rgba(75, 21, 108, 0.4) 7%,
   rgba(75, 21, 108, 0.1) 50%,
    rgba(0, 0, 0, 0) 80%
  );
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ffffff;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

export const Name = styled.h1`
  font-size: 22px;
  margin: 0;
`;

export const HeadLine = styled.p`
  font-size: 16px;
  margin: 5px 0 0 0;
`;
export const Quote = styled.blockquote`
  position: relative;
  padding: 40px 60px; 
  line-height: 1.6;
  font-size: 1.2rem;
  font-weight: 200;
  color: #ffffff;
  font-family: "Comic Sans MS", cursive, sans-serif;

  &::before {
    content: "“";
    color: #ffd600;  
    font-size: 2rem;
    position: absolute;
    top: 20px; 
    left: 28px; 
    font-family: serif;
  }

  &::after {
    content: "”";
    color: #ffd600;
    font-size: 2rem;
    position: absolute;
    top: 20px; 
    right: 36px; 
    font-family: serif;
  }

  span {
    color: #ff8800ff;
  }
`;
