import styled from "styled-components/macro";
import { EmailInputProps } from "./emailForm.types";

export const StyledEmailForm = styled.div`
  width: 65%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const EmailFormText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 20px;
`;

export const EmailFormDiv = styled.div`
  display: flex;
`;

export const EmailInputDiv = styled.div`
  flex: 1;
`;

export const EmailInput = styled.input<EmailInputProps>`
  width: 100%;
  padding: 17px;
  outline: none;
  border: none;
`;

export const EmailBtnDiv = styled.div`
  width: 150px;
`;

export const EmailBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.color.red};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  height: 100%;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};

  svg {
    margin-left: 10px;
  }
`;
