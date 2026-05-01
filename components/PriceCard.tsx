export default function PriceCard({ title, price }: { title: string; price: string }) {
  return <article className="rounded-2xl bg-sand p-6"><h3 className="font-bold text-deepBlue">{title}</h3><p className="mt-2 text-2xl font-extrabold">{price}</p></article>;
}
