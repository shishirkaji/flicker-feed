import React, { PropsWithChildren } from "react";
import "./cardframe.css";

interface GridProps extends PropsWithChildren<{ className?: string }> {}
const Grid = (props: GridProps) => {

    const { children } = props;

    return <div className="grid-wrapper">{children}</div>;
};

export default Grid;
