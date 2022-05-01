import React from "react";
import { Header as StyledHeader } from "components";
import { usePageScroll } from "hooks/utils/useScroll";

const Header = () => {
  const { isScrolled } = usePageScroll(30);
  return (
    <StyledHeader isScrolled={isScrolled}>
      <StyledHeader.Container>
        <StyledHeader.BrandDiv>
          <StyledHeader.BrandImg src="images/logo.svg" alt="" />
        </StyledHeader.BrandDiv>
        <StyledHeader.Button>Sign Up</StyledHeader.Button>
      </StyledHeader.Container>
    </StyledHeader>
  );
};

export default Header;
