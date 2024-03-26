import { MouseEventHandler } from 'react';

interface ButtonProps {
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
