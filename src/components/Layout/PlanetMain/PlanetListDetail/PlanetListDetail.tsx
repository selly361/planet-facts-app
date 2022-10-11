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

  
`;

const DetailListItem = styled.li`
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  display: flex;
  flex-flow: column;
  gap: 1rem;
  padding: 1rem;
`;

const Label = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    color: hsl(240,6%,54%);
    font-weight: bold;
    font-size: .7rem;
`


const Value = styled.h4`
    font-size: 2rem;
    color: white;
    font-weight: bold;
    font-family: ${({theme}) => theme.fonts.secondary};
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
