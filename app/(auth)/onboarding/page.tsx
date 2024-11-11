"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Loader2, User, Building, Briefcase } from "lucide-react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";
import { toast } from "sonner";

// Separate schemas for each step
const stepSchemas = {
  0: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    phoneNumber: z.string().min(10, "Invalid phone number"),
  }),
  1: z.object({
    companyName: z
      .string()
      .min(2, "Company name must be at least 2 characters"),
    companySize: z.string().min(1, "Please enter company size"),
  }),
  2: z.object({
    role: z.string().min(2, "Role must be at least 2 characters"),
    bio: z.string().min(10, "Bio must be at least 10 characters"),
  }),
};

const steps = [
  {
    id: "personal",
    name: "Personal Info",
    icon: User,
    fields: ["fullName", "phoneNumber"],
  },
  {
    id: "company",
    name: "Company Info",
    icon: Building,
    fields: ["companyName", "companySize"],
  },
  {
    id: "professional",
    name: "Professional Info",
    icon: Briefcase,
    fields: ["role", "bio"],
  },
];

// Complete form schema for final submission
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companySize: z.string().min(1, "Please enter company size"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
});

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-2">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div
                className={`rounded-full p-2 ${
                  i <= step ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <s.icon className="h-4 w-4" />
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
        <CardTitle className="text-2xl font-bold">{steps[step].name}</CardTitle>
        <CardDescription>Complete your profile to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNextStep();
            }}
            className="space-y-4"
          >
            {step === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Size</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 1-10, 11-50, 51-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Software Engineer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about yourself..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <div className="flex justify-between space-x-2">
              {step > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              <Button
                type="submit"
                className={step === 0 ? "w-full" : ""}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {step < steps.length - 1 ? "Next" : "Complete"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
