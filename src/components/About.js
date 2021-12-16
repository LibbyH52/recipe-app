import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">Welcome to The Impatient Chef </h2>
      <p className="about-paragraph">
          This wesbite is for anyone who loves to experiment with new recipes but doesn't have 
          the time (or patience) to spend hours preparing and cooking meals. Each recipe takes 
          a maximum of sixty minutes, and there is a wide variety to choose from. 
          <span className="tag-line">Enjoy exploring and Happy Cooking.</span>
      </p>
</div>
  )
}
export default About;
