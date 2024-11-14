import React from "react";
import { Check, ChevronRight, X, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface Step {
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-6 flex-1 justify-center">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                    ${
                      isCompleted
                        ? "bg-[#38C793] text-white"
                        : isCurrent
                        ? "bg-primary-light text-white"
                        : "bg-neutral-800 text-neutral-600"
                    }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                </div>

                <div className="ml-2 flex items-center">
                  <span
                    className={`text-sm font-medium
                    ${
                      isCurrent
                        ? "text-neutral-50"
                        : isCompleted
                        ? "text-neutral-600"
                        : "text-neutral-600"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-3 text-gray-600" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
