import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/material-icons-outlined"
import img from '../images/grovemade-RvPDe41lYBA-unsplash.jpg'
import Section from "./section"

const ExperienceSection = styled(Section)`
  &.experience-section {
    margin: 10rem 0;
    scroll-margin-top: 10rem;
    display: grid;
    gap: 2rem;
    grid-template-areas:
      "section-title"
      "exp-text";
    align-content: center;
    grid-template-columns: repeat(12, 1fr);  
  }

  .section-title {
    grid-column: 2/13;
  }

  @media (min-width: 768px) {
    &.experience-section {
      scroll-margin-top: 10rem;
    }
  }

  @media (min-width: 1200px) {
    &.experience-section {
      grid-template-areas:
      "section-title exp-aside"
      "exp-text exp-aside";
    }

    .section-title {
      grid-column: 2/8;
    };
  }

  @media (min-width: 1900px) {
    &.experience-section {
      margin: 25rem 0;
      scroll-margin-top: 25rem;
    }

    .section-title {
      grid-column: 3/7;
      font-size: 5rem;
    }
  }
`;

const ExpAside = styled.div`
  grid-area: exp-aside;
  display: grid;
  grid-column: 1/13;

  .heading-wrapper {
    grid-area: 1/1;
    z-index: 10;
    align-self: center;
    background-color: #010E1BC7;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    grid-column: 8/12;
  }

  @media (min-width: 1900px) {
    grid-column: 8/11;
  }
`;

const ExpImg = styled.div`
  grid-area: 1/1;
  aspect-ratio: 4;
  background: linear-gradient(#07332A1F,#000) padding-box,linear-gradient(to right,darkblue,darkcyan) border-box;
  position: relative;
  display: none;

  &:before {
    background: url(${img});
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    display: block;
    opacity: 0.5;
  }

  @media (min-width: 1200px) {
    display: unset;
    aspect-ratio: unset;
    box-shadow: 15px 15px #05203c, -15px -15px #0f2940;
  }
`;

const ExpText = styled.div`
  grid-area: exp-text;
  align-self: center;
  display: grid;
  grid-column: 2/12;

  .exp-container {
    display: grid;
    gap: 1rem;
  }

  #resume_link {
    border: 1px solid #21EDC1;
    padding: 0.75rem;
    text-align: center;
    text-transform: capitalize;
    font-size: 0.9rem;
    background-color: #21EDC180;
    color: #080C24;

    &:hover {
      background-color: transparent;
      color: #E5E5E5;
      transition: linear 1s;  
    }

    .material-icons-outlined {
      vertical-align: sub;
      margin-right: 5px;
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    grid-column: 2/8;
  }

  @media (min-width: 1900px) {
    grid-column: 3/7;
  }
`;

const JobTabs = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  li {
    padding-right: 0;

    button {
      background: transparent;
      color: #FFF;
      border: 0;
      cursor: pointer;
      font-size: 1rem;
      font-family: "Open Sans", sans-serif;

      &:after {
        border-bottom: 2px solid #21EDC1A3;
        padding-top: 0.5rem;
        display: block;
        content: '';
        transform: scaleX(0);
        transition: transform 1s ease-in-out;
        transform-origin: 0% 50%;
      }
    }

    .active:after, button:hover:after {
      transform: scaleX(1);
    }
  }

  @media (min-width: 992px) {
    li button {
      font-size: 1.15rem;
    }
  }

`;

const ExpDetail = styled.div`
  font-size: 0.9rem;
  display: grid;
  gap: 1rem;

  .job-details {
    visibility: hidden;
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    &.active {
      visibility: visible;
    }

    p {
      margin: 0;
    }

    .job-description ul {
      margin-top: 1rem;
      line-height: 2rem;
      list-style-type: circle;
      line-height: 1.75rem;
      padding-left: 0;

      li::marker {
        color: #21EDC1BF;
      }
    }
  }

  strong {
    color: #21EDC1BF;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Experience = () => {
  const [active, setActive] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {section_title: {eq: "Experience"}}}
        sort: {fields: frontmatter___start_date}
      ) {
        nodes {
          frontmatter {
            employer
            end_date
            job_title
            start_date
          }
          html
        }
      }
      allFile(filter: {extension: {eq: "pdf"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const { nodes: experience } = data.allMarkdownRemark;
  const resumeLink = data.allFile.edges[0].node.publicURL;

  return (
    <ExperienceSection id={"experience"} className={"experience-section"}>
      <ExpAside>
        <ExpImg></ExpImg>
      </ExpAside>
      <h1 className="section-title">Experience</h1>
      <ExpText>
        <div className="exp-container">
        <JobTabs>
          {experience.map((job, index) => (
            <li key={job.frontmatter.job_title}><button onClick={() => setActive(index)} className={active === index ? 'active' : undefined}>{job.frontmatter.job_title}</button></li>
          ))}
        </JobTabs>
        <ExpDetail>
        {experience.map((job, index) => (
          <div key={job.frontmatter.job_title} className={`job-details ${active === index ? 'active' : ''}`}>
            <strong>{job.frontmatter.job_title}</strong>
            <p>{job.frontmatter.employer}</p>
            <p>{job.frontmatter.start_date} to {job.frontmatter.end_date}</p>
            <div className={`job-description` } dangerouslySetInnerHTML={{__html: job.html}}></div>
          </div>
        ))}
        </ExpDetail>
          <div id="resume">
            <a id="resume_link" target="_blank" rel="noreferrer" href={resumeLink}><span className="material-icons-outlined">description</span>Download Resume</a>
          </div>
        </div>
      </ExpText>
    </ExperienceSection>
  )
}


export default Experience