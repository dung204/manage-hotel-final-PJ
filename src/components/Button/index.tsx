import React from "react";
import { ButtonStyle } from "./Button.style";
import clsx from "clsx";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "primary" | "secondary" | "danger";
}

const Button = ({ children, className, btnStyle, ...rest }: IButtonProps) => {
  return (
    <ButtonStyle {...rest} className={clsx(className, btnStyle)}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
