import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pipeline Internacional | Plataforma de Internacionalização",
  description: "Dashboard de pipeline comercial por país",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-pagebg font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
