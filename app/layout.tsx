import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import './globals.css';
import { Metadata } from "next";
import LoaderWrapper from "@/components/LoaderWrapper/LoaderWrapper"; // Client-side LoaderWrapper

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'Ahead of the Rest',
  description: 'Where Every Mile Matters.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-black text-white",
          fontSans.variable
        )}
      >
        {/* Wrapping the children in LoaderWrapper */}
        <LoaderWrapper>
          {children}
        </LoaderWrapper>
      </body>
    </html>
  );
}
