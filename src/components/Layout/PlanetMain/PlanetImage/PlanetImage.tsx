import React from "react";
import styled from "styled-components";

interface PropTypes {
  saturn: string;
  status: string;
  images: {
        planet: string;
        geology: string;
        internal: string;
      }
    | any;
}

interface WrapperProps {
  bgSrc: string | undefined;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 400px;


  @media (max-width: 730px){
    justify-content: end;
    height: max-content;
    width: max-content;
    margin: auto;
  }

`;

const GeologyImage = styled.img`
  height: 200px;
  margin-top: -100px;

  &.saturn {
  margin-top: -200px;
    
  }
`;

const Image = styled.img`
  height: 400px;
  width: 400px;

  &.saturn {
    height: 500px;
    width: 500px;
  }

  @media (max-width: 730px){
    height: 200px;
    width: 200px;
  }
`;

const PlanetImage = ({ images, status, saturn }: PropTypes) => {
  return (
    <Wrapper>
      <Image
        className={saturn}
        src={images[status === "geology" ? "planet" : status]}
      />
      <GeologyImage
        className={saturn}
        src={images[status === "geology" ? status : ""]}
      />
    </Wrapper>
  );
};

export default PlanetImage;
