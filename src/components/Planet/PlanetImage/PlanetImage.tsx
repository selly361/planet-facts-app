import React from 'react'
import styled from 'styled-components'

interface PropTypes {
    image: string | undefined,
    geology?: string | undefined,
}

const Wrapper = styled.div`
    
    
`

const PlanetImage = ({ image, geology }: PropTypes) => {
  return (
    <Wrapper>
        <img src={image} />
        {geology && <img src={geology} />}
    </Wrapper>
  )
}

export default PlanetImage