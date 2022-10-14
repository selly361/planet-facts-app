import React, { ReactNode } from "react";

import { GlobalStyle } from "../../global/global-styles";
import styled from "styled-components";

interface PropTypes {
  children: ReactNode;
}

const StyledWrapper = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-image: url('background-stars.svg');
  background-color: ${({ theme }) => theme.colors.black};
  background-size: contain;
  padding-bottom: 3rem;
  
`;

const Wrapper = ({ children }: PropTypes) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
