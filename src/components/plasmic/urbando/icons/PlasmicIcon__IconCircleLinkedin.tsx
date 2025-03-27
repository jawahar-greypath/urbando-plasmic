// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCircleLinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCircleLinkedinIcon(props: IconCircleLinkedinIconProps) {
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
          "M16.046 0c2.226 0 4.312.422 6.257 1.267a16.529 16.529 0 015.105 3.435 16.13 16.13 0 013.455 5.087c.845 1.945 1.267 4.03 1.267 6.257 0 2.226-.422 4.312-1.267 6.257a16.362 16.362 0 01-3.455 5.105 16.362 16.362 0 01-5.105 3.455c-1.945.845-4.03 1.267-6.257 1.267-2.227 0-4.312-.422-6.257-1.267a16.13 16.13 0 01-5.087-3.455 16.53 16.53 0 01-3.435-5.105C.422 20.358 0 18.273 0 16.046c0-2.227.422-4.312 1.267-6.257a16.312 16.312 0 013.435-5.087c1.446-1.446 3.142-2.59 5.087-3.435C11.734.422 13.819 0 16.046 0zm-4.99 12.053H7.025v13.052h4.03V12.053zM9.02 11.018c.563 0 1.043-.192 1.44-.576.396-.384.595-.857.595-1.42s-.199-1.036-.595-1.42a1.994 1.994 0 00-1.44-.576 1.93 1.93 0 00-1.42.576 1.93 1.93 0 00-.576 1.42c0 .563.192 1.036.576 1.42a1.93 1.93 0 001.42.576zm16.084 6.526c0-.921-.256-1.823-.768-2.706-.511-.883-1.177-1.555-1.996-2.016-.742-.41-1.606-.627-2.59-.652-.986-.026-1.888.14-2.707.499v-.614h-3.992v13.051h3.992v-7.984l1.689-.806c.205-.103.48-.154.825-.154.346 0 .62.064.826.192.153.077.307.243.46.499.154.256.23.486.23.69v7.563h4.031v-7.562z"
        }
        fill={"currentColor"}
        opacity={".67"}
      ></path>
    </svg>
  );
}

export default IconCircleLinkedinIcon;
/* prettier-ignore-end */
