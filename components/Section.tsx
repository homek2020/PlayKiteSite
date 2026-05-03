export default function Section({
  title,
  subtitle,
  children,
  tone = "white"
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "white" | "soft" | "blue";
}) {
  const toneClass = {
    white: "bg-white",
    soft: "bg-sky-50",
    blue: "bg-deepBlue text-white"
  }[tone];
  const titleClass = tone === "blue" ? "text-white" : "text-deepBlue";
  const subtitleClass = tone === "blue" ? "text-cyan-50" : "text-slate-600";

  return (
    <section className={`section-pad ${toneClass}`}>
      <div className="container-main">
        <h2 className={`max-w-4xl text-3xl font-black md:text-5xl ${titleClass}`}>{title}</h2>
        {subtitle && <p className={`mt-4 max-w-3xl text-lg leading-8 ${subtitleClass}`}>{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
