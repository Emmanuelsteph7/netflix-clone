import { HTMLAttributes } from "react";

export interface GeneralProps<T = any> extends HTMLAttributes<T> {}

export interface EmailInputProps extends GeneralProps {
  type: string;
}
