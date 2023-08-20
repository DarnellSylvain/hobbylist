import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `"%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "Hobby", "Hobbies", "List", "Lifestyle", "Happy"],
  authors: [
    {
      name: "Darnell Sylvain",
      url: "https://darnellsylvain.com",
    },
  ],
  creator: "Darnell Sylvain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
