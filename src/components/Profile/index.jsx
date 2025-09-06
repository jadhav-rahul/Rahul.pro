import mypic5 from "../../assets/mypic5.jpg";

import { MyProfile, Avatar, InfoDiv, Name, HeadLine } from "./style";

const Profile = () => (
  <MyProfile>
    <Avatar src={mypic5} />
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
