import React from "react";
import './AboutUs.css'

function AboutUs() {
  return (
    <div>
      <h1>About Project</h1>

      <img className="illustration" src="./updated-colour.png" alt="Illustration"/>

      <p className="aboutInfo">
        This project started as an idea as a group with the Code First Girls. As
        a group we decided to do a project based on any social cause. We created
        a wireframe using Miro and a moodboard using Figma, to really understand
        our target audience as well as knowing how the front-end will look like.
       <br /> <a href="https://miro.com/app/board/o9J_l_hFeN8=/">Miro Link</a><br />
        Initially, as a group we started creating the website with just HTML/CSS
        and Javascript, this changed. Using{" "}
        <a href="https://www.givefood.org.uk/api">Give Food API</a> to provide
        all the information needed for a user to get their information.
      </p>
    </div>
  );
}

export default AboutUs;