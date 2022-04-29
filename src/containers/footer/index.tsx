import React from "react";
import { Footer as StyledFooter } from "components";
import { footerData } from "data/footerData";

const Footer = () => (
  <StyledFooter>
    <StyledFooter.Container>
      <StyledFooter.Header to="/">Questions? Contact us.</StyledFooter.Header>
      <StyledFooter.Row>
        {footerData.map((item) => (
          <StyledFooter.LinkDiv key={item.id}>
            <StyledFooter.Link to={item.link}>{item.text}</StyledFooter.Link>
          </StyledFooter.LinkDiv>
        ))}
      </StyledFooter.Row>
      <StyledFooter.Footer>Netflix Nigeria</StyledFooter.Footer>
    </StyledFooter.Container>
  </StyledFooter>
);

export default Footer;
