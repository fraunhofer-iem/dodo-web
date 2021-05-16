import { Toolbar } from "@material-ui/core";
import React, { useRef } from "react";
import Section from "../section/Section";
import { useIntersection } from "./IntersectionHook";

const fillRefsArray = (
  amount: number,
  arr: Array<React.RefObject<HTMLElement>>
) => {
  for (let i = 0; i < amount; i++) {
    arr.push(React.createRef<HTMLElement>());
  }
};

const Content = () => {
  const refs = useRef<Array<React.RefObject<HTMLElement>>>([]);
  fillRefsArray(4, refs.current);

  useIntersection(refs);

  return (
    <React.Fragment>
      <Toolbar />
      <Section href={"about"} ref={refs.current[0]}></Section>
      <Section href={"results"} ref={refs.current[1]}></Section>
      <Section href={"team"} ref={refs.current[2]}></Section>
      <Section href={"partners"} ref={refs.current[3]}></Section>
    </React.Fragment>
  );
};

export default Content;
