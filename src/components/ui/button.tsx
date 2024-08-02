import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import Spinner from "../base/Spinner";

const colors = {
  primary: "#310A31",
  secondary: "#AE4E09",
  "secondary-dark": "#7D462A",
  accent: "#FEF5EE",
  dark: "#2B2B2C",
  error: "#EB3428",
  "error-dark": "#9D231B",
  "error-light": "#FDEBEA",
  white: "#FFFF",
} as const;

const sizes = {
  default: "h-11 px-4 py-2 w-fit",
  small: "h-10 rounded-md px-3 w-fit",
  xsmall: "h-9 !text-xs rounded-md px-2.5 w-fit",
  large: "h-12 rounded-md px-8 w-fit",
  icon: "h-10 w-10",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  color?: keyof typeof colors;
  variant?: "fill" | "text" | "outline";
  size?: keyof typeof sizes;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  bold?: boolean;
  fab?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "fill",
      size = "default",
      color = "primary",
      textColor = "black",
      loading = false,
      asChild = false,
      block = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const mainColor = colors[color];
    const lightShade = ["white", "accent"];
    const loaderColor =
      variant == "fill" && !lightShade.includes(color)
        ? "white"
        : lightShade.includes(color)
        ? textColor
        : mainColor;

    const variants = {
      outline: {
        background: "transparent",
        color: lightShade.includes(color) ? textColor : mainColor,
        border: `1px solid ${mainColor}`,
      },
      text: {
        background: "transparent",
        color: lightShade.includes(color) ? textColor : mainColor,
      },
      fill: {
        background: mainColor,
        color: lightShade.includes(color) ? textColor : colors["accent"],
      },
    };

    const variantStyles = variants[variant];

    const buttonStyles = cn(
      sizes[size],
      props.bold ? "font-medium" : "",
      block ? "max-w-full min-w-full w-full" : "",
      loading ? "pointer-events-none" : "",
      props.disabled ? "opacity-60" : "hover:opacity-90",
      "relative text-sm overflow-hidden active:opacity-90 text-center rounded-lg flex items-center justify-center gap-2",
      props.fab ? "w-12 h-12 rounded-full" : "",
      className
    );

    return (
      <Comp className={buttonStyles} style={variantStyles} ref={ref} {...props}>
        {!loading ? (
          props.children
        ) : (
          <div>
            <span className="opacity-0">{props.children}</span>
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <Spinner color={loaderColor} />
            </div>
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
