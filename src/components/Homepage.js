import React, { Component } from "react";
import styled from "@emotion/styled";
import MeImage from "../Images/me.jpg";
import BackgroundPhoto from "../Images/ou.jpg";
const BackgroundPic = styled.div`
  background-image: url(${BackgroundPhoto});
  height: 1000px;
  background-position: center; center;
  background-repeat: repeat;
  opacity: 0.5;
`;
const PortTitle = styled.h1`
  background-color: purple;
  text-align: center;
  text-size-adjust: 30 px;
  text-decoration-color: blue;
`;
const ProfileImage = styled.div`
  background-image: url(${MeImage});
  height: 500px;
  background-position: center;
  backgroun-origin: content-box;
  backgroun-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
`;
const Bio = styled.p`
  font-size: 50px;
  text-align: center;
  color: blue;
`;
export class Homepage extends Component {
  render() {
    return (
      <div>
        <BackgroundPic>
          <PortTitle>Jizhou Zhang</PortTitle>
          <ProfileImage>
            <Bio>I design web softwares and am a team player</Bio>
          </ProfileImage>
          <form action='./Education'>
            <button type='submit'>Education</button>
          </form>
          <button id='courses'>Courses</button>
          <button id='skills'>Skills</button>
        </BackgroundPic>
      </div>
    );
  }
}
export default Homepage;
