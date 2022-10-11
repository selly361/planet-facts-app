import React, { useMemo, useState } from "react";

import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetTabInfo from "./PlanetTabInfo/PlanetTabInfo";
import { planets } from "../../../global/theme";
import planetsData from "../../../data/data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const StyledMain = styled.main`
  width: 90vw;
  height: max-content;
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
`;

const Main = () => {
  const [status, setStatus] = useState("planet");
  const { planetName } = useParams();

  let planetData: any = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );


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
          description={planetData[status === "planet" ? "overview" : status === "internal" ? "structure" : status]}
          status={status}
          setStatus={setStatus}
          images={planetData?.images}
        />
      </PlanetContent>
    </StyledMain>
  );
};

export default Main;
