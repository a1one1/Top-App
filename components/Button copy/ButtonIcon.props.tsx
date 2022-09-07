import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "../../static/Up/up.svg";
import close from "../../static/Up/close.svg";
import menu from "../../static/Up/menu.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconName;
  appearance: "primary" | "white";
}
