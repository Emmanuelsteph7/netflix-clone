import React from "react";
import { Divider, Hero as StyledHero } from "components";
import EmailForm from "containers/emailForm";

const Hero = () => (
  <StyledHero>
    <StyledHero.Container>
      <StyledHero.Body>
        <StyledHero.Header>
          Unlimited movies, TV shows, and more.
        </StyledHero.Header>
        <StyledHero.SubHeader>
          Watch anywhere. Cancel anytime.
        </StyledHero.SubHeader>
        <EmailForm />
      </StyledHero.Body>
    </StyledHero.Container>
    <Divider />
  </StyledHero>
);

export default Hero;
