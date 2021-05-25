import React from "react";
import ContentWrapper from "../home/SectionWrapper";
import FrameworkButtonLogo from "./FrameworkButton.png";
import ConceptWrapper from "./ConceptWrapper";

const Concepts = () => {
  return (
    <ContentWrapper
      variant="h2"
      title="Ideas & Concepts"
      contentColor={"#fff"}
      background={"secondary.main"}
    >
      <ConceptWrapper
        image={{ url: FrameworkButtonLogo, title: "Framework", width: 300 }}
      />
    </ContentWrapper>
  );
};

export default Concepts;
