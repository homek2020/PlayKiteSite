export default function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return <blockquote className="rounded-2xl border p-6"><p>“{quote}”</p><footer className="mt-3 font-semibold text-deepBlue">— {name}</footer></blockquote>;
}
