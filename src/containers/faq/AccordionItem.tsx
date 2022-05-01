import { Accordion } from "components";
import React, { PropsWithChildren } from "react";
import { GoPlus } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

interface Props {
  header: string;
  body: string;
  index: number;
  isActive: boolean;
  handleToggle: (index: number) => void;
}

const AccordionItem = (props: PropsWithChildren<Props>) => {
  const { header, body, isActive, handleToggle, index } = props;
  return (
    <Accordion>
      <Accordion.Header onClick={() => handleToggle(index)}>
        <Accordion.HeaderText>{header}</Accordion.HeaderText>
        <Accordion.SvgDiv>
          {isActive ? <FaTimes /> : <GoPlus />}
        </Accordion.SvgDiv>
      </Accordion.Header>
      <Accordion.Body isActive={isActive}>
        <Accordion.BodyContainer>{body}</Accordion.BodyContainer>
      </Accordion.Body>
    </Accordion>
  );
};

export default AccordionItem;
