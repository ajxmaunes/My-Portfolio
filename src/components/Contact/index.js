import { Snackbar } from '@mui/material'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
      padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  padding: 32px;
  border: 1px solid black;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #BDBDBD;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #205295;
    color: ${({ theme }) => theme.white};     
  }
`;

const Contact = () => {

    // const [open, setOpen] = useState(false)
    // const form = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     emailjs.sendForm('service_nfczxzy', 'template_0goeiu4', form.current, 'AmlcfshX4staRyteo')
    //         .then((result) => {
    //             setOpen(true);
    //             form.current.reset()
    //         }, (error) => {
    //             console.log(error.text)
    //         })
    // }

  return (
    <Container>
        <Wrapper>
            <Title id='contact'>Contact</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
            <ContactForm action="https://formspree.io/f/mqkwbazv" method="POST" autocomplete="off">
                <ContactTitle>Email Me 🚀 <a href = "mailto: aljunemaunes0@gmail.com" style={{ fontSize:"15px", fontWeight: "450", textAlign: "right", textDecoration: "none"}}> aljunemaunes0@gmail.com</a></ContactTitle>
                <ContactInput placeholder="Your Email" name="from_email" required/>
                <ContactInput placeholder="Your Name" name="from_name" required/>
                <ContactInput placeholder="Subject" name="subject" required/>
                <ContactInputMessage placeholder="Message" row="4" name="message" required/>
                <ContactButton type="submit" value="Send" />
            </ContactForm>
            {/* <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message="Email sent successfully!"
                severity="success"
            /> */}
        </Wrapper>
    </Container>
  )
}

export default Contact
