import { HTMLAttributes } from "react";

export interface GeneralProps<T = any> extends HTMLAttributes<T> {}

export interface AccordionBodyProps extends GeneralProps {
  isActive: boolean;
}
