import React from 'react';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Typewriter } from 'react-simple-typewriter';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Saiful Islam
          <br />
          <div style={{ fontSize: '55px' }}>
            <Typewriter
              words={['Web Developer', 'Frontend Developer', 'Full Stack Developer', 'MERN Developer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </SectionTitle>
        
        <SectionText>
          I'm a passionate and dedicated web developer from Bangladesh. With expertise in frontend and full-stack development, I enjoy building dynamic and responsive web applications. My skill set includes HTML, CSS, JavaScript, React, Node.js, and more. I am committed to continuous learning and staying updated with the latest industry trends.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>View My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
