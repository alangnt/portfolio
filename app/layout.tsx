import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Geirnaert | Home",
  description: "Explore a curated collection of my finest work, showcasing my skills, creativity, and passion for excellence. From innovative projects to professional achievements, dive into my journey and see what I can bring to the table. Whether you're here to collaborate, get inspired, or simply admire, I hope you enjoy navigating through my portfolio as much as I enjoyed creating it.",
};

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
