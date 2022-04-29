import React, { PropsWithChildren } from "react";
import { Container as StyledContainer } from "./container.styles";

const Container = (props: PropsWithChildren<unknown>) => (
  <StyledContainer {...props} />
);

export default Container;
