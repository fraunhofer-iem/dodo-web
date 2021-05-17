import { useEffect } from "react";

export function useIntersection(
  refs: React.MutableRefObject<React.RefObject<HTMLElement>[]>
) {
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
      if (ref.current !== null) observer.observe(ref.current);
    });

    return () => {
      console.log("disconnecting");
      observer.disconnect();
    };
  }, [refs]);
}
