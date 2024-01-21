import React, { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
  as?: "button" | "a";
  color?: "primary" | "secondary";
  variant?: "contained";
  props?: any;
};

const Button = ({
  children,
  color = "primary",
  as = "button",
  props = {},
}: Props) => {
  return createElement(
    as,
    {
      style: {
        backgroundColor:
          color !== "primary" && color !== "secondary" ? color : undefined,
      },
      className: `border-none cursor-pointer text-lg font-medium rounded-lg px-6 py-2 hover:no-underline ${
        color === "primary"
          ? "bg-primary text-gray-50 hover:text-gray-50"
          : "bg-slate-200 text-gray-950 hover:text-gray-950"
      }`,
      ...props,
    },
    children
  );
};

export default Button;
