import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = Omit<ComponentPropsWithoutRef<"button">, "className"> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", type = "button", children, ...rest }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}