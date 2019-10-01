import React from "react";
import classnames from "classnames";

const Link: React.SFC<any> = ({ active, children, setFilter }) => (
    
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a
    className={classnames({ selected: active })}
    style={{ cursor: "pointer" }}
    onClick={() => setFilter(children)}
  >
    {children}
  </a>
);

export default Link;