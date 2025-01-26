import React from 'react';
import { projects } from '../../constants/constants';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  ImgContainer,
  Img
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <BlogCard key={i}>
          <ImgContainer>
            <Img src={p.image} />
          </ImgContainer>
          <HeaderThree title={p.title}>{p.title}</HeaderThree>
          <Hr />
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            <TitleContent>Tech Stack</TitleContent>
            <Hr />
            <TagList>
              {p.tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
            <ExternalLinks href={p.source}>Source Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
