'use client'

import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?:boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: R = () => {
  return (
    <button></button>
  )
}

export default Button