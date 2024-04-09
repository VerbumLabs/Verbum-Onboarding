// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "fill-action-1 d-block mx-auto js-on-edit"
      )}
      sfLabel={"SVG icon"}
      sfType={"svg"}
      sfUid={"9"}
      draggable={"true"}
      viewBox={"0 0 60 60"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.563 50.625c.626-1.249.937-3.124.937-5.625h15c0 2.501.311 4.376.938 5.625h2.812a1.875 1.875 0 110 3.75h-22.5a1.875 1.875 0 110-3.75h2.813z"
        }
      ></path>

      <path
        clipRule={"evenodd"}
        d={
          "M52.466 11.25H7.5c-1.219 0-1.883.293-2.258.544-.411.287-.74.677-.952 1.132a5.476 5.476 0 00-.54 2.111V37.5c0 1.219.293 1.883.544 2.258.262.393.637.704 1.132.952a5.491 5.491 0 002.018.536l.093.004H52.5c1.219 0 1.883-.292 2.258-.544.411-.287.74-.677.952-1.132a5.492 5.492 0 00.536-2.018l.004-.093V15c0-1.219-.292-1.883-.544-2.258a2.839 2.839 0 00-1.132-.952 5.475 5.475 0 00-2.111-.54h.003zM52.5 7.5h-45C0 7.5 0 15 0 15v22.5C0 45 7.5 45 7.5 45h45c7.5 0 7.5-7.5 7.5-7.5V15c0-7.5-7.5-7.5-7.5-7.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
