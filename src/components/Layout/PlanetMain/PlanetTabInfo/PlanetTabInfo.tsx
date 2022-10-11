import React from "react";
import { planets } from "../../../../global/theme";
import styled from "styled-components";

interface PropTypes {
  name: string;
  description: {
    content: string;
    source: string;
  };
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  images:
    | {
        planet: string;
        geology: string;
        internal: string;
      }
    | any;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 350px;
  margin-right: 4rem;
  gap: 1rem;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
  width: 100%;
  height: 340px;
`;

const PlanetName = styled.h1<{ mask: string }>`
  color: white;
  font-size: 5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 100%;
  background-clip: text;
  background: url(${(props) => props.mask}) no-repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-position: center;
  background-size: 700px;
`;

const Source = styled.span`
  color: hsl(240, 6%, 54%);
  font-family: ${({ theme }) => theme.fonts.primary};

  a {
    margin-left: 0.4rem;
    text-decoration: underline;
    font-weight: bold;
    color: hsl(240, 6%, 54%);
  }
`;

const TabWrapper = styled.ul`
  width: 100%;
  display: grid;
  gap: 1rem;
  list-style: none;
`;

const Tab = styled.button<{ color: (string | undefined) }>`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  transition: .5s background-color;
  height: 50px;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.color || "transparent"};
  border: 1px solid hsla(0, 0%, 100%, 0.2);

  &:hover {
  background-color: ${({theme}) => theme.colors.grayLight};
  }


    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 600;
    color: white;


  li {
    color: hsla(0,0%,100%,0.5);
    
  }
`;



const PlanetDesc = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const PlanetTabInfo = ({
  name,
  images,
  description,
  status,
  setStatus,
}: PropTypes) => {
  const tabs = [
    {
      tabStatus: "planet",
      label: "OVERVIEW",
    },
    {
      tabStatus: "internal",
      label: "INTERNAL STRUCTURE",
    },
    {
      tabStatus: "geology",
      label: "SURFACE GEOLOGY",
    },
  ];

  let planetDesign = planets.find((planet) => planet.name === name.toLowerCase());

  return (
    <Wrapper>
      <StyledArticle>
        <PlanetName mask={images.planet}>{name}</PlanetName>
        <PlanetDesc>{description.content}</PlanetDesc>
        <Source>
          Source:
          <a href={description.source}>Wikipedia</a>
        </Source>
      </StyledArticle>
      <TabWrapper>
        {tabs.map((tab, i) => (
          <Tab key={tab.label} color={status === tab.tabStatus ? planetDesign?.sectionColor : ""} onClick={() => setStatus(tab.tabStatus)}>
            <li>0{i + 1}</li> {tab.label}
          </Tab>
        ))}
      </TabWrapper>
    </Wrapper>
  );
};

export default PlanetTabInfo;
