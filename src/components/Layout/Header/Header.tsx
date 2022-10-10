import { Link } from 'react-router-dom'
import NavItems from './NavItems'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100vw;
  height: 15vh; 
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);    
  
  
  @media (max-width: 834px){
    flex-flow: column;
    height: 25vh;
  }
`

const NavTitle = styled(Link)`
  font-family: ${({theme}) => theme.fonts.secondary};
  font-weight: bold;
  color: white;
  font-size: 2rem;
`

const Header = () => {
  
  return (
    <StyledHeader>
        <NavTitle to="/mercury">THE PLANETS</NavTitle>
        <NavItems />
    </StyledHeader>
  )
}

export default Header