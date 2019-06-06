import React, { Component } from "react";
import MeImage from "../Images/me.jpg";
export class Education extends Component {
  render() {
    return (
      <div>
        <h1 classname='Profile'>Jizhou Zhang education</h1>
        <p classname='bio'>
          <li>Rochester Adams High School 2012 - 2016</li>
          <li>Oakland University 2016 - present</li>
        </p>
        <form action='./Education.js'>
          <button type='submit'>Education</button>
        </form>
        <button id='courses'>Courses</button>
        <button id='skills'>Skills</button>
      </div>
    );
  }
}
export default Education;
