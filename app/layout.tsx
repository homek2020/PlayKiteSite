import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playkite.com"),
  title: { default: "Playkite | Kite School in Hurghada", template: "%s | Playkite" },
  description: "Kitesurfing school in Hurghada, Egypt with Red Sea beginner lessons, IKO coaching, shallow-water courses, and beach support.",
  openGraph: {
    type: "website",
    url: "https://www.playkite.com",
    title: "Playkite Hurghada Kite School",
    description: "Learn kitesurfing on the Red Sea with steady wind, shallow water, and personal coaching.",
    siteName: "Playkite",
    images: [{ url: "/images/hero-kitesurfing-hurghada.jpg", width: 2500, height: 1250, alt: "Playkite kitesurfing school in Hurghada" }]
  },
  twitter: { card: "summary_large_image", title: "Playkite Hurghada", description: "Kitesurfing lessons and courses on the Red Sea.", images: ["/images/hero-kitesurfing-hurghada.jpg"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /><WhatsAppButton /></body></html>;
}
