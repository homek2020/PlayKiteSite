import CTAButton from "./CTAButton";

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deepBlue to-cyan-700 py-20 text-white md:py-28">
      <div className="container-main relative">
        <h1 className="max-w-3xl text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-cyan-50">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CTAButton href="https://wa.me/200000000000">Book on WhatsApp</CTAButton>
          <CTAButton href="/kitesurfing-courses-egypt" variant="secondary">View Courses</CTAButton>
        </div>
      </div>
    </section>
  );
}
