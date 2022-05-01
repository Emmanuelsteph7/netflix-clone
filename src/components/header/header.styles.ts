/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import Button from "components/button";
import Container from "components/container";
import styled from "styled-components/macro";
import { HeaderImgProps, HeaderProps } from "./header.types";

export const StyledHeader = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.4s ease-out;
  padding: ${({ isScrolled }) => (isScrolled ? "10px 0" : "20px 0")};
  background-color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.color.primary : "transparent"};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBrandDiv = styled.div`
  width: 150px;
`;

export const HeaderImg = styled.img<HeaderImgProps>`
  width: 100%;
  object-fit: cover;
`;

export const HeaderButton = styled(Button)``;
