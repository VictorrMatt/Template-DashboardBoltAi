import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "@/app/i18n";

export function usePageTranslation(lng: string) {
  const [translations, setTranslations] = useState<{
    t: (key: string) => string;
  }>({
    t: (key: string) => key, // Default fallback that returns the key
  });

  useEffect(() => {
    const initTranslations = async () => {
      try {
        const { t } = await useTranslation(lng);
        setTranslations({ t });
      } catch (error) {
        console.error("Failed to load translations:", error);
        toast.error("Failed to load translations");
      }
    };

    initTranslations();
  }, [lng]);

  return translations;
}
