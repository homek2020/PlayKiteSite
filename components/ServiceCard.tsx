export default function ServiceCard({ title, text, eyebrow }: { title: string; text: string; eyebrow?: string }) {
  return (
    <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/10">
      {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-turquoise">{eyebrow}</p>}
      <h3 className="text-xl font-black text-deepBlue">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
