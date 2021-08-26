import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../shared/theme";

interface IProps {
  children: any;
}

const Theme: React.FC<IProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
