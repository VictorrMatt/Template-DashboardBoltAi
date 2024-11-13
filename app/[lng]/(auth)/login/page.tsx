"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/navigation/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { toast } from "sonner";

// Adicionar Suspense caso seja necessário para garantir carregamento de tradução
import { Suspense } from "react";

export default function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t, isLoading: isTranslationLoading } = useTranslation(lng, "common");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslationReady, setIsTranslationReady] = useState(false);

  // Aguarda carregamento da tradução para evitar erros de hidratação
  useEffect(() => {
    if (!isTranslationLoading) {
      setIsTranslationReady(true);
    }
  }, [isTranslationLoading]);

  // Definição do schema de validação usando `zod`
  const formSchema = z.object({
    email: z.string().email(t("validation.invalid_email")),
    password: z.string().min(8, t("validation.password_min")),
  });

  // Configuração do formulário com `react-hook-form`
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(t("success.login"));
      router.push(`/${lng}/dashboard`);
    } catch (error) {
      toast.error(t("error.login"));
    } finally {
      setIsLoading(false);
    }
  }

  // Exibe um carregador enquanto a tradução ainda está carregando
  if (!isTranslationReady) {
    return <div>Loading translations...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="border-0 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-foreground-rgb">
            {t("title")}
          </CardTitle>
          <CardDescription>{t("enter_credentials")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("email_placeholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("password")}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? t("loading") : t("sign_in")}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground">
            <Link
              href={`/${lng}/reset-password`}
              className="hover:text-primary"
            >
              {t("forgot_password")}
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            {t("no_account")}{" "}
            <Link href={`/${lng}/register`} className="hover:text-primary">
              {t("sign_up")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Suspense>
  );
}
