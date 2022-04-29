import React from "react";
import { H1, H2, H3, H4, Paragraph, Small, Smaller } from "./text.styles";

const Text = () => <Paragraph />;
Text.H1 = () => <H1 />;
Text.H2 = () => <H2 />;
Text.H3 = () => <H3 />;
Text.H4 = () => <H4 />;
Text.Small = () => <Small />;
Text.Smaller = () => <Smaller />;

export default Text;
