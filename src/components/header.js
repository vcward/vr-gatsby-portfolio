import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "@fontsource/material-icons-outlined"

const StyledHeader = styled.header`
  z-index: 100;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0.5rem 0rem;
  background-color: #080C24;
  color: #FFF;
  box-shadow: 0 2px 4px 1px #00000070;
  background: #011326;
`;

const StyledNavMenu = styled.div`
  ul {
    position: absolute;
    margin-top: 0;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    border-top: 1px solid black;
    padding: 0;
    display: none;
    background: #011326;
  }

  &.expanded ul {
    display: block;
  }

  ul li {
    list-style-type: none;
    margin: 0 1rem;
  }

  ul li a {
    color: #FFFFFF;
    width: 100%;
    padding: 1.5rem 0;
    text-decoration: none;
    display: block;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;

    &:hover {
      border-bottom: 1px solid #21EDC1;
    }
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
      border: 0;
      position: unset;
      flex-wrap: wrap;
      justify-content: end;
      align-content: center;
      height: unset;
      background: transparent;

      li a {
        display: unset;
        padding: 0;
      }
    }
  }
`;

const MobileButton = styled.button`
  display: block;
  border: 0;
  color: #21EDC1;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #011326;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [expandedNav, setExpandedNav] = useState(false);

  return (
    <StyledHeader>
      <nav>
        <MobileButton onClick={() => setExpandedNav(!expandedNav)}>
          <span className="material-icons-outlined">menu</span>
        </MobileButton>
        <StyledNavMenu className={expandedNav ? 'expanded' : undefined} id="nav-menu">
          <ul>
            <li><Link onClick={() => setExpandedNav(false)} to="/" aria-label="about">About</Link></li>
            <li><Link onClick={() => setExpandedNav(false)} to="#experience" aria-label="experience">Experience</Link></li>
            <li><Link onClick={() => setExpandedNav(false)} to="#projects" aria-label="feature projects">Projects</Link></li>
            <li><Link onClick={() => setExpandedNav(false)} to="#contact" aria-label="contact">Contact</Link></li>
          </ul>
        </StyledNavMenu>
      </nav>
    </StyledHeader>
  )
}

export default Header