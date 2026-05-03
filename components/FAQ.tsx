export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return <div className="space-y-4">{items.map((i) => <details key={i.q} className="rounded-xl border p-4"><summary className="cursor-pointer font-semibold">{i.q}</summary><p className="mt-2 text-slate-600">{i.a}</p></details>)}</div>;
}
