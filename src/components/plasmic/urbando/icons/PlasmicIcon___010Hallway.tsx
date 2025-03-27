// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _010HallwayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _010HallwayIcon(props: _010HallwayIconProps) {
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

      <path
        d={
          "M12.367 16.939l-7.2-2.88A1.8 1.8 0 002.7 15.732v34.167l-2.452 2.58A.9.9 0 00.9 54h52.2a.9.9 0 00.653-1.52L51.3 49.899V15.732a1.8 1.8 0 00-2.467-1.673l-7.2 2.88a1.79 1.79 0 00-1.133 1.673V38.53l-3.6-3.79V13.95L53.634 1.62A.9.9 0 0052.566.18L35.706 12.6h-17.41L1.434.18A.9.9 0 00.367 1.625L17.1 13.954V34.74l-3.6 3.789V18.612a1.789 1.789 0 00-1.133-1.673zM4.5 15.73l7.2 2.88v10.53l-1.302.65a.9.9 0 00.805 1.612l.497-.246v9.27l-7.2 7.578V15.73zM7.963 52.2l11.97-12.6h14.136l11.97 12.6H7.963zm40.558 0l-13.41-14.12a.9.9 0 00-.656-.28h-14.91a.9.9 0 00-.652.28L5.479 52.2H2.996L18.386 36h17.227l15.39 16.2h-2.482zM30.601 27h-.9a.9.9 0 000 1.8h.9v5.4h-7.2V19.8h7.2V27zm11.7-8.389l7.2-2.88v15.21l-.498-.25a.9.9 0 10-.805 1.612l1.302.653v15.048l-7.2-7.579V18.611zM18.9 14.4h16.2v19.8h-2.7V19.8a1.8 1.8 0 00-1.8-1.8h-7.2a1.8 1.8 0 00-1.8 1.8v14.4h-2.7V14.4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M27 7.2c2.482 0 4.5-1.615 4.5-3.6S29.482 0 27 0c-2.48 0-4.5 1.615-4.5 3.6s2.02 3.6 4.5 3.6zm0-5.4c1.464 0 2.7.824 2.7 1.8 0 .976-1.236 1.8-2.7 1.8-1.463 0-2.7-.824-2.7-1.8 0-.976 1.237-1.8 2.7-1.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _010HallwayIcon;
/* prettier-ignore-end */
