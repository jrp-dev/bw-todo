import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import StoreProvider from "@/lib/StoreProvider";

const RobotoFont = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BW Todo App",
  description: "Simple Todo List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${RobotoFont.className} antialiased h-full`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
