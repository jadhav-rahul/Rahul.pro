import mypic5 from "../../assets/mypic5.jpg";

import {
  MyProfile,
  ImgContainer,
  Avatar,
  InfoDiv,
  Name,
  HeadLine,
} from "./style";

const Profile = () => (
  <MyProfile>
    <ImgContainer>
      <Avatar src={mypic5} />
    </ImgContainer>
    <InfoDiv>
      <Name>Rahul U. Jadhav</Name>
      <HeadLine>
        Engineering Student (AI & DS) | Full-Stack Developer (MERN) | React.js |
        SQL | Data Science Enthusiast
      </HeadLine>
    </InfoDiv>
  </MyProfile>
);

export default Profile;
