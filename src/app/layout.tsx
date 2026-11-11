import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Barès | Tropical Stay",
    template: "%s | Barès",
  },
  description:
    "Discover a peaceful tropical escape with comfort, nature, and modern hospitality.",
  applicationName: "Barès",
  openGraph: {
    title: "Barès | Tropical Stay",
    description:
      "Discover a peaceful tropical escape with comfort, nature, and modern hospitality.",
    siteName: "Barès",
    locale: "id_ID",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body>
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
