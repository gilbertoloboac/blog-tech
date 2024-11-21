import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Define o conjunto de caracteres
  variable: "--font-poppins", // Nome da variável CSS
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Pesos disponíveis
});


export const metadata: Metadata = {
  title: "Blog Tech",
  description: "Tecnologia, jogos e universo Nerd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
