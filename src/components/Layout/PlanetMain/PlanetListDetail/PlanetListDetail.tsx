import React from "react";
import styled from "styled-components";

interface PropTypes {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

const ListWrapper = styled.ul`
  height: 130px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1050px){
    height: max-content;
    }
  
  @media (max-width: 730px){
    grid-template-columns: 1fr;
    gap: .5rem;
  }
`;

const DetailListItem = styled.li`
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 1rem;


  @media (max-width: 1050px) and (min-width: 730px){
    padding: .5rem;
    gap: .5rem;
    padding-left: .8rem;
    }

    @media (max-width: 730px){
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    }
`;

const Label = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    color: hsl(240,6%,54%);
    font-weight: bold;
    font-size: .7rem;

        
    @media (max-width: 730px){
      font-size: .6rem;
    }
`


const Value = styled.h4`
    font-size: 2rem;
    color: white;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.secondary};

    @media (max-width: 1050px){
      font-size: 1.3rem;
    }

    
    @media (max-width: 730px){
      font-size: 1.2rem;
    }
`

const PlanetListDetail = ({
  rotation,
  revolution,
  radius,
  temperature,
}: PropTypes) => {
  let detailList = [
    {
      label: "ROTATION TIME",
      detail: rotation,
    },

    {
      label: "REVOLUTION TIME",
      detail: revolution,
    },

    {
      label: "RADIUS",
      detail: radius,
    },

    {
      label: "AVERAGE TEMP",
      detail: temperature,
    },
  ];
  return (
    <ListWrapper>
      {detailList.map(({ label, detail }) => (
        <DetailListItem key={label}>
          <Label>{label}</Label>
          <Value>{detail}</Value>
        </DetailListItem>
      ))}
    </ListWrapper>
  );
};

export default PlanetListDetail;
