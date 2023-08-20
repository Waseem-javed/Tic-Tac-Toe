import { MouseEventHandler } from "react";

export interface IButtonProps {
  value: string | null;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
