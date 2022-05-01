import React, { PropsWithChildren } from "react";
import {
  EmailBtn,
  EmailBtnDiv,
  EmailFormDiv,
  EmailFormText,
  EmailInput,
  EmailInputDiv,
  StyledEmailForm
} from "./emailForm.styles";
import { EmailInputProps, GeneralProps } from "./emailForm.types";

const EmailForm = (props: PropsWithChildren<GeneralProps>) => (
  <StyledEmailForm {...props} />
);

EmailForm.Text = (props: PropsWithChildren<GeneralProps>) => (
  <EmailFormText {...props} />
);
EmailForm.FormContainer = (props: PropsWithChildren<GeneralProps>) => (
  <EmailFormDiv {...props} />
);
EmailForm.Input = (props: PropsWithChildren<EmailInputProps>) => (
  <EmailInput {...props} />
);
EmailForm.InputDiv = (props: PropsWithChildren<GeneralProps>) => (
  <EmailInputDiv {...props} />
);
EmailForm.Btn = (props: PropsWithChildren<GeneralProps>) => (
  <EmailBtn {...props} />
);
EmailForm.BtnDiv = (props: PropsWithChildren<GeneralProps>) => (
  <EmailBtnDiv {...props} />
);

export default EmailForm;
