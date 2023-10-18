import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    width: 530px;
    height: 530px;
    background-color: ${({ theme }) => theme.white};
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }

    @media only screen and (max-width: 768px){
        border-radius: 5px;
        width: 340px;
        height: 430px;
        box-shadow: none;
        padding: 24px 14px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 1px;
    border: 1px solid black;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.4);

    @media only screen and (max-width: 768px){
        height: 180px;
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: black;
    background-color: ${({ theme }) => theme.primary + 45};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 16px
    }
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 100};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 12px
    }
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 1.5px solid ${({ theme }) => theme.card};
`;

const Projectcards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({state: true, project: project})}>
        <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={tag}>{tag}</Tag>
                ))}
        </Tags>
        <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
        </Details>
        <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
        </Members>
    </Card>
  )
}

export default Projectcards