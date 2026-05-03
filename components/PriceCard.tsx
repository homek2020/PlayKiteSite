export default function PriceCard({ title, price }: { title: string; price: string }) {
  return (
    <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5">
      <h3 className="font-black text-deepBlue">{title}</h3>
      <p className="mt-3 text-3xl font-black text-sky-700">{price}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">Personal coaching, equipment guidance, beach support, and clear next steps after every session.</p>
    </article>
  );
}
