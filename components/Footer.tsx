export default function Footer() {
  return (
    <footer className="bg-deepBlue py-10 text-white">
      <div className="container-main flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Playkite. Hurghada, Egypt.</p>
        <p className="text-cyan-100">Kitesurfing lessons, courses, beach service, and Red Sea kite holidays.</p>
      </div>
    </footer>
  );
}
