import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.playkite.com"),
  title: { default: "Playkite | Kite School in Hurghada", template: "%s | Playkite" },
  description: "Kitesurfing school in Hurghada, Egypt with beginner lessons and advanced coaching.",
  openGraph: { type: "website", url: "https://www.playkite.com", title: "Playkite", description: "Learn kitesurfing on the Red Sea.", siteName: "Playkite" },
  twitter: { card: "summary_large_image", title: "Playkite", description: "Kite school Hurghada" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /><WhatsAppButton /></body></html>;
}
