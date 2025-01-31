import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 4rem 2rem;
//   background-color: #1e1e2f;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '67px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const Description = styled.p`
  max-width: 800px;
  font-size: 22px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  background: #2a2a3d;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;

  svg {
    color: #00d8ff;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #00d8ff;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

export const InputField = styled.input`
   width: 100%;
  max-width: 600px;
  padding: 1.5rem;
  font-size: 2rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2a2a3d;
  color: #ffffff;

  &:focus {
    border-color: #00d8ff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1.5rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2a2a3d;
  color: #ffffff;

  &:focus {
    border-color: #00d8ff;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 2rem;
  font-size: 2rem;
  color: #ffffff;
  background-color: #00d8ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0070f3;
  }
`;
