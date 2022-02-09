import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  quantity: number;
  selected: boolean;
}

export function Button({ name, quantity, selected, ...rest }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button {...selected} {...rest}>
        {name}
        <strong>{quantity}</strong>
      </button>
    </div>
  );
}
