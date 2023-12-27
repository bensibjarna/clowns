// app/layout.tsx
"use client";

import Providers from "@/components/Providers";
import "../styles/globals.css";
import { Inter } from "next/font/google";  // Ensure this import is correct
import AuthenticationPage from "./authentication/page";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"  
            defaultTheme="system">
          {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
