import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 4rem 2rem;
//   background-color: #1e1e2f;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #aaaaaa;

  @media (max-width: 768px) {
    font-size: 1rem;
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
  font-size: 1rem;
  background: #2a2a3d;
  padding: 0.5rem 1rem;
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
  max-width: 500px;
  margin: 0 auto;
`;

export const InputField = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
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
  font-size: 1rem;
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
  padding: 0.75rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #00d8ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0070f3;
  }
`;
