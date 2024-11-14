"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BackgroundEffects } from "../../../components/ui/background/background-effects";
import { Title } from "@/components/ui/typography/title";
import DroparLogo from "@/components/ui/logo/dropar-logo";

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-900">
      <BackgroundEffects />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white text-center tracking-wider"
        >
          <div className="flex gap-2">
            <Title variant={"h5"} label="Receba as boas-vindas da" />
            <DroparLogo />
          </div>
        </motion.h1>
      </div>
    </div>
  );
}
