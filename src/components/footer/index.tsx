import React, { PropsWithChildren } from "react";
import {
  FooterContainer,
  FooterFooter,
  FooterHeader,
  FooterLink,
  FooterLinkDiv,
  FooterRow,
  StyledFooter
} from "./footer.styles";
import { FooterLinkProps } from "./footer.types";

const Footer = (props: PropsWithChildren<unknown>) => (
  <StyledFooter {...props} />
);

Footer.Container = (props: PropsWithChildren<unknown>) => (
  <FooterContainer {...props} />
);
Footer.Row = (props: PropsWithChildren<unknown>) => <FooterRow {...props} />;
Footer.Link = (props: PropsWithChildren<FooterLinkProps>) => (
  <FooterLink {...props} />
);
Footer.LinkDiv = (props: PropsWithChildren<unknown>) => (
  <FooterLinkDiv {...props} />
);
Footer.Header = (props: PropsWithChildren<FooterLinkProps>) => (
  <FooterHeader {...props} />
);
Footer.Footer = (props: PropsWithChildren<unknown>) => (
  <FooterFooter {...props} />
);

export default Footer;
