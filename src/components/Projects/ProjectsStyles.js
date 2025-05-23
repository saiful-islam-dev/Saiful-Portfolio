import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px; /* Set a fixed height for the image container */
  overflow: hidden; /* Hide the overflow to keep the image within bounds */
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  transition: transform 3s ease-in-out;

  &:hover {
    transform: translateY(-50%); /* Adjust the percentage as needed */
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr); /* Single column layout for small screens */
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  max-width: 400px; /* Limiting width for larger screens */
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%; /* Full width for small screens */
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.8rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: #e4e6e7;
  font-size: 1.6rem;
  line-height: 24px;
  text-align: justify;
  margin-top: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  display: inline-block;
  text-align: center;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1rem;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

