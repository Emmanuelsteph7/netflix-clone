/* eslint-disable no-confusing-arrow */
/* eslint-disable operator-linebreak */
import { H4 } from "components/text/text.styles";
import styled from "styled-components/macro";
import { Container } from "components/container/container.styles";
import { AccordionBodyProps, GeneralProps } from "./accordion.types";

export const StyledAccordion = styled.div<GeneralProps>`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
`;

export const AccordionContainer = styled(Container)<GeneralProps>``;

export const Header = styled.div<GeneralProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.grey};
  cursor: pointer;
`;

export const HeaderText = styled(H4)<GeneralProps>`
  color: ${({ theme }) => theme.color.white};
`;

export const HeaderSvgDiv = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
`;

export const Body = styled.div<AccordionBodyProps>`
  max-height: ${(props) => (props.isActive ? "200px" : "0")};
  overflow: hidden;
  transition: 0.4s ease;
  margin-top: 1px;
`;

export const BodyContainer = styled.div<GeneralProps>`
  padding: 30px;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.white};
`;
