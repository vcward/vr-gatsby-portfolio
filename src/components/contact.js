import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "@fontsource/material-icons-outlined"

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 15rem;
  align-content: center;
  gap: 1rem;

  h2 {
    color: #21EDC1A3;
    grid-column: 1/13;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  p {
    grid-column: 1/13;
    text-align: center;
  }

  a {
    text-transform: capitalize;
    color: #21EDC1A3;;

    &:hover {
      background-color: transparent;
      color: #E5E5E5;
      transition: linear 1s;  
      text-decoration: underline;
    }

    .material-icons-outlined {
      vertical-align: middle;
      font-size: 16px;
    }
  }
`

const Contact = () => (
  <StyledContact id="contact">
    <h2>Want to get in touch?</h2>
    <p>Send me an <a href="mailto:vward@hawaii.edu"><span className="material-icons-outlined">mail_outline</span> email</a>.</p> 
    <p>Or find me on <a href="https://github.com/vcward" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a> or <a href="https://www.linkedin.com/in/victoria-rhinebolt/" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>.</p>
  </StyledContact>
)

export default Contact