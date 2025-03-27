// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCircleFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCircleFacebookIcon(props: IconCircleFacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.046 0c2.221 0 4.308.421 6.261 1.264A16.26 16.26 0 0127.42 4.71a16.321 16.321 0 013.446 5.094c.843 1.94 1.264 4.02 1.264 6.242 0 2.221-.421 4.308-1.264 6.261a16.26 16.26 0 01-3.446 5.113 16.26 16.26 0 01-5.113 3.446c-1.953.843-4.04 1.264-6.261 1.264s-4.302-.421-6.242-1.264A16.321 16.321 0 014.71 27.42a16.262 16.262 0 01-3.446-5.113C.42 20.354 0 18.267 0 16.046s.421-4.302 1.264-6.242A16.322 16.322 0 014.71 4.71a16.322 16.322 0 015.094-3.446C11.744.42 13.824 0 16.046 0zm6.05 7.008h-3.408c-.663 0-1.276.115-1.838.345a4.962 4.962 0 00-1.474.919 4.157 4.157 0 00-.977 1.302c-.23.485-.344.97-.344 1.455v2.03h-3.026v3.982h3.026v8.043h4.02V17.04h2.988v-3.98h-2.987v-1.034c0-.307.12-.55.363-.728.243-.179.453-.268.632-.268h3.026V7.01z"
        }
        fill={"currentColor"}
        opacity={".67"}
      ></path>
    </svg>
  );
}

export default IconCircleFacebookIcon;
/* prettier-ignore-end */
