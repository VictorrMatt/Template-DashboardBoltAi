"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import { Textarea } from "@/components/ui/form/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/layout/card";
import { toast } from "sonner";
import StepIndicator from "@/components/ui/steps/StepIndicator";
import ProfileForm from "@/components/ui/steps/ProfileForm";
import BillingForm from "@/components/ui/steps/BillingForm";
import ReferralForm from "@/components/ui/steps/ReferralForm";
import StoreForm from "@/components/ui/steps/StoreForm";
import { Title } from "@/components/ui/typography/title";
import { Paragraph } from "@/components/ui/typography/paragraph";
import { Label } from "@/components/ui/typography/label";
import UnionIcon from "@/components/ui/icons/union-icon";
import { BackgroundEffects } from "@/components/ui/background/background-effects";
import { GradElement } from "@/components/ui/icons/icons";

// Separate schemas for each step
const stepSchemas = {
  0: z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(8, "Password must be at least 8 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),
  1: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
  }),
  2: z.object({
    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters"),
    companySize: z.string().min(1, "Please enter company size"),
  }),
  3: z.object({
    role: z.string().min(2, "Role must be at least 2 characters"),
    bio: z.string().min(10, "Bio must be at least 10 characters"),
  }),
};

const steps = [
  {
    id: "profile",
    title: "Meu Perfil",
    titleContent: "Bem vindo a Dropar",
    fields: ["email", "password", "confirmPassword"],
    description: "Vamos começar configurando a sua conta",
    component: ProfileForm,
  },
  {
    id: "billing",
    title: "Faturamento Mensal",
    titleContent: "Qual é a faixa de faturamento mensal da sua empresa?",
    fields: ["fullName", "phoneNumber"],
    description: "Ajude-nos a entender o perfil da sua empresa",
    component: BillingForm,
  },
  {
    id: "referral",
    title: "Como nos conheceu",
    titleContent: "Como você conheceu a Dropar?",
    fields: ["companyName", "companySize"],
    description:
      "Selecione uma das opções abaixo para saber onde você nos encontrou",
    component: ReferralForm,
  },
  {
    id: "connect",
    title: "Conectar sua loja",
    titleContent: "Conecte sua loja para importar produtos com facilidade",
    fields: ["role", "bio"],
    description:
      "Selecione uma plataforma abaixo para conectar sua loja e acessar todas as funcionalidades da Dropar.",
    component: StoreForm,
  },
];

// Complete form schema for final submission
const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters"),
    companySize: z.string().min(1, "Please enter company size"),
    role: z.string().min(2, "Role must be at least 2 characters"),
    bio: z.string().min(10, "Bio must be at least 10 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function UnifiedOnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    router.push("/onboarding-finish");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
      companyName: "",
      companySize: "",
      role: "",
      bio: "",
    },
  });

  const handleNextStep = async () => {
    const currentStepSchema = stepSchemas[step as keyof typeof stepSchemas];
    const currentStepFields = steps[step].fields;

    // Get only the current step's values
    const stepValues = Object.fromEntries(
      currentStepFields.map((field) => [
        field,
        form.getValues(field as keyof z.infer<typeof formSchema>),
      ])
    );

    // Validate only the current step's fields
    const validationResult = await currentStepSchema.safeParseAsync(stepValues);

    if (!validationResult.success) {
      // If validation fails, show errors
      validationResult.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as any, {
          type: "manual",
          message: issue.message,
        });
      });
      return;
    }

    if (step < steps.length - 1) {
      // If this is the registration step, show a success message
      if (step === 0) {
        toast.success("Account created successfully!");
      }
      setStep(step + 1);
    } else {
      // Final submission
      const allValues = form.getValues();
      const finalValidation = await formSchema.safeParseAsync(allValues);

      if (finalValidation.success) {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        toast.success("Onboarding completed!");
        router.push("/dashboard");
      }
    }
  };

  const [currentStep, setCurrentStep] = useState(0);

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((curr) => curr + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((curr) => curr - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900">
      <BackgroundEffects />

      <CardHeader className="bg-customGrayHead backdrop-blur-sm backdrop-filter-customBlurHead py-6 sticky top-0 z-50">
        <div className="container mx-auto px-11">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>
      </CardHeader>

      <div className="flex flex-col items-center justify-center mt-[-20px] relative">
        <div className="absolute z-0 top-24 inset-0 flex items-center justify-center">
          <GradElement />
        </div>

        <Card className="mx-auto max-w-3xl backdrop-blur-[8px]">
          <CardContent className="shadow-neutral-0 mb-[29px]">
            <div className="justify-center items-center flex flex-col">
              <UnionIcon />
              <Title
                variant={"h5"}
                label={steps[currentStep].titleContent}
                className="text-2xl font-bold text-neutral-0 mt-2 z-10"
              />

              <Paragraph
                variant={"medium"}
                label={steps[currentStep].description}
                className=" flex items-center justify-center z-10 text-center text-neutral-300 mt-1 break-words max-w-[616px]"
              />
            </div>
          </CardContent>

          <div className="bg-customGray border-[1px] border-[var(--sds-size-stroke-border) solid var(--neutral-700, #1F1F2E)] backdrop-blur-sm backdrop-filter-customBlur rounded-xl shadow-xl px-8 py-12">
            <CurrentStepComponent />
          </div>

          <div className="w-[293px] h-[7.48px] bg-[#1E2025A3] rounded-[0px_0px_11.214px_11.214px] mx-auto backdrop-blur-sm shadow-xl"></div>
        </Card>
      </div>

      <div className="fixed bottom-8 right-8 flex gap-4">
        {currentStep > 0 && (
          <Button
            onClick={handlePrevious}
            className="flex items-center p-3 rounded-lg bg-neutral-900 border-neutral-600 border-[1px] text-neutral-0 hover:bg-others-900 hover:border-others-900 shadow-lg transition-transform duration-150 active:scale-95"
          >
            <Label variant={"small"} label="Voltar" />
          </Button>
        )}

        {currentStep === steps.length - 1 ? (
          <Button
            className="flex items-center w-[126px] px-6 pr-4 py-[10px] rounded-lg text-sm font-medium text-neutral-0 shadow-lg transition-transform duration-150 active:scale-95"
            onClick={handleClick}
          >
            <Label variant={"underline1"} label="Finalizar" />
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="flex items-center w-[126px] px-6 pr-4 py-[10px] rounded-lg text-sm font-medium text-neutral-0 shadow-lg transition-transform duration-150 active:scale-95"
          >
            <Label variant={"underline1"} label="Próximo" />
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
