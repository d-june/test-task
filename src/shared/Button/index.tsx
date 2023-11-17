import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  onClickHandler: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClickHandler }) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
