import { Toolbar } from "@material-ui/core";
import React, { useRef } from "react";
import { useIntersection } from "./IntersectionHook";

const fillRefsArray = (
  amount: number,
  arr: Array<React.RefObject<HTMLElement>>
) => {
  for (let i = 0; i < amount; i++) {
    arr.push(React.createRef<HTMLElement>());
  }
};

interface SectionElement {
  element: JSX.Element;
  id: string;
}

interface Props {
  sections: Array<SectionElement>;
}

const Content = (props: Props) => {
  const refs = useRef<Array<React.RefObject<HTMLElement>>>([]);
  fillRefsArray(props.sections.length, refs.current);
  useIntersection(refs);

  const elementToSection = (ele: SectionElement, index: number) => {
    return (
      <section id={ele.id} ref={refs.current[index]}>
        {ele.element}
      </section>
    );
  };

  return (
    <React.Fragment>
      <Toolbar />
      {props.sections.map(elementToSection)}
    </React.Fragment>
  );
};

export default Content;
