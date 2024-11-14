"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Chame uma função para realizar o logout, como apagar um cookie de sessão.
    // Exemplo:
    /* await fetch("/api/logout", { method: "POST" }); */

    // Redirecione o usuário para a página de login
    router.push("/login");
  };

  return <Button onClick={handleLogout}>Sair</Button>;
};

export { LogoutButton };
