import React, { PropsWithChildren } from "react";
import {
  HeroBody,
  HeroContainer,
  HeroHeader,
  HeroSubHeader,
  StyledHero
} from "./hero.styles";
import { GeneralProps } from "./hero.types";

const Hero = (props: PropsWithChildren<GeneralProps>) => (
  <StyledHero {...props} />
);

Hero.Container = (props: PropsWithChildren<GeneralProps>) => (
  <HeroContainer {...props} />
);
Hero.Header = (props: PropsWithChildren<GeneralProps>) => (
  <HeroHeader {...props} />
);
Hero.SubHeader = (props: PropsWithChildren<GeneralProps>) => (
  <HeroSubHeader {...props} />
);
Hero.Body = (props: PropsWithChildren<GeneralProps>) => <HeroBody {...props} />;

export default Hero;
