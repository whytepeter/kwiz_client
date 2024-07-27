import moment from "moment";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
  // toast.success(message);
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
