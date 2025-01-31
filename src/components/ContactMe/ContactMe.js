import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });



    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const emailData = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };
        
        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            emailData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setSuccessMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                setErrorMessage('Failed to send message. Please try again later.');
            });
    };

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
            <ContactForm onSubmit={sendEmail}>
                <InputField type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <InputField type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </ContactSection>
    );
};

export default ContactMe;
