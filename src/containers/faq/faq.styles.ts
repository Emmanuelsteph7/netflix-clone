import { Container } from "components/container/container.styles";
import { H2 } from "components/text/text.styles";
import styled from "styled-components/macro";

export const Faq = styled.div`
  padding: 60px 0;
`;

export const FaqHeader = styled(H2)`
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color.white};
`;

export const FaqAccordionContainer = styled.div`
  margin-bottom: 65px;
`;

export const FaqContainer = styled(Container)``;
