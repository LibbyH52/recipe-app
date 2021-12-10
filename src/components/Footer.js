import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = props => {
  return (
    <footer className="footer">
      <p className="credits-text">
        &copy; Libby Henry &amp; 
        <a href="https://spoonacular.com/food-api" className="credits-site"> 
          <span className="recipe-source">Spoonacular</span>
        </a>
      </p>
      <p className="footer-paragraph">
        <span className="footer-icon"><i className={props.gitHub}/></span>
        <span className="footer-icon"><i className={props.linkedIn}/></span>
        <span className="footer-icon"><i className={props.codePen}/></span>
      </p>
    </footer>
  )
}
Footer.defaultProps = {
  gitHub: 'fab fa-github',
  linkedIn: 'fab fa-linkedin-in',
  codePen: 'fab fa-codepen'
}

Footer.propTypes = {
  gitHub: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  codePen: PropTypes.string.isRequired
}
export default Footer;