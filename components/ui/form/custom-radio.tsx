import React from "react";
import { Label } from "../typography/label";

interface CustomRadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  index: number;
  icon?: React.ReactNode;
}

export function CustomRadio({
  label,
  checked,
  onChange,
  index,
  icon
}: CustomRadioProps) {
  return (
    <div
      onClick={onChange}
      className={`flex items-center w-[268px] h-[88px] justify-between p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out
        ${
          checked
            ? "border border-primary-light bg-others-900"
            : "border border-neutral-700 bg-others-900 hover:bg-neutral-800"
        }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-neutral-0 text-xl">
            {icon}
          </div>
        )}
        <Label
          variant={"medium"}
          className="text-neutral-0 font-bold break-words max-w-[132px]"
          label={label}
        />
      </div>
      
      <div
        className={`w-5 h-5 ml-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center
          ${
            checked ? "border-others-600 bg-primary-light" : "border-others-600"
          }`}
      >
        {checked && <div className="w-4 h-4 rounded-full bg-primary-light" />}
      </div>
    </div>
  );
}
