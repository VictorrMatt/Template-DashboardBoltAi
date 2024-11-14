import React, { useState, ChangeEvent } from "react";
import { Camera, X } from "lucide-react";
import { Button } from "../navigation/button";
import { Input } from "@/components/ui/form/input";
import { Label } from "../typography/label";

export default function ProfileForm() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
 
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setProfileImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-8 h-8 text-neutral-500" />
            )}
          </div>
          {profileImage && (
            <button
              onClick={handleRemoveImage}
              className="absolute -top-[-1px] -right-[-0px] border-2 border-neutral-0 bg-red-500 rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4 text-neutral-0" />
            </button>
          )}
        </div>
        <Label
          variant="large"
          label="Foto de Perfil"
          className="flex justify-center items-center mt-[18px] font-bold"
        />
        <Label
          variant="small"
          label="Min 400x400px, PNG or JPEG"
          className="text-neutral-500 mt-1"
        />
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Button className="h-[36px] mt-3 px-3 py-2 border-primary-light border shadow-2xl bg-transparent rounded-lg hover:bg-grayButton transition-colors">
            <Label
              variant="underline1"
              label="Enviar imagem"
              className="text-primary-light"
            />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <Label
            variant="small"
            label="Primeiro nome"
            className="text-sm text-neutral-0"
          />
          <span className="text-primary-light"> *</span>
          <Input
            type="text"
            className="flex w-[215.5px] mt-1 items-center gap-[var(--radius-default,8px)] self-stretch"
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <Label
            variant="small"
            label="Último nome"
            className="text-sm text-neutral-0"
          />
          <span className="text-primary-light"> *</span>
          <Input
            type="text"
            className="flex w-[215.5px] mt-1 items-center gap-[var(--radius-default,8px)] self-stretch"
            placeholder="Digite seu sobrenome"
          />
        </div>
        <div className="md:col-span-2">
          <Label
            variant="small"
            label="E-mail"
            className="text-sm text-neutral-0"
          />
          <span className="text-primary-light"> *</span>
          <Input
            type="email"
            className="w-full mt-1"
            placeholder="seu@email.com"
          />
        </div>
      </div>
    </div>
  );
}