import React from "react";
import ContentWrapper from "../home/SectionWrapper";
import FrameworkButtonLogo from "./FrameworkButton.png";
import ConceptWrapper from "./ConceptWrapper";
import Box from "@material-ui/core/Box";

const frameworkContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.";

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
          dialogContent={{ title: "Framework", body: frameworkContent }}
          dialogImage={{
            url: FrameworkButtonLogo,
            title: "Framework",
            width: 300,
          }}
          thumbnail={{
            url: FrameworkButtonLogo,
            title: "Framework",
            width: 300,
          }}
        />
        <ConceptWrapper
          dialogContent={{ title: "", body: "" }}
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
