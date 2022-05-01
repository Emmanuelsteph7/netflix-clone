import React, { PropsWithChildren } from "react";
import {
  AccordionContainer,
  Body,
  BodyContainer,
  Header,
  HeaderSvgDiv,
  HeaderText,
  StyledAccordion
} from "./accordion.styles";
import { AccordionBodyProps, GeneralProps } from "./accordion.types";

const Accordion = (props: PropsWithChildren<GeneralProps>) => (
  <StyledAccordion {...props} />
);

Accordion.Container = (props: PropsWithChildren<GeneralProps>) => (
  <AccordionContainer {...props} />
);
Accordion.Header = (props: PropsWithChildren<GeneralProps>) => (
  <Header {...props} />
);
Accordion.HeaderText = (props: PropsWithChildren<GeneralProps>) => (
  <HeaderText {...props} />
);
Accordion.Body = (props: PropsWithChildren<AccordionBodyProps>) => (
  <Body {...props} />
);
Accordion.BodyContainer = (props: PropsWithChildren<GeneralProps>) => (
  <BodyContainer {...props} />
);
Accordion.SvgDiv = (props: PropsWithChildren<GeneralProps>) => (
  <HeaderSvgDiv {...props} />
);

export default Accordion;
