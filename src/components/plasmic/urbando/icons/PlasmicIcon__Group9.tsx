// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.375 6.75A3.385 3.385 0 010 3.375 3.385 3.385 0 013.375 0 3.385 3.385 0 016.75 3.375 3.385 3.385 0 013.375 6.75zm0-4.5c-.619 0-1.125.506-1.125 1.125S2.756 4.5 3.375 4.5 4.5 3.994 4.5 3.375 3.994 2.25 3.375 2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
