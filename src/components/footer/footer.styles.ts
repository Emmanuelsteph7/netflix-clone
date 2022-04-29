import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Container } from "components/container/container.styles";
import { FooterLinkProps } from "./footer.types";

export const StyledFooter = styled.footer`
  padding: 60px 0;
`;

export const FooterContainer = styled(Container)``;

export const FooterLinkDiv = styled.div`
  flex-wrap: wrap;
  width: 23%;
  min-width: 150px;
`;

export const FooterLink = styled(Link)<FooterLinkProps>`
  color: #757575;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  ${FooterLinkDiv} {
    margin-bottom: 15px;
  }
`;

export const FooterHeader = styled(FooterLink)`
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: inline-block;
`;

export const FooterFooter = styled.p`
  font-size: 0.9rem;
  margin-top: 30px;
  color: #757575;
`;
