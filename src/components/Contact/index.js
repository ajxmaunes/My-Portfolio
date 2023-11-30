import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
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
        font-size: 28px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 10px;
        font-size: 14px;
    }
`;

const Num = styled.div`
    font-size: 17px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media only screen and (max-width: 768px){
      text-align: center;
      font-size: 15px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  padding: 32px;
  border: 0.1px solid ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: ;
  gap: 12px;

  @media only screen and (max-width: 768px){
    padding: 12px;
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px){
    text-align: center;
    font-size: 22px;
  }
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  &:focus {
    border: 2px solid #205295;
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 5px;
  padding: 12px 16px;
  display: block;
  width: 100%;
  overflow: hidden;
  resize: vertical;
  min-height: 120px;
  line-height: 20px;
  &:focus {
    border: 2px solid #205295;
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
  return (
    <Container>
        <Wrapper>
            <Title id='contact'>Contact 📫</Title>
            <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
            <Num>Phone 📞 <span style={{fontWeight: "500"}}>( +63 9311115722 )</span></Num>
            <ContactForm action="https://formspree.io/f/mqkwbazv" method="POST" autocomplete="off">
                <ContactTitle>Email Me 🚀<a href = "mailto: aljunemaunes0@gmail.com" style={{ fontSize:"15px", fontWeight: "450", textAlign: "right", textDecoration: "none"}}> aljunemaunes0@gmail.com</a></ContactTitle>
                <ContactInput placeholder="Your Email" name="from_email" required/>
                <ContactInput placeholder="Your Name" name="from_name" required/>
                <ContactInput placeholder="Subject" name="subject" required/>
                <ContactInputMessage placeholder="Message" row="4" name="message" required/>
                <ContactButton type="submit" value="Send" />
            </ContactForm>
        </Wrapper>
    </Container>
  )
}

export default Contact
