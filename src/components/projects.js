import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Section from "./section";

const ProjectsSection = styled(Section)`
  &.projects-section {
    display: grid;
    scroll-margin-top: 10rem;
    margin: 10rem 0;
    gap: 1rem;
    grid-template-columns: repeat(12, 1fr);
    align-content: center;
  }
  
  #projects-aside {
    display: grid;
    gap: 1rem;
    grid-column: 1/13;
  }

  .section-title {
    grid-column: 2/11;
  }
  
  #projects-aside #project-svg:before {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.3;
  }

  #projects-aside #project-svg {
    display: none;
    aspect-ratio: 4;
    position: relative;
    background: linear-gradient(#07332A1F,#000) padding-box,linear-gradient(to right,darkblue,darkcyan) border-box;
  }

  @media (min-width: 992px) {
    &.projects-section {
      scroll-margin-top: 10rem;
    }
  }

  @media (min-width: 1200px) {
    #projects-aside {
      grid-column: 2/5;
    }

    #projects-aside #project-svg {
      aspect-ratio: 1;
      display: unset;
      box-shadow: 30px 30px #05203c, -30px -30px #0f2940;
    }
  }

  @media (min-width: 1900px) {
    &.projects-section {
      margin: 25rem 0;
      scroll-margin-top: 25rem;
    }
    
    .section-title {
      grid-column: 3/9;
      font-size: 5rem;
    }
  }

`;

const ProjectsContainer = styled.div`
  grid-column: 2/12;

  .project-cards {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .project-cards {
      grid-template-columns: repeat(auto-fill, 20em);
    }
  }

  @media (min-width: 992px) {
    .project-cards {
      grid-template-columns: repeat(auto-fill, 24em);
    }
  }

  @media (min-width: 1200px) {
    grid-column: 2/12;

    .project-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1900px) {
    grid-column: 3/11;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  box-shadow: 0px 16px 24px 2px hsla(0, 0%, 0%, 0.47), 0px 6px 30px 5px hsla(0, 0%, 0%, 0.49), 0px 8px 10px -5px hsla(0, 0%, 0%, 0.47);
  position: relative;

  .project-description {
    padding: 2rem;
  }

  h3 {
    color: #21EDC1BF;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-family: "Montserrat", sans-serif;
  }

  &:after {
    content: '';
    background: #011326;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    opacity: 0.4;
    cursor: pointer;
  }

  &:hover:after {
    content: '';
    background: transparent;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    cursor: pointer;
  }

`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {section_title: {eq: "projects"}}}) {
        nodes {
          frontmatter {
            project
            project_url
            project_image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            project_image_alt
          }
          rawMarkdownBody
        }
      }
    }
  `);

  const { nodes: projects } = data.allMarkdownRemark

  return (
    <ProjectsSection id={"projects"} className={"projects-section"}>
      <h1 className="section-title">Featured Projects</h1>
      <ProjectsContainer>
        <div className="project-cards">
          {projects.map(project => (
            <ProjectItem key={project.frontmatter.project} id={project.frontmatter.project}>
              <a href={project.frontmatter.project_url} rel="noreferrer" target="_blank">
              <GatsbyImage
                alt={project.frontmatter.project_image_alt}
                layout="constrained"
                image={getImage(project.frontmatter.project_image)} />
              <div className="project-description">
                <h3>{project.frontmatter.project}</h3>
                <p>{project.rawMarkdownBody}</p>
              </div>
              </a>
            </ProjectItem>
          ))}
        </div>
      </ProjectsContainer>      
    </ProjectsSection>
  )
}


export default Projects