import React from "react";
import { InputProps } from "./input.types";
import styles from "./styles.module.css";

const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  return (
    <input
      {...props}
      type="text"
      onChange={({ target: { value } }) => onChange(value)}
      className={styles.input}
    />
  );
};

export { Input };
