import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

interface Data {
  id: number;
  header: string;
  body: string;
}

interface Props {
  data: Data[];
}

const Accordion = (props: Props) => {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    if (activeIndex === index) return setActiveIndex(-1);

    return setActiveIndex(index);
  };
  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          {...item}
          isActive={activeIndex === index}
          index={index}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
};

export default Accordion;
