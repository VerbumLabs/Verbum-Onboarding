// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 60 60"}
      fill={"none"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "d-block mx-auto fill-action-8 mb-6 js-on-edit"
      )}
      sfLabel={"SVG icon"}
      sfType={"svg"}
      sfUid={"28"}
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
          "M20.412 7.466c-3.43.922-6.836 1.925-10.219 3.008a1.702 1.702 0 00-1.18 1.372c-2 14.614 2.613 25.279 8.114 32.303 2.76 3.525 5.749 6.135 8.239 7.849 1.249.855 2.347 1.477 3.214 1.875.435.198.787.333 1.057.412.12.038.24.068.364.09.026-.004.142-.019.364-.086.27-.083.622-.218 1.057-.416.863-.398 1.969-1.02 3.214-1.875a38.24 38.24 0 008.239-7.85c5.5-7.023 10.113-17.688 8.115-32.302a1.703 1.703 0 00-1.182-1.372c-2.347-.75-6.307-1.973-10.218-3.008-3.998-1.054-7.677-1.841-9.59-1.841-1.912 0-5.587.787-9.588 1.841zm-.96-3.622c3.911-1.035 8.063-1.969 10.549-1.969 2.482 0 6.637.934 10.549 1.969A228.13 228.13 0 0150.945 6.9c1.98.63 3.472 2.336 3.76 4.44 2.15 15.739-2.834 27.401-8.875 35.119a41.97 41.97 0 01-9.068 8.625 26.03 26.03 0 01-3.776 2.197c-1.013.465-2.093.844-2.985.844-.893 0-1.973-.379-2.985-.844a25.9 25.9 0 01-3.776-2.197 41.966 41.966 0 01-9.064-8.625C8.127 38.74 3.147 27.079 5.296 11.34A5.453 5.453 0 019.057 6.9c3.44-1.1 6.907-2.12 10.395-3.056z"
        }
      ></path>

      <path
        d={"M35.625 24.375a5.625 5.625 0 11-11.25 0 5.625 5.625 0 0111.25 0z"}
      ></path>

      <path
        d={
          "M27.792 30.128a1.875 1.875 0 011.848-1.564h.585a1.874 1.874 0 011.846 1.553l1.3 7.5a1.874 1.874 0 01-1.848 2.194h-3.131a1.875 1.875 0 01-1.849-2.183l1.249-7.5z"
        }
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
