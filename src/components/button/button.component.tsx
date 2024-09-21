import styles from "./styles.module.css";
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  dangerous,
  onClick,
  ...props
}) => (
  <button
    {...props}
    onClick={onClick}
    className={`${styles.button} ${dangerous ? styles.dangerousVariant : ""}`}
  >
    {children}
  </button>
);

export { Button };
