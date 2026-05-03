import Link from "next/link";

export default function CTAButton({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; }) {
  const cls = variant === "primary"
    ? "bg-sun text-deepBlue shadow-lg shadow-amber-900/20 hover:bg-amber-300"
    : "bg-white/15 text-white border border-white/40 hover:bg-white/25";
  return <Link href={href} className={`inline-flex rounded-full px-6 py-3 font-black transition ${cls}`}>{children}</Link>;
}
