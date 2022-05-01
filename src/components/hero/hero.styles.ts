import Container from "components/container";
import { H1, H2 } from "components/text/text.styles";
import styled from "styled-components/macro";

export const StyledHero = styled.section`
  background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.7)),
    url("/images/misc/home-bg.jpg");
`;

export const HeroContainer = styled(Container)`
  min-height: 740px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBody = styled.div``;

export const HeroHeader = styled(H1)`
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const HeroSubHeader = styled(H2)`
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  width: 60%;
  margin: 20px auto 30px;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;
