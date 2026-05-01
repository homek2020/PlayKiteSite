import Link from "next/link";

const nav = ["kite-lessons-hurghada", "kitesurfing-courses-egypt", "prices", "kite-spot-hurghada", "about", "blog", "contact"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-deepBlue">Playkite</Link>
        <nav className="hidden gap-5 md:flex">
          {nav.map((n) => <Link key={n} href={`/${n}`} className="text-sm font-medium text-slate-700 hover:text-deepBlue">{n.replaceAll("-", " ")}</Link>)}
        </nav>
      </div>
    </header>
  );
}
