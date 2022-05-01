import { Divider } from "components";
import EmailForm from "containers/emailForm";
import { faqsData } from "data/faqsData";
import React from "react";
import Accordion from "./Accordion";
import {
  Faq as StyledFaq,
  FaqAccordionContainer,
  FaqContainer,
  FaqHeader
} from "./faq.styles";

const Faq = () => (
  <>
    <StyledFaq>
      <FaqContainer>
        <FaqHeader>Frequently Asked Questions</FaqHeader>
        <FaqAccordionContainer>
          <Accordion data={faqsData} />
        </FaqAccordionContainer>
        <EmailForm />
      </FaqContainer>
    </StyledFaq>
    <Divider />
  </>
);

export default Faq;
