'use client'
interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?:boolean;
    small?: 
}

const Button = () => {
  return (
    <button></button>
  )
}

export default Button