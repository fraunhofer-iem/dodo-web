import React from "react";
import ContentWrapper from "../home/SectionWrapper";
import FrameworkButtonLogo from "./FrameworkButton.png";
import ConceptWrapper from "./ConceptWrapper";
import Box from "@material-ui/core/Box";

const Concepts = () => {
  return (
    <ContentWrapper
      variant="h2"
      title="Ideas & Concepts"
      contentColor={"#fff"}
      background={"secondary.main"}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ConceptWrapper
          contentDescription=""
          thumbnail={{
            url: FrameworkButtonLogo,
            title: "Framework",
            width: 300,
          }}
        />
        <ConceptWrapper
          contentDescription=""
          thumbnail={{
            url: FrameworkButtonLogo,
            title: "Framework",
            width: 300,
          }}
        />
      </Box>
    </ContentWrapper>
  );
};

export default Concepts;
