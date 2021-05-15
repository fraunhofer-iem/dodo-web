import React, { useEffect, useRef, useState } from "react";
import Section from "../section/Section";

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      console.log("intersection detected");
      console.log(entries);
      // we can use the id of the element, which equals the href of the nav buttons,
      // to identify the currently intersecting (active) element and thereby highlight
      // the corresponding nav button.
      // this should be done using mobx or some state management. just store an active
      // section with the correct id (# represents no selection and should be on top of the page).
    };
    const observer = new IntersectionObserver(callback, options);
    //observer.current = new IntersectionObserver(callback, options);
    refs.current.forEach((ref) => {
      if (ref.current !== null)
        observer.observe(ref.current);
    });

    return () => {
      console.log("disconnecting");
      observer.disconnect();
    };
  }, [ refs]);

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
