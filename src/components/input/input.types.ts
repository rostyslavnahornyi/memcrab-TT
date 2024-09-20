import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  onChange: (value: string) => void;
}

export type { InputProps };
