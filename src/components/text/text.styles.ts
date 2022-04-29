import styled from "styled-components/macro";

export const Paragraph = styled.p`
  font-size: 1rem;
`;

export const H1 = styled.h1`
  font-size: 3.125rem;

  @media screen and (max-width: 991px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 991px) {
    font-size: 1.8rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.625rem;
`;

export const H4 = styled.h4`
  font-size: 1.25rem;
`;

export const Small = styled.p`
  font-size: 0.875rem;
`;

export const Smaller = styled.p`
  font-size: 0.75rem;
`;
