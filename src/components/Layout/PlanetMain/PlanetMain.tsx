import React, { useMemo, useState } from 'react'

import PlanetImage from '../../Planet/PlanetImage/PlanetImage';
import { planets } from '../../../global/theme';
import planetsData from '../../../data/data.json'
import styled from "styled-components";
import { useParams } from 'react-router-dom';

const StyledMain = styled.main`
    width: 80vw;
    min-height: 85vh;
    border: 1px solid black;
    margin: auto;

      
  @media (max-width: 934px){
    flex-flow: column;
    min-height: 75vh;
  }
`



const Main = () => {
  const [status, setStatus] = useState("planet")
  const { planetName } = useParams()

  let planetDesign = planets.find(planet => planet.name === planetName)
  let planetData: any = planetsData.find(planet => planet.name.toLowerCase() === planetName)
  
  return (
    <StyledMain>
      <PlanetImage image={planetData?.images[status]} />
    </StyledMain>
  )
}

export default Main