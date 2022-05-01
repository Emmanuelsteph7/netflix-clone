import React, { PropsWithChildren } from "react";
import {
  HeaderBrandDiv,
  HeaderButton,
  HeaderContainer,
  HeaderImg,
  StyledHeader
} from "./header.styles";
import { GeneralProps, HeaderImgProps, HeaderProps } from "./header.types";

const Header = (props: PropsWithChildren<HeaderProps>) => (
  <StyledHeader {...props} />
);

Header.Container = (props: PropsWithChildren<GeneralProps>) => (
  <HeaderContainer {...props} />
);
Header.BrandDiv = (props: PropsWithChildren<GeneralProps>) => (
  <HeaderBrandDiv {...props} />
);
Header.BrandImg = (props: PropsWithChildren<HeaderImgProps>) => (
  <HeaderImg {...props} />
);
Header.Button = (props: PropsWithChildren<GeneralProps>) => (
  <HeaderButton {...props} />
);
export default Header;
