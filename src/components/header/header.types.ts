import { HTMLAttributes } from "react";

export interface GeneralProps<T = any> extends HTMLAttributes<T> {}

export interface HeaderProps extends GeneralProps {
  isScrolled: boolean;
}

export interface HeaderImgProps extends GeneralProps {
  alt: string;
  src: string;
}
