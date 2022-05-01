import React, { PropsWithChildren } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { theme } from "./theme";

const ThemeProvider = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
