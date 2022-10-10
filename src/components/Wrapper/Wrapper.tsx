import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../global/global-styles";
import { theme } from "../../global/theme";

interface PropTypes {
  children: ReactNode;
}

const Wrapper = ({ children }: PropTypes) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Wrapper;
