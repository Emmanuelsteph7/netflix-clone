import React, { PropsWithChildren } from "react";
import {
  Container,
  Inner,
  SubTitle,
  Title,
  Box,
  Image,
  ImageDiv
} from "./jumbotron.styles";
import { ImageProps, InnerProps } from "./jumbotron.types";

const Jumbotron = (props: PropsWithChildren<InnerProps>) => (
  <Inner {...props} />
);

Jumbotron.Container = (props: PropsWithChildren<unknown>) => (
  <Container {...props} />
);

Jumbotron.Box = (props: PropsWithChildren<unknown>) => <Box {...props} />;
Jumbotron.Title = (props: PropsWithChildren<unknown>) => <Title {...props} />;
Jumbotron.ImageDiv = (props: PropsWithChildren<unknown>) => (
  <ImageDiv {...props} />
);
Jumbotron.Image = (props: PropsWithChildren<ImageProps>) => (
  <Image {...props} />
);
Jumbotron.SubTitle = (props: PropsWithChildren<unknown>) => (
  <SubTitle {...props} />
);

export default Jumbotron;
