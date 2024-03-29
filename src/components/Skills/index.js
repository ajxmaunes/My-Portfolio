import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};


  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 28px
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 20px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
 
  background-color: white;
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 18px 25px;

  @media (max-width: 1068px) {
    width: auto;
    margin: 0 20px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    padding: 10px 10px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px;
`;

const SkillItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: black;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`

const Learning = styled.div`

  padding-top: 15px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 14px
  }
`

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Tech Stack 💻</Title>
        <Desc>
          Here are some of my skills on which I have been working on.
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill>
              <SkillList>
                {item.skills.map((skill) => (
                  <SkillItem href={skill.link} target='display'>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>

              {/* <Learning>
                  Skills I currently working on :
                  <SkillList>
                    {item.learnings.map((learning) => (
                      <SkillItem href={learning.link} target='display'>
                        <SkillImage src={learning.image} />
                        {learning.name}
                      </SkillItem>
                    ))}
                  </SkillList>
              </Learning> */}
              
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
