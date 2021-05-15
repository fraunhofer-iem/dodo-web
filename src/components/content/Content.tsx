import React from "react";
import Section from "../section/Section";

const Content = () => {
  const root = React.createRef<HTMLDivElement>();

  const options = {
    root: root.current,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    console.log("intersection detected");
    console.log(entries);
    // we can use the id of the element, which equals the href of the nav buttons,
    // to identify the currently intersecting (active) element and thereby highlight
    // the corresponding nav button.
    // this should be done using mobx or some state management. just store an active
    // section with the correct id (# represents no selection and should be on top of the page).
  };
  
  const observer = new IntersectionObserver(callback, options);

  const setRef = (el: HTMLElement | null) => {
    if (el !== null && observer !== undefined) {
      observer.observe(el);
    }
  };

  return (
    <div ref={root}>
      <Section href={"about"} setRef={setRef} title={"Hello World"}></Section>
      <Section href={"results"} setRef={setRef} title={"Next"}></Section>
      <Section href={"team"} setRef={setRef} title={"WhoopWhoop"}></Section>
      <Section href={"partners"} setRef={setRef} title={"WhoopWhoop"}></Section>
    </div>
  );
};

export default Content;
