import styled from "styled-components/macro";

export const StyledButton = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.red};
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
`;
