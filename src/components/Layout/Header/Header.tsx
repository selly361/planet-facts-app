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
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);    
  
  
  @media (max-width: 1050px){
    flex-flow: column;
    height: 25vh;
    padding-top: 1rem;
    
  }

  @media (max-width: 730px){
    flex-flow: row;
    height: 15vh;
    padding-top: 0;
  }
`

const NavTitle = styled(Link)`
  font-family: ${({theme}) => theme.fonts.secondary};
  font-weight: bold;
  color: white;
  font-size: 2rem;

  @media (max-width: 1050px){
    font-size: 1.5rem;    
    letter-spacing: 1.5px;
  }
`

const Header = () => {
  
  return (
    <StyledHeader>
        <NavTitle to="/">THE PLANETS</NavTitle>
        <NavItems />
    </StyledHeader>
  )
}

export default Header