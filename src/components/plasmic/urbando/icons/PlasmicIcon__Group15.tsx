// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g opacity={".67"} fill={"currentColor"}>
        <path
          d={"M19.063 16a3.062 3.062 0 11-6.125 0 3.062 3.062 0 016.124 0z"}
        ></path>

        <path
          d={
            "M23.162 10.582a2.847 2.847 0 00-.687-1.057 2.845 2.845 0 00-1.056-.687c-.324-.126-.81-.276-1.706-.316-.97-.044-1.26-.054-3.713-.054-2.453 0-2.744.01-3.713.053-.895.041-1.382.191-1.706.317a2.84 2.84 0 00-1.056.687c-.305.297-.54.657-.687 1.056-.126.324-.276.81-.317 1.707-.044.968-.053 1.259-.053 3.712 0 2.453.01 2.744.053 3.713.041.896.19 1.382.317 1.706.147.399.382.76.687 1.056.296.305.657.54 1.056.687.324.126.81.276 1.706.317.97.044 1.26.053 3.713.053 2.453 0 2.744-.01 3.712-.053.896-.041 1.383-.19 1.707-.317a3.042 3.042 0 001.743-1.743c.126-.324.276-.81.317-1.706.044-.97.053-1.26.053-3.713 0-2.453-.01-2.744-.053-3.712-.041-.896-.19-1.383-.317-1.707zM16 20.718a4.718 4.718 0 110-9.436 4.718 4.718 0 010 9.436zm4.904-8.52a1.102 1.102 0 110-2.205 1.102 1.102 0 010 2.205z"
          }
        ></path>

        <path
          d={
            "M16 0C7.165 0 0 7.165 0 16s7.165 16 16 16 16-7.165 16-16S24.835 0 16 0zm9.132 19.788c-.044.978-.2 1.646-.427 2.23a4.698 4.698 0 01-2.687 2.687c-.584.227-1.252.382-2.23.427-.98.045-1.293.055-3.788.055s-2.808-.01-3.788-.055c-.978-.045-1.646-.2-2.23-.427a4.501 4.501 0 01-1.627-1.06 4.504 4.504 0 01-1.06-1.627c-.227-.584-.382-1.252-.427-2.23-.045-.98-.056-1.293-.056-3.788s.011-2.808.056-3.788c.044-.978.2-1.646.427-2.23a4.5 4.5 0 011.06-1.627 4.5 4.5 0 011.627-1.06c.584-.227 1.252-.382 2.23-.427.98-.045 1.293-.056 3.788-.056s2.808.011 3.788.056c.978.045 1.646.2 2.23.427.613.23 1.168.592 1.627 1.06.468.459.83 1.014 1.06 1.627.227.584.383 1.252.427 2.23.045.98.055 1.293.055 3.788s-.01 2.808-.055 3.788z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */
