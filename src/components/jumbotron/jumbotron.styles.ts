import { H2, H4 } from "components/text/text.styles";
import styled from "styled-components/macro";
import { ImageProps, InnerProps } from "./jumbotron.types";

export const Inner = styled.div<InnerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 90%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  padding: 60px 0;
  border-bottom: 8px solid #333;
`;

export const Box = styled.div`
  width: 47%;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Title = styled(H2)`
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const SubTitle = styled(H4)`
  color: ${({ theme }) => theme.color.white};
  font-weight: normal;

  @media screen and (max-width: 991px) {
    text-align: center;
  }
`;

export const ImageDiv = styled.div`
  width: 70%;
  margin: auto;
  max-height: 400px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  object-fit: cover;
`;
