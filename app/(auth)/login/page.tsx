"use client";

import * as z from "zod";
import { useState } from "react";
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
import { toast } from "sonner";
import DroparLogo from "@/components/ui/logo/dropar-logo";
import UnionIcon from "@/components/ui/icons/union-icon";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    toast.success("Successfully logged in!");
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="border-0 shadow-lg w-[358px] mb-[24px]">
        <DroparLogo />

        <CardHeader className="flex flex-col">
          <CardTitle className="text-2xl font-bold text-foreground-rgb">
            Faça login na sua conta
          </CardTitle>
          <CardDescription>
            Digite seu e-mail e senha para entrar
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[24px]"
            >
              <div className="space-y-[16px]">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email<span className="text-primary-light"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu e-mail" {...field} />
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
                      <FormLabel className="flex items-center justify-between hover:ring-0">
                        <div>
                          Senha<span className="text-primary-light"> *</span>
                        </div>

                        <div className="text-sm text-muted-foreground hover:underline">
                          <Link
                            href="/reset-password"
                            className="text-primary-light"
                          >
                            Esqueceu a senha?
                          </Link>
                        </div>
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Digite sua senha"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <div className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link
              href="/welcome"
              className="text-primary-light hover:underline"
            >
              Inicie um teste gratuito de 7 dias
            </Link>
          </div>
        </CardFooter>
      </Card>

      <UnionIcon />
      <div className="mt-6 text-center text-muted-foreground">
        <span>Ao entrar na sua conta, você está aceitando os </span>
        <br />
        <Link
          href="/help"
          className="text-primary-light underline hover:text-primary-base"
        >
          Termos de Serviço
        </Link>
        <span> e </span>
        <Link
          href="/help"
          className="text-primary-light underline hover:text-primary-base"
        >
          Política de Privacidade
        </Link>
        <span> da Dropar.</span>
      </div>
    </div>
  );
}
