import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "average" | "big";
  children: ReactNode;
}
