import React, { useState } from "react";
import { CustomRadio } from "@/components/ui/form/custom-radio";

export default function BillingForm() {
  const [selected, setSelected] = useState<number | null>(null);

  const billingRanges = [
    "Menos de 10 mil",
    "Entre 10 mil e 50 mil",
    "Entre 50 mil e 100 mil",
    "Entre 100 mil e 250 mil",
    "Entre 250 mil e 500 mil",
    "Mais de 500 mil reais",
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {billingRanges.map((range, index) => (
          <CustomRadio
            key={index}
            label={range}
            checked={selected === index}
            onChange={() => setSelected(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}