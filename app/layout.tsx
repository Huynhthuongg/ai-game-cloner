import type { Metadata } from "next";
import { Insights } from "./insights";

export const metadata: Metadata = {
  title: "AI Game Cloner",
  description: "Clone games using AI technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>AI Game Cloner</title>
      </head>
      <body>
        {children}
        <Insights />
      </body>
    </html>
  );
}
