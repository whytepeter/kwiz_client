import moment from "moment";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { Theme } from "@/types/quiz";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAmount = (amount: number) => {
  if (isNaN(amount) || amount === 0) {
    return "₦0.00";
  }
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};

export const formatDate = (
  arg: Date | string | any,
  style = "Do MMM, YYYY",
  pastTime = false
): string => {
  if (!arg) return "N/A";
  let date = arg as Date;

  if (!pastTime) return moment(date).format(style);

  return moment(date).fromNow();
};

export const processNumber = (phoneNumber: string) => {
  if (phoneNumber) {
    let phone = phoneNumber.replace(/\s+/g, ""); //Remove spaces
    let firstDigit = phone.charAt(0);

    if (firstDigit == "0") {
      return "+234" + phone.slice(1);
    } else if (firstDigit == "2") {
      return "+2" + phone.slice(1);
    } else if (firstDigit == "+") {
      return phone;
    }
  }
  return "";
};

export const validateEmail = (email: string) => {
  if (email) {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }
};

export const validatePassword = (password: string) => {
  if (password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])[\s\S]{8,}$/;
    return regex.test(password);
  }
};

export const validatePhone = (phone: string) => {
  if (phone.length) {
    if (phone.charAt(0) == "0" && phone.length !== 11) {
      return false;
    } else if (phone.charAt(0) == "2" && phone.length !== 13) {
      return false;
    } else {
      return true;
    }
  }
};

export const copyText = async (text: string, message: string = "Copied") => {
  await navigator.clipboard.writeText(text);
  toast.success(message);
};

export const moveCenter = (
  e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
): void => {
  const element = e.target as HTMLElement;
  if (!element) return;

  if ("scrollIntoView" in element) {
    (element as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

export const initials = (name: string): string => {
  if (!name) return "N/A";

  // Split the name into parts
  const parts = name.trim().split(/\s+/);

  // Get the first letter of the first and second parts
  const firstInitial = parts[0]?.charAt(0).toUpperCase() || "";
  const secondInitial = parts[1]?.charAt(0).toUpperCase() || "";

  return `${firstInitial}${secondInitial}`;
};

export const generateUniqueId = (length: number = 10): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export function hexToRgb(hex: string): string {
  if (!hex) return "";
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `${r}, ${g}, ${b}`; // Return as "r, g, b"
}


export function isLightShade(hex: string): boolean {
  if (!hex) return false;
  // Remove the hash if present
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return the shade
  return luminance > 0.7 ? true : false;
}

export function quizTheme({ colors, font }: Theme) {
  const color = colors?.buttonContainer
  const background = colors?.buttonContainer
    ? `rgba(${hexToRgb(colors.buttonContainer)}, 0.2")`
    : "bg-white/80"

  return {
    color,
    background,
    borderColor: color,
  }

}