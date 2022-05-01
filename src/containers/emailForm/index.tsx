import React from "react";
import { EmailForm as StyledEmailForm } from "components";
import { BsChevronRight } from "react-icons/bs";

const EmailForm = () => (
  <StyledEmailForm>
    <StyledEmailForm.Text>
      Ready to watch? Enter your email to create or restart your membership.
    </StyledEmailForm.Text>
    <StyledEmailForm.FormContainer>
      <StyledEmailForm.InputDiv>
        <StyledEmailForm.Input type="email" placeholder="Email Address" />
      </StyledEmailForm.InputDiv>
      <StyledEmailForm.BtnDiv>
        <StyledEmailForm.Btn>
          Get Started
          <BsChevronRight />
        </StyledEmailForm.Btn>
      </StyledEmailForm.BtnDiv>
    </StyledEmailForm.FormContainer>
  </StyledEmailForm>
);

export default EmailForm;
