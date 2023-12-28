import React, { useState } from 'react'
import styled from 'styled-components'
import Projectcard from '../Cards/Projectcard';
import { projects } from '../../data/constants';

const Container = styled.div`
    background: linear-gradient(0deg, rgba(189,189,189,1) 0%, rgba(249,249,249,1) 50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
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

export const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.primary};
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `}

    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

const CardContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`

const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState("all")
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Portfolio ⚙️</Title>
            <Desc>
              Here are some of my projects which I have been working on.
            </Desc>
            <CardContainer>
              {toggle === "all" &&
                projects.map((project) => 
                  <Projectcard project={project} openModal={openModal} setOpenModal={setOpenModal} />)}
              {projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <Projectcard project={project} />
                ))}
            </CardContainer>
        </Wrapper>
        <div id='contact'>.</div>
    </Container>
  )
}

export default Projects
