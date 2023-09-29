import React, { PropsWithChildren } from "react";
import "./Container.less";

export const Container = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  );
};
