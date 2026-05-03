import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/kite-lessons-hurghada", label: "Lessons" },
  { href: "/kitesurfing-courses-egypt", label: "Courses" },
  { href: "/prices", label: "Prices" },
  { href: "/kite-spot-hurghada", label: "Spot" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Playkite home">
          <Image
            src="/images/playkite-logo.jpg"
            alt="Playkite kitesurfing school logo"
            width={44}
            height={44}
            className="rounded-full border border-sky-100"
            priority
          />
          <div>
            <span className="block text-lg font-black uppercase tracking-wide text-deepBlue">Playkite</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 sm:block">Hurghada kite school</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="https://wa.me/200000000000" className="rounded-full bg-deepBlue px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-900/15 transition hover:bg-sky-800">
          WhatsApp
        </Link>
      </div>
    </header>
  );
}
