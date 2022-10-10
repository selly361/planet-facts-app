import React from 'react'
import {ReactComponent as Stars} from '../../../assets/images/background-stars.svg'
import bgSrc from '../../../assets/images/background-stars.svg'
import styled from "styled-components";

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${bgSrc});
    background-color: ${({theme}) => theme.colors.black};
`

const Main = () => {
  return (
    <StyledMain>
        
    </StyledMain>
  )
}

export default Main