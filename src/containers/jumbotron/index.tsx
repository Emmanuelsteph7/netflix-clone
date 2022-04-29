import { jumboData } from "data/jumboData";
import React from "react";
import JumboSection from "./JumboSection";

const Jumbotron = () => (
  <>
    {jumboData.map((item) => (
      <JumboSection key={item.id} item={item} />
    ))}
  </>
);

export default Jumbotron;
