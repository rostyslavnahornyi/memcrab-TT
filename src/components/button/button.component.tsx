import styles from "./styles.module.css";
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = ({
  children,
  dangerous,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      style={{ backgroundColor: dangerous ? "#ff5c5c" : "" }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export { Button };
