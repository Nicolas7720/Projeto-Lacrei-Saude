import React, {
  ButtonHTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
} from "react";

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export interface HeaderComposition {
  Root: React.FC<{ children: ReactNode }>;
  Logo: React.FC<LogoProps>;
  Nav: React.FC<{ children: ReactNode }>;
  Button: React.FC<ButtonsProps>;
}
