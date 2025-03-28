// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Svgid2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Svgid2Icon(props: Svgid2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h54v54H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Svgid2Icon;
/* prettier-ignore-end */
