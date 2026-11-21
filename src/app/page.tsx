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

      <Input label="Email" type="email" placeholder="email@exemplo.com" />
      <Input label="Título da pergunta" hint="Imagina que estejas a perguntar a um colega." />
      <Input label="Nome de utilizador" error="Este nome já está em uso." defaultValue="Soba_Dev" />
      <Input label="Código de convite" disabled defaultValue="SOBA-2026" />
      <Button>Enviar</Button>
    </main>
  );
}