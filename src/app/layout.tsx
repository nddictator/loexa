import type { Metadata } from "next";
import { Poppins, Inter, Dancing_Script } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Signature-style cursive, used only for the founder's name on the
// Founder's Message section — a stand-in for an actual signature scan.
const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "LOEXA Africa",
  description:
    "Africa's capability-building ecosystem connecting education, AI and industry for sustainable impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-offwhite text-ink">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
