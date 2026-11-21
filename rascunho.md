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
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
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




.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.label {
  font-weight: var(--weight-bold);
}

.hint {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.input {
  width: 100%;
  min-height: var(--size-touch-target);
  padding: var(--space-2) var(--space-3);
  border: var(--border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: var(--shadow-sm);
  font-family: inherit;
  font-size: var(--text-md);
}

.error {
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--weight-bold);
}



import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "2rem",
        maxWidth: "24rem",
      }}
    >
      <Input label="Email" type="email" placeholder="tu@exemplo.com" />
      <Input label="Título da pergunta" hint="Sê específico, como se perguntasses a um colega." />
      <Input label="Nome de utilizador" error="Este nome já está em uso." defaultValue="germano" />
      <Input label="Código de convite" disabled defaultValue="SOBA-2026" />
      <Button>Enviar</Button>
    </main>
  );
}