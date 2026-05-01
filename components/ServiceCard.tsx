export default function ServiceCard({ title, text }: { title: string; text: string }) {
  return <article className="rounded-2xl border border-slate-200 p-6 shadow-sm"><h3 className="text-xl font-bold text-deepBlue">{title}</h3><p className="mt-3 text-slate-600">{text}</p></article>;
}
