export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode; }) {
  return (
    <section className="section-pad">
      <div className="container-main">
        <h2 className="text-3xl font-bold text-deepBlue md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
