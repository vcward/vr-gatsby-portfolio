import React from "react";
import styled from "styled-components"

const StyledSection = styled.section`
  &.fade-in {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1.2s ease-out;
    will-change: opacity, visibility;
  }

  &.fade-in.section-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const Section = ({id, className, children}) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <StyledSection id={id} className={`${className} fade-in ${isVisible ? 'section-visible' : ''}`} ref={domRef}>{children}</StyledSection>
  )
}

export default Section