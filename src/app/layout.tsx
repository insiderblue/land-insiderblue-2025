import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Insiderblue",
  description: "Dê ao seu negócio a presença online que ele merece!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window === "undefined") {
    return null; 
  }

  throw new Error("Erro 500 simulado no layout");

  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
