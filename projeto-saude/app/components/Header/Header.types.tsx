import React, {
  ButtonHTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export interface HeaderComposition {
  Root: React.FC<{ children: ReactNode }>;
  Nav: React.FC<{ children: ReactNode }>;
  Button: React.FC<ButtonsProps>;
}
