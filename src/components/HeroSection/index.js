import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import Typewriter from 'typewriter-effect'
import HeroBgAnimation from '../HeroBgAnimation'

const HeroContainer = styled.div`
  top: -50px;
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
  height: 750px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
    clip-path: none;
    height: 100%;
  }

  @media screen and (max-width: 640px) {
    padding: 10px 16px;
    top: 15px;
    clip-path: none;
    margin: 0 10px;
  }

  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 82%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px
  }

  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Title2 = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 21px;
    line-height: 38px;
    margin-bottom: 10px;
  }
`;

const Span = styled.span`
  color: #205295;
  cursor: pointer;
`;

const Location = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
    
  @media screen and (max-width: 960px) {
    text-align: center;
  }

    
  @media screen and (max-width: 640px) {
    font-size: 15px;
    line-height: 32px;
  } 
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_secondary};
    
  @media screen and (max-width: 960px) {
    text-align: center;
  }

    
  @media screen and (max-width: 640px) {
    text-align: justify;
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 20px;
  } 
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 200px;
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: transparent; 
  
  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    color: #205295;
    border: 1px solid #205295;
  }
    
  @media (max-width: 640px) {
    padding: 8px 0;
    font-size: 16px;
    width: 55%;
  } 
`;

const Img = styled.img`
  top: -1rem;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  animation: img 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  border: 3px solid ${({ theme }) => theme.primary};

  @media screen and (max-width: 868px) {
    max-width: 400px;
    max-height: 400px;
    top: 1rem;
  }

  @media screen and (max-width: 640px) {
    max-width: 250px;
    max-height: 260px;
    top: 0rem;
  }

  @keyframes img{
    0%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50%{
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%
    }
    100%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;


const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi, I am <br/>{Bio.name} 👋🏻</Title>
            <Title2>Hi, I am <br/>{Bio.name}</Title2>
            <TextLoop>
              I am a
              <Span>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }} />
              </Span>
            </TextLoop>
            <Location>📍 Based in Manila, Philippines</Location>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton id="skills" href={Bio.resume} target='display'>Check Resume 📄</ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={Bio.meImage} alt="Hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero
