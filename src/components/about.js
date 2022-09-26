import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons"
import "@fontsource/material-icons-outlined"
import Section from "./section"

const AboutSection = styled(Section)`
  &.about-section {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(12, 1fr);
    margin: 5rem 0 10rem 0;
  }

  .section-title {
    grid-column: 2/13;
  }

  grid-template-areas:
    "section-title"
    "portrait"
    "about-text"
    "skills";

  .gatsby-image-wrapper {
    grid-area: portrait;
    grid-column: 2/10;
    box-shadow: 15px 15px #05203c, -15px -15px #0f2940;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#07332A1F, #000), linear-gradient(to right, darkblue, darkcyan);
      position: absolute;
    }

    img {
      opacity: 0.5 !important;
    }
  }

  @media (min-width: 768px) {
    &.about-section {
      align-content: center;
      grid-template-areas:
        "section-title . ."
        "portrait about-text about-text"
        "skills skills skills";
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 2rem;
    }

    .section-title {
      grid-column: 2/4;
    }

    .gatsby-image-wrapper {
      max-width: unset;
      grid-column: 2/5;
    }
  }

  @media (min-width: 992px) {
    &.about-section {
      align-items: center;
      grid-row-gap: 2rem;
      grid-column-gap: 4rem;  
    }

    .gatsby-image-wrapper {
      box-shadow: 15px 15px #05203c, -15px -15px #0f2940;
    }
  }

  @media (min-width: 1900px) {
    &.about-section {
      margin: 10rem 0 25rem 0;
    }

    .section-title {
      grid-column: 3/5;
      font-size: 5rem;
    }
    
    .gatsby-image-wrapper {
      grid-column: 3/5;
    }
  }
  
`;

const AboutDetails = styled.div`
  grid-area: about-text;
  grid-column: 2/12;

  .title {
    text-transform: uppercase;
    margin: 0;
    line-height: normal;
  }
  
  #buttons {
    margin-top: 2rem;

    hr {
      color: #21EDC1A3;
      height: 1px;  
      display: none;
    }

    #icons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      a {
        justify-self: center;

        &:hover {
          color: #21EDC1A3;
        }
      }

      .svg-inline--fa {
        height: 1.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    grid-column: 5/12;
  }

  @media (min-width: 1200px) {
    #buttons {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;

      hr {
        display: unset;
      }
    }
  }

  @media (min-width: 1900px) {
    font-size: 1.25rem;
    line-height: normal;
    grid-column: 5/11;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-area: skills;
  grid-column: 1/13;

  @media (min-width: 768px) {
    grid-column: 2/12;
  }

  @media (min-width: 992px) {
    grid-column: 2/12;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1900px) {
    grid-column: 3/11;
  }
`;

const SkillBox = styled.div`
  background: #011326;
  padding: 3rem;
  line-height: 2rem;
  
  .material-icons-outlined {
    font-size: 4rem;
    color: #21EDC1A3;
  }

  p strong {
    color: #21EDC1A3;
  }
`;


const About = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {section_title: {eq: "About"}}) {
        html
        frontmatter {
          greeting
          title
        }
      }
    }
  `);
  const { frontmatter, html } = data.markdownRemark;
  return (
    <AboutSection id={"about"} className={"about-section"}>
      <StaticImage style={{display: "inline-block"}} className="portrait" alt="Victoria Rhinebolt" src="../images/vr-photo.png" />
      <AboutDetails>
          <p>{frontmatter.greeting}</p>
          <h2 className="title">
            {frontmatter.title}
          </h2>
          <div className="description"  dangerouslySetInnerHTML={{__html: html}}></div>
          <div id="buttons">
            <hr />
            <div id="icons">
              <a href="https://github.com/vcward"  rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Link to GitHub profile" icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/victoria-rhinebolt/"  rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Link to LinkedIn profile" icon={faLinkedin} /></a>
              <a href="https://codepen.io/vcward" rel="noreferrer" target="_blank"><FontAwesomeIcon aria-label="Link to CodePen profile" icon={faCodepen} /></a>
            </div>
          </div>
      </AboutDetails>
      <h1 className="section-title">About</h1>
      <SkillsContainer>
        <SkillBox>
          <span className="material-icons-outlined">code</span>
          <p>I primarily work with: <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong>, <strong>Angular</strong>, and <strong>SCSS</strong> while sometimes diving into <strong>MySQL</strong>, <strong>Ruby on Rails</strong>, and <strong>Go</strong>.</p>
        </SkillBox>
        <SkillBox>
          <span className="material-icons-outlined">design_services</span>
          <p>I also have experience working with the following design software: <strong>InDesign</strong>, <strong>Illustrator</strong>, and <strong>Photoshop</strong>.</p>
        </SkillBox>
        <SkillBox>
          <span className="material-icons-outlined">insert_chart</span>
          <p>I create static and dynamic data visualizations using: <strong>R</strong>, <strong>Highcharts</strong>, and <strong>D3</strong>.</p>
        </SkillBox>
      </SkillsContainer>
    </AboutSection>
  )
}

export default About