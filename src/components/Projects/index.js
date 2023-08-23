import React, { useState } from 'react'
import styled from 'styled-components'
import Projectcard from '../Cards/Projectcard';
import { projects } from '../../data/constants';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
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
    font-size: 32px
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px
  }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
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
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`

const Projects = () => {
    const [toggle, setToggle] = useState("all")
  return (
    <Container id="projects">
        <Wrapper>
            <Title>Portfolio</Title>
            <Desc>
                Here are some of my skills on which I have been working on for the past 2 year.
            </Desc>

            {/* <ToggleButtonGroup>
                {toggle === "all" ? (
                <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                ) : (
                <ToggleButton value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                )}
                <Divider />
                {toggle === "web app" ? (
                <ToggleButton active onClick={() => setToggle("web app")}>WEB APP'S</ToggleButton>
                ) : (
                <ToggleButton onClick={() => setToggle("web app")}>WEB APP'S</ToggleButton>
                )}
                <Divider />
                {toggle === "android app" ? (
                <ToggleButton active onClick={() => setToggle("android app")}>ANDROID APP</ToggleButton>
                ) : (
                <ToggleButton onClick={() => setToggle("android app")}>ANDROID APP</ToggleButton>
                )}
                <Divider />
                {toggle === "machine learning" ? (
                <ToggleButton active onClick={() => setToggle("machine learning")}>MACHINE LEARNING</ToggleButton>
                ) : (
                <ToggleButton onClick={() => setToggle("machine learning")}>MACHINE LEARNING</ToggleButton>
                )}
            </ToggleButtonGroup> */}

            <CardContainer>
              {toggle === "all" &&
                projects.map((project) => 
                  <Projectcard project={project} />)}
              {projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                  <Projectcard project={project} />
                ))}
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
