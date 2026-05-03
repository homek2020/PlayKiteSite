import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-deepBlue text-white">
      <Image
        src="/images/hero-kitesurfing-hurghada.jpg"
        alt="Kitesurfing lesson at Playkite Hurghada on the Red Sea"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deepBlue/95 via-deepBlue/65 to-sky-900/15" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
      <div className="container-main relative flex items-center py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-50 backdrop-blur">
            Red Sea wind, shallow lagoon, IKO coaching
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50 md:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="https://wa.me/200000000000">Book on WhatsApp</CTAButton>
            <CTAButton href="/kitesurfing-courses-egypt" variant="secondary">View Courses</CTAButton>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-deepBlue">
            {[
              ["270+", "windy days"],
              ["2003", "teaching since"],
              ["1:1", "instructor focus"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-white/90 p-4 shadow-xl shadow-sky-950/10 backdrop-blur">
                <dt className="text-2xl font-black md:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-600">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
