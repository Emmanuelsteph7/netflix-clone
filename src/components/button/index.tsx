import React, { PropsWithChildren } from "react";
import { StyledButton } from "./button.styles";
import { GeneralProps } from "./button.types";

const Button = (props: PropsWithChildren<GeneralProps>) => (
  <StyledButton {...props} />
);

export default Button;
