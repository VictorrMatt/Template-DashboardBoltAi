"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter para navegar entre páginas
import { BackgroundEffects } from "../../../components/ui/background/background-effects";
import { Title } from "@/components/ui/typography/title";
import DroparLogo from "@/components/ui/logo/dropar-logo";
import UnionIcon from "@/components/ui/icons/union-icon";

export default function OnboardingFinish() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  // Controlar as mensagens
  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(1); // Passa para a segunda mensagem após 3 segundos
    }, 3000); // Exibe a segunda mensagem após 3 segundos

    return () => clearTimeout(timer);
  }, []);

  // Navegar para outra tela após a exibição das mensagens
  useEffect(() => {
    if (step === 1) {
      const redirectTimer = setTimeout(() => {
        router.push("/dashboard"); // Redireciona para a página do dashboard após a segunda mensagem
      }, 5000); // Aguardar 5 segundos após a segunda mensagem

      return () => clearTimeout(redirectTimer);
    }
  }, [step, router]); // Dependência em 'step' para garantir que a navegação só ocorra após a segunda mensagem

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-900">
      <BackgroundEffects />

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        <UnionIcon />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Exibindo a primeira mensagem com animação */}
        {step === 0 && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-neutral-0 text-center tracking-wider"
          >
            <DroparLogo />
            <Title
              variant={"h5"}
              label="Finalizando Onboarding..."
              className="mt-4"
            />
          </motion.h1>
        )}

        {/* Exibindo a segunda mensagem após o intervalo */}
        {step === 1 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold text-neutral-0 text-center tracking-wider mt-6"
          >
            <DroparLogo />
            <Title
              variant={"h5"}
              label="Aguarde um momento, estamos configurando tudo para você..."
              className="mt-4"
            />
          </motion.h2>
        )}
      </div>
    </div>
  );
}
