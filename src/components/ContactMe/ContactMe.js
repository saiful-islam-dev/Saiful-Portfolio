import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
    console.log(formData);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'your_service_id', // Replace with your EmailJS Service ID
                'your_template_id', // Replace with your EmailJS Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'your_public_key' // Replace with your EmailJS Public Key
            )
            .then(
                () => {
                    setSuccessMessage('Message sent successfully!');
                    setErrorMessage('');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setErrorMessage('Failed to send message. Please try again.');
                    setSuccessMessage('');
                }
            );
    };

    return (
        <ContactSection id="contact">
            <Title>Contact Me</Title>
            <Description>
                Feel free to reach out via email, phone, or through my professional profiles.
            </Description>
            <ContactList>
                <ContactItem>
                    <FaEnvelope /> <span>saifulislamx264@gmail.com</span>
                </ContactItem>
                <ContactItem>
                    <FaPhoneAlt /> <span>+880-1902486366</span>
                </ContactItem>
                <ContactItem>
                    <FaLinkedin />
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </ContactItem>
            </ContactList>
            <ContactForm onSubmit={sendEmail}>
                <InputField
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                />
                <InputField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                />
                <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </ContactSection>
    );
};

export default ContactMe;
