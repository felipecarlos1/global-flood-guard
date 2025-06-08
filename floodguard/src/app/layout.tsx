import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import ChatBot from "@/components/ChatBot/ChatBot";

export const metadata: Metadata = {
  title: "FloodGuard",
  description: "Sistema de monitoramento e alerta de enchentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col min-h-screen">
        <Cabecalho />
        <main className="container mx-auto flex-1 p-4">
          {children}
        </main>
        <ChatBot />
        <Rodape />
      </body>
    </html>
  );
}