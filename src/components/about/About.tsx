import React from "react";
import ContentWrapper from "../home/SectionWrapper";
import { Box, Link, Typography } from "@material-ui/core";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        flexWrap: "wrap",
        gap: "5rem",
      }}
    >
      <ContentWrapper
        variant="h2"
        title="About"
        background={"#fff"}
        contentColor={"primary.main"}
      >
        <Typography
          sx={{
            marginLeft: "3rem",
            width: "40rem",
          }}
          variant="body1"
          color="textSecondary"
        >
          DoDo is a research project in the context of the{" "}
          <Link href="https://softwarecampus.de">Software Campus</Link>, which
          is funded by the BMBF. The main goal of the project is to support
          companies in their DevOps journey by providing insights and guidance
          based on metrics and maturity models.
          <br />
          The project is conducted at the{" "}
          <Link href="https://www.iem.fraunhofer.de/">Fraunhofer IEM</Link>,
          which provides the research advisers for the scientific questions. The
          project is further supported by an industry partner the{" "}
          <Link href="https://www.softwareag.com">Software AG</Link>, who
          provide further insights into the practical applications of the
          developed approach.
        </Typography>
      </ContentWrapper>
      <ContentWrapper
        variant="h2"
        title="Project Idea"
        background={"#fff"}
        contentColor={"primary.main"}
      >
        <Typography
          sx={{
            marginLeft: "3rem",
            width: "40rem",
          }}
          variant="body1"
          color="textSecondary"
        >
          Maturity Models are valuable to communicate the current state of
          DevOps, especially towards upper management. However, they often lack
          technical depth and do not provide any guidance on improving the
          current maturity level.
          <br />
          The research project DoDo addresses these shortcomings by combining a
          maturity model with technical metrics using a hierarchical system of
          KPIs. This method empowers its users to explore the detailed
          information comprehensively, thereby enabling them to discover a clear
          path for their DevOps journey.
        </Typography>
      </ContentWrapper>
    </Box>
  );
};

export default About;
