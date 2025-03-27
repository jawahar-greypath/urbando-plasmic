// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 210 215"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M50.5 30.595V214.5H.5V.879l50 29.716zm109 183.905V30.595l50-29.716V214.5h-50zM51.5 30.22V.889l52.536 31.858-24.186 14.67L51.5 30.22zm78.653 17.195l-24.189-14.67L158.5.889V30.22l-28.347 17.195zM80.5 214.5V47.484l24.497-14.899 24.503 14.9V214.5h-49zm-1 0h-28V30.883l28 16.817v166.8zm79-183.616V214.5h-28V47.7l28-16.817z"
        }
        stroke={"currentColor"}
        strokeOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
