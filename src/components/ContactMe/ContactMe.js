import React from 'react';
import {
    ContactSection,
    Title,
    Description,
    ContactList,
    ContactItem,
    ContactForm,
    InputField,
    TextArea,
    SubmitButton,
} from './ContactMeStyles';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <ContactSection id="contact">
            <Title>Contact Me</Title>
            <Description>
                Feel free to reach out via email, phone, or through my professional profiles.
            </Description>
            <ContactList>
                <ContactItem>
                    <FaEnvelope /> <span>youremail@example.com</span>
                </ContactItem>
                <ContactItem>
                    <FaPhoneAlt /> <span>+880-123-456-789</span>
                </ContactItem>
                <ContactItem>
                    <FaLinkedin />
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </ContactItem>
            </ContactList>
            <ContactForm>
                <InputField type="text" placeholder="Your Name" />
                <InputField type="email" placeholder="Your Email" />
                <TextArea placeholder="Your Message" />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </ContactSection>
    );
};

export default ContactMe;
