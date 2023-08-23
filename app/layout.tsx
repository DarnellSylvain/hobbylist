import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

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
      <body
        suppressHydrationWarning
        className={cn(
          "font-sans antialiased",
          // inter.className,
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
