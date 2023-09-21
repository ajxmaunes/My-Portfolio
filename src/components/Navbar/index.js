/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link as linkR } from 'react-router-dom'
import styled from 'styled-components'
import { GiCancer } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Nav = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 60px;
  }

  &.nav {
    box-shadow: 0px 5px 20px -15px #111;    
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(linkR)`
  width: 80%;
  padding: 0 6px;
  margin-left: 1rem;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
    margin-left: 0rem;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #205295;
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px
`;

const MobileMenu = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? " translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #205295;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: end;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin-left: .5rem;
  margin-right: 1.5rem;
  font-size: 1.5rem;
  color: #205295;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media screen and (max-width: 640px) {
    color: white;
    margin: 0 20px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Nav className='nav'>
        <NavContainer>
          <NavLogo to="https://ajxmaunes.github.io/My-Portfolio/">
            <a style={{ 
              display: "flex", 
              alignItems: "center", 
              color: "black", 
              marginBottom: '20;', 
              cursor: 'pointer' }}>
              <GiCancer size="1.5rem" /> <Span style={{fontSize: '25px'}}>AJDev</Span>
            </a>
          </NavLogo>
          <MobileIcon>
            <FaBars onClick={() => {
              setOpen(!open)
            }} />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            {/* <NavLink href='#experience'>Experience</NavLink> */}
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#contact'>Contact</NavLink>
          </NavItems>
          <SocialMediaIcons>
                <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          </SocialMediaIcons>
        </NavContainer>
        {
          open && (
            <MobileMenu open={open}>
              <MobileMenuLinks href="#about" onClick={() => {
              setOpen(!open)
              }}>About</MobileMenuLinks>
              <MobileMenuLinks href='#skills' onClick={() => {
                setOpen(!open)
              }}>Skills</MobileMenuLinks>
              <MobileMenuLinks href='#projects' onClick={() => {
                setOpen(!open)
              }}>Projects</MobileMenuLinks>
              <MobileMenuLinks href='#contact' onClick={() => {
                setOpen(!open)
              }}>Contact</MobileMenuLinks>
              <MobileMenuLinks>
                <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
              </MobileMenuLinks>
            </MobileMenu>
          )
        }
    </Nav>
  )
};

export default Navbar
