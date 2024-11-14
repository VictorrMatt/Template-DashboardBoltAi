import React, { useState } from "react";
import { ShopifyLogotipo, CartpandaLogotipo } from "../icons/icons";
import { Button } from "../navigation/button";
import { Label } from "../typography/label";

export default function StoreForm() {
  const [connected, setConnected] = useState<{ [key: number]: boolean }>({});

  const handleConnect = (index: number) => {
    setConnected((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {[
          {
            logo: ShopifyLogotipo,
            description: "Conecte sua loja Shopify à Dropar.",
          },
          {
            name: "Cartpanda",
            logo: CartpandaLogotipo,
            description: "Conecte sua loja Cartpanda à Dropar.",
          },
        ].map((platform, index) => (
          <div
            key={index}
            className="flex justify-between p-6 border-2 border-neutral-700 bg-others-900 rounded-lg transition-all duration-300 ease-in-out"
          >
            <main>
              <span>{platform.logo}</span>

              <Label
                variant={"underline1"}
                label={platform.description}
                className="flex items-start text-neutral-600 mt-4 font-medium"
              />
            </main>

            <div className="items-center flex self-center">
              <Button
                onClick={() => handleConnect(index)}
                className={`h-[36px] p-[10px] text-primary-light border-primary-light border bg-transparent rounded-lg transition-colors
                   ${
                     connected[index]
                       ? "text-greenBase shadow-2xl bg-greenBaseOpacity hover:bg-green-950 border-0 px-2 h-[20px]"
                       : "bg-transparent hover:bg-grayButton"
                   }`}
              >
                {connected[index] ? "Conectado" : "Conectar"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
