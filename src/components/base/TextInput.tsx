"use client";

import { forwardRef, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type TextInputType = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  error?: string;
  hint?: string;
  inputClasses?: string;
  format?: boolean;
  righIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
};

const TextInput = forwardRef<HTMLInputElement, TextInputType>((props, ref) => {
  const [focus, setFocus] = useState(false);
  const {
    type = "text",
    inputMode = "text",
    error = false,
    disabled = false,
    placeholder,
    hint,
    format = false,
    value,
    id,
    name,
    className,
    inputClasses,
    leftIcon,
    righIcon,
    leftIconClick,
    rightIconClick,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const inputContainerStyles = cn(
    focus ? " border-primary" : "border border-dark-100",
    disabled ? "pointer-events-none opacity-60" : "",
    error ? " border-error" : "",
    "h-[44px] border bg-white px-3 py-2 rounded-lg  text-sm flex gap-2 items-center",
    className
  );

  const inputStyles = cn(
    "text-[16px] sm:text-sm h-full w-full font-light  caret-primary text-dark  leading-2 focus:outline-none block appearance-none",
    inputClasses
  );

  const computeValue = useMemo(() => {
    if (!format) return value;

    //Remove all negative value and alphabets
    let strValue = value + "";
    const parsedValue = parseFloat(strValue.replace(/[^0-9.]/g, ""));
    strValue = parsedValue.toLocaleString();

    return !isNaN(parsedValue) ? `₦${strValue}` : "";
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!format) return onChange && onChange(e);

    let val = e.target.value.replace(/[^0-9.]/g, ""); //remive all alphabet from vale

    //check if the first character is the naira sign then remove it
    const firstChar = val.charAt(0);
    if (firstChar === "₦") {
      val = val.substring(1);
    }

    //Remove all ,
    val = val.split(",").join("");

    //emit the new value
    onChange &&
      onChange({
        target: { value: val, name },
      } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className={inputContainerStyles}>
          {leftIcon && (
            <div
              onClick={leftIconClick}
              className="text-sm text-dark cursor-pointer "
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={type}
            name={name}
            inputMode={inputMode}
            value={computeValue}
            onChange={handleChange}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setFocus(true);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e);
              setFocus(false);
            }}
            className={inputStyles}
            placeholder={placeholder}
          />
          {righIcon && (
            <div
              onClick={rightIconClick}
              className="text-sm text-dark cursor-pointer"
            >
              {righIcon}
            </div>
          )}
        </div>
        <div className="text-xs font-light mt-1 ml-1">
          {error && <span className=" text-error  ">{error} </span>}
          {hint && !error && (
            <span className=" text-secondary-dark font-light">{hint} </span>
          )}
        </div>
      </div>
    </>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
