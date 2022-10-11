import React, { useMemo, useState } from "react";

import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetListDetail from "./PlanetListDetail/PlanetListDetail";
import PlanetTabInfo from "./PlanetTabInfo/PlanetTabInfo";
import { planets } from "../../../global/theme";
import planetsData from "../../../data/data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledMain = styled.main`
  width: 90vw;
  height: 100%;
  margin: auto;
  padding-top: 5rem;

  @media (max-width: 934px) {
    flex-flow: column;
    min-height: 75vh;
  }
`;

const PlanetContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10rem;


  @media (max-width: 1050px){
    flex-flow: column;
  }
`;



const Main = () => {
  const [status, setStatus] = useState("planet");
  const { planetName } = useParams();

  let planetData: any = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  let planetDetailsProp = {
    rotation: planetData?.rotation,
    revolution: planetData?.revolution,
    radius: planetData?.radius,
    temperature: planetData?.temperature,
  };

  return (
    <StyledMain>
      <PlanetContent>
        <PlanetImage
          saturn={planetName || ""}
          status={status}
          images={planetData?.images}
        />

        <PlanetTabInfo
          name={planetData.name}
          description={
            planetData[
              status === "planet"
                ? "overview"
                : status === "internal"
                ? "structure"
                : status
            ]
          }
          status={status}
          setStatus={setStatus}
          images={planetData?.images}
        />
      </PlanetContent>
      <PlanetListDetail {...planetDetailsProp} />
    </StyledMain>
  );
};

export default Main;
