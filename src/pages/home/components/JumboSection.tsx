import { Jumbotron } from "components";
import { JumboDataI } from "data/jumboData";
import React from "react";

interface Props {
  item: JumboDataI;
}

const JumboSection: React.FC<Props> = ({ item }) => (
  <Jumbotron.Container>
    <Jumbotron direction={item.direction}>
      <Jumbotron.Box>
        <Jumbotron.Title>{item.title}</Jumbotron.Title>
        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
      </Jumbotron.Box>
      <Jumbotron.Box>
        <Jumbotron.ImageDiv>
          <Jumbotron.Image src={item.image} alt={item.alt} />
        </Jumbotron.ImageDiv>
      </Jumbotron.Box>
    </Jumbotron>
  </Jumbotron.Container>
);

export default JumboSection;
