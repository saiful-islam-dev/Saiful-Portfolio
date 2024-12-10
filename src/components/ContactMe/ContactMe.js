import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
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
                <ContactItem>
                    <FaGithub />
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </ContactItem>
            </ContactList>

            {/* Contact Form */}
            <ContactForm>
                <InputField type="text" placeholder="Your Name" required />
                <InputField type="email" placeholder="Your Email" required />
                <TextArea placeholder="Your Message" rows="5" required />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </ContactSection>
    );
};

export default ContactMe;
