import React, { useEffect, useRef, useState } from "react";
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
      <Section
        href={"about"}
        ref={refs.current[0]}
        title={"Hello World"}
      ></Section>
      <Section href={"results"} ref={refs.current[1]} title={"Next"}></Section>
      <Section
        href={"team"}
        ref={refs.current[2]}
        title={"WhoopWhoop"}
      ></Section>
      <Section
        href={"partners"}
        ref={refs.current[3]}
        title={"WhoopWhoop"}
      ></Section>
    </React.Fragment>
  );
};

export default Content;
