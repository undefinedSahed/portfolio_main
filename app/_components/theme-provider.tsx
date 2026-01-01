"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // Matches the .dark selector we defined in CSS
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
