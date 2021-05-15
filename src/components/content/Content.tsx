import React, { useEffect, useRef } from "react";
import Section from "../section/Section";

const Content = () => {
  const root = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const about = React.createRef<HTMLElement>();
  const results = React.createRef<HTMLElement>();
  const team = React.createRef<HTMLElement>();
  const partners = React.createRef<HTMLElement>();

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

  useEffect(() => {
    console.log(root.current);
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    observer.current = new IntersectionObserver(callback, options);
    if (about.current !== null) observer.current.observe(about.current);
    if (results.current !== null) observer.current.observe(results.current);
    if (team.current !== null) observer.current.observe(team.current);
    if (partners.current !== null) observer.current.observe(partners.current);
    console.log("initialized");
    return () => {
      console.log("disconnecting");
      observer.current?.disconnect();
    };
  }, [observer, root, about, results, team, partners]);

  return (
    <div ref={root}>
      <Section href={"about"} ref={about} title={"Hello World"}></Section>
      <Section href={"results"} ref={results} title={"Next"}></Section>
      <Section href={"team"} ref={team} title={"WhoopWhoop"}></Section>
      <Section href={"partners"} ref={partners} title={"WhoopWhoop"}></Section>
    </div>
  );
};

export default Content;
