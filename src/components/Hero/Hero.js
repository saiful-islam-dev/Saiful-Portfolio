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
          Driven by passion and dedication, I am a web developer from Bangladesh with a strong focus on front-end and full-stack development. With experience in technologies like HTML, CSS, JavaScript, React, and Node.js, I build responsive and impactful applications. Constantly learning and evolving, I aim to deliver solutions that meet modern industry standards.
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
