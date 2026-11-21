import { useId } from "react";
import type { ComponentPropsWithRef } from "react";
import styles from "./Input.module.css";

type InputProps = Omit<ComponentPropsWithRef<"input">, "className" | "id"> & {
    label: string;
    hint?: string;
    error?: string;
};

export function Input({ label, hint, error, ...rest }: InputProps) {
    const id = useId();
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;
    const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(" ");

    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            {hint ? (
                <p id={hintId} className={styles.hint}>{hint}</p>
            ) : null}
            <input
                {...rest}
                id={id}
                className={styles.input}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy || undefined}
            />
            {error ? (
                <p id={errorId} className={styles.error}>
                    {error}
                </p>
            ) : null}
        </div>
    );
}