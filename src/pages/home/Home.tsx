import React from "react";
import { jumboData } from "data/jumboData";
import JumboSection from "./components/JumboSection";

const Home = () => {
  const varia = "dd";
  return (
    <>
      {jumboData.map((item) => (
        <JumboSection key={item.id} item={item} />
      ))}
    </>
  );
};

export default Home;
