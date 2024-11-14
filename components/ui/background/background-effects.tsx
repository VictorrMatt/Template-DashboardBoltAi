import React from "react";

export const BackgroundEffects = () => {
  return (
    <>
      {/* Pulsing light beam effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1100.17px] h-[670.131px] rounded-[823.17px] bg-primary-light opacity-40 blur-[358px] transform-gpu" />
        </div>
      </div>

      {/* Vertical lines */}
      <div
        className="absolute inset-0 opacity-[15%]"
        style={{
          marginLeft: "120px", // Margem à esquerda
          marginRight: "120px", // Margem à direita
          backgroundImage: `repeating-linear-gradient(90deg, 
      rgba(255, 255, 255, 0.05) 0px, 
      rgba(255, 255, 255, 0.05) 1px, 
      transparent 1px, 
      transparent 161px)`, // Distância fixa de 161px entre as linhas
          backgroundSize: "161px 100%", // Tamanho fixo da linha e da distância entre elas
          backgroundPosition: "0 0", // Alinhamento do padrão de fundo
          height: "100%", // Garantindo que ocupe toda a altura da tela
        }}
      />

      {/* Floating particles 
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
        */}
    </>
  );
};
