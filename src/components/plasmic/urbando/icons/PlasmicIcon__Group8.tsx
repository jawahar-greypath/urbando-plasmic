// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 26.539l-.878-1.08C7.796 25.043 0 15.31 0 8.83 0 3.96 4.039 0 9 0s9 3.96 9 8.831c0 6.492-7.796 16.223-8.123 16.628L9 26.539zM9 2.25c-3.724 0-6.75 2.947-6.75 6.581 0 4.511 4.747 11.374 6.75 14.074 2.002-2.7 6.75-9.563 6.75-14.074 0-3.633-3.026-6.581-6.75-6.581z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
