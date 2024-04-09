// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 61 60"}
      fill={"none"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "d-block mx-auto fill-action-5 js-on-edit"
      )}
      sfLabel={"SVG icon"}
      sfType={"svg"}
      sfUid={"13"}
      draggable={"true"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M42.692.255a1.875 1.875 0 01.851 2.175L36.79 24.375h12.462a1.875 1.875 0 011.365 3.161l-30 31.875a1.875 1.875 0 01-3.158-1.837l6.754-21.95H11.751a1.874 1.874 0 01-1.365-3.16l30-31.876a1.875 1.875 0 012.306-.337v.004zM16.09 31.875h10.66a1.875 1.875 0 011.793 2.426l-5.13 16.661 21.495-22.837H34.251a1.875 1.875 0 01-1.793-2.427l5.13-16.66L16.09 31.874z"
        }
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
