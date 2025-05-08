// src/components/ThemeRegistry.tsx
"use client";

import { GlobalStyle } from "@/app/styles/globalStyles";
import { theme } from "@/app/styles/theme";
import { ThemeProvider } from "styled-components";
import { Header } from "../Header";
import Footer from "../Footer";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
