// src/components/Botao/Botao.tsx
import React from "react";

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Botao({ children, className = "", ...props }: BotaoProps) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition text-white bg-blue-600 hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}