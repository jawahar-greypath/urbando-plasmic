// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _014OpeningWindowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _014OpeningWindowIcon(props: _014OpeningWindowIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 53"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.8 5.693H12.827L2.654.216A1.8 1.8 0 000 1.8v49.186a1.8 1.8 0 002.653 1.584l3.488-1.877h41.718l3.487 1.877A1.8 1.8 0 0054 50.986V1.8A1.8 1.8 0 0051.347.216L41.173 5.693H28.8zm19.8 19.8h-6.3v-7.046l6.3-1.827v8.873zm0 10.673l-6.3-1.827v-7.046h6.3v8.873zm-6.3.047l6.3 1.827v6.998l-6.3-3.012v-5.813zm6.3-21.467l-6.3 1.827V10.76l6.3-3.012v6.998zm-8.1-4.553v35.1H29.7v-.9a2.7 2.7 0 00-5.4 0v.9H13.5v-37.8h10.8v.9a2.7 2.7 0 105.4 0v-.9h10.8v2.7zm-12.6 35.1h-1.8v-.9a.9.9 0 011.8 0v.9zm-22.5-18h6.3v7.046l-6.3 1.827v-8.873zm0-10.673l6.3 1.827v7.046H5.4V16.62zm6.3-.047l-6.3-1.827V7.748l6.3 3.012v5.813zM5.4 38.04l6.3-1.827v5.813l-6.3 3.012V38.04zM27.9 7.493v.9a.9.9 0 11-1.8 0v-.9h1.8zM1.8 50.986V1.8l9.9 5.333v1.634l-6.812-3.26a.9.9 0 00-1.288.816v40.14a.9.9 0 001.288.81L11.7 44.02v1.632l-9.9 5.333zm7.684-2.093l3.343-1.8h28.35l3.342 1.8H9.484zM52.2 1.8v49.186l-9.9-5.333V44.02l6.812 3.257a.9.9 0 001.288-.815V6.323a.9.9 0 00-1.288-.81L42.3 8.765V7.133L52.2 1.8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.3 14.693a.9.9 0 00-1.8 0c0 9.324 0 17.376-6.616 19.857a.9.9 0 10.632 1.686C24.3 33.316 24.3 24.271 24.3 14.693zm5.4 0c0 9.578 0 18.624 7.784 21.543a.9.9 0 10.632-1.687C31.5 32.07 31.5 24.018 31.5 14.694a.9.9 0 00-1.8 0zm-1.8 0a.9.9 0 00-1.8 0v15.3a.9.9 0 101.8 0v-15.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _014OpeningWindowIcon;
/* prettier-ignore-end */
