import React, { ForwardedRef, PropsWithChildren } from "react";


interface Props {
  href: string;
}

export default React.forwardRef(
  (props: PropsWithChildren<Props>, ref: ForwardedRef<HTMLElement>) => {
    
    return (
      <section id={props.href} ref={ref}>
        {props.children}
      </section>
    );
  }
);
