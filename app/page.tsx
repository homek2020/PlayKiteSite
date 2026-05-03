import Image from "next/image";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import PriceCard from "@/components/PriceCard";
import FAQ from "@/components/FAQ";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";

const courses = [
  {
    title: "First kite lesson",
    text: "A safe first session for total beginners: wind window, kite control, safety systems, and confident beach handling.",
    image: "/images/kite-lessons-hurghada.jpg",
    alt: "Beginner kite lesson at Playkite Hurghada"
  },
  {
    title: "Beginner course",
    text: "From setup and body drag to first waterstarts in shallow Red Sea conditions with patient instructor support.",
    image: "/images/red-sea-kite-spot.jpg",
    alt: "Shallow Red Sea kite spot in Hurghada"
  },
  {
    title: "Progression coaching",
    text: "Upwind riding, transitions, board control, and cleaner technique for riders who want visible progress fast.",
    image: "/images/advanced-kitesurfing.jpg",
    alt: "Advanced kitesurfing coaching in Egypt"
  }
];

const faqs = [
  {
    q: "Do I need previous kitesurfing experience?",
    a: "No. Playkite lessons in Hurghada start from zero and move step by step through safety, kite control, body drag, and waterstart skills."
  },
  {
    q: "Why is Hurghada good for learning kitesurfing?",
    a: "Hurghada offers warm weather, regular Red Sea wind, shallow water areas, and wide training space, which makes it one of Egypt's best beginner kite spots."
  },
  {
    q: "Can I book a course by WhatsApp?",
    a: "Yes. Send your dates, level, and number of riders by WhatsApp and the school can recommend a lesson plan."
  }
];

export const metadata = {
  title: "Kite School in Hurghada, Egypt",
  description:
    "Book kitesurfing lessons in Hurghada with Playkite: Red Sea kite school, shallow-water beginner courses, IKO coaching, equipment support, and kite holidays in Egypt.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Playkite Hurghada Kite School",
    description: "Kitesurfing lessons and beginner courses on the Red Sea in Hurghada, Egypt.",
    images: [{ url: "/images/hero-kitesurfing-hurghada.jpg", width: 2500, height: 1250, alt: "Playkite kitesurfing school in Hurghada" }]
  }
};

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Kitesurfing lessons in Hurghada that get you riding faster"
        subtitle="Learn at Playkite on the Red Sea with steady wind, shallow-water practice, personal coaching, and a beach setup built for first waterstarts."
      />

      <section className="bg-white py-6">
        <div className="container-main grid gap-4 md:grid-cols-3">
          {[
            ["IKO pathway", "Structured skills from first launch to independent riding."],
            ["Shallow lagoon", "More standing depth means more practice time and less stress."],
            ["Beach service", "Equipment support, rescue coverage, storage, and local guidance."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm shadow-sky-900/5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        title="A Red Sea kite school designed for real progress"
        subtitle="Playkite combines reliable Hurghada wind, beginner-friendly water, and focused instruction so your lesson time turns into visible skill."
        tone="soft"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ServiceCard eyebrow="Safety first" title="Certified instruction" text="Clear briefings, controlled kite handling, and rescue-aware lesson planning before the board ever touches the water." />
          <ServiceCard eyebrow="More time riding" title="Shallow-water practice" text="The spot is forgiving for beginners, so you can repeat drills, stand, reset, and build confidence faster." />
          <ServiceCard eyebrow="Hurghada advantage" title="Wind most of the year" text="Warm weather and regular Red Sea wind make Hurghada a strong kitesurfing destination across the calendar." />
        </div>
      </Section>

      <Section
        title="Choose your kitesurfing course"
        subtitle="Every route is built around your level, weather window, and holiday schedule, from a single discovery lesson to a full beginner course."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm shadow-sky-900/5">
              <div className="relative h-64 md:h-72">
                <Image src={course.image} alt={course.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-deepBlue">{course.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{course.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="The spot: shallow Red Sea water, open space, steady wind"
        subtitle="Hurghada is one of Egypt's easiest places to start kitesurfing because the conditions are warm, visual, and forgiving."
        tone="blue"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-lg md:h-[460px]">
            <Image src="/images/red-sea-kite-spot.jpg" alt="Aerial view of Playkite Red Sea kite spot in Hurghada" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="space-y-5">
            {[
              "Wide launch area for calm setup and safe assisted launches.",
              "Beginner-friendly water depth for body drag and waterstart practice.",
              "Warm climate, beach support, and easy access from Hurghada hotels."
            ].map((item) => (
              <p key={item} className="rounded-lg border border-white/15 bg-white/10 p-5 leading-7 text-cyan-50">{item}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Trust signals that help guests book" subtitle="Use the official Playkite brand assets and instructor credentials to make the page feel real, local, and credible." tone="soft">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5">
            <Image src="/images/playkite-logo.jpg" alt="Playkite official logo" width={96} height={96} className="rounded-full" />
            <h3 className="mt-5 text-xl font-black text-deepBlue">Official Playkite identity</h3>
            <p className="mt-3 leading-7 text-slate-600">A consistent logo and name across the page make the school easier to recognize in search, maps, and social previews.</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5">
            <Image src="/images/instructor-logo-blue.png" alt="Instructor training badge from Playkite" width={208} height={110} className="h-24 w-auto object-contain" />
            <h3 className="mt-5 text-xl font-black text-deepBlue">Instructor pathway</h3>
            <p className="mt-3 leading-7 text-slate-600">Structured coaching helps guests understand what they will learn and why the lesson plan is safe.</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5">
            <Image src="/images/iko-affiliated-center.png" alt="IKO affiliated center badge" width={208} height={106} className="h-24 w-auto object-contain" />
            <h3 className="mt-5 text-xl font-black text-deepBlue">IKO-friendly messaging</h3>
            <p className="mt-3 leading-7 text-slate-600">Credentials and safety language improve confidence for first-time riders choosing a school abroad.</p>
          </div>
        </div>
      </Section>

      <Section title="Prices preview" subtitle="Simple entry points for guests comparing kitesurfing lessons in Hurghada. Final plan depends on wind, level, and number of sessions.">
        <div className="grid gap-4 md:grid-cols-3">
          <PriceCard title="Discovery Lesson" price="from EUR 60" />
          <PriceCard title="Beginner Course" price="from EUR 220" />
          <PriceCard title="Full Course" price="from EUR 390" />
        </div>
      </Section>

      <Section title="What guests remember">
        <div className="grid gap-4 md:grid-cols-2">
          <TestimonialCard name="Sophie" quote="The shallow water made the first session feel calm. I understood the kite quickly and felt safe the whole time." />
          <TestimonialCard name="Mark" quote="Good spot, friendly coaching, and clear progress every day. Perfect for learning in Hurghada." />
        </div>
      </Section>

      <Section title="Kitesurfing in Hurghada FAQ" tone="soft">
        <FAQ items={faqs} />
      </Section>

      <Section title="Ready for your first ride?" subtitle="Send your dates, level, and hotel area. Playkite can recommend the right lesson plan for your Red Sea kite holiday." tone="blue">
        <div className="flex flex-wrap gap-4">
          <a className="rounded-full bg-turquoise px-6 py-3 font-black text-deepBlue transition hover:bg-cyan-300" href="https://wa.me/200000000000">Book on WhatsApp</a>
          <a className="rounded-full border border-white/35 px-6 py-3 font-black text-white transition hover:bg-white/10" href="/prices">Compare prices</a>
        </div>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Playkite",
          image: "https://www.playkite.com/images/hero-kitesurfing-hurghada.jpg",
          description: "Kitesurfing school in Hurghada, Egypt offering Red Sea kite lessons and beginner courses.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hurghada",
            addressRegion: "Red Sea",
            addressCountry: "EG"
          },
          url: "https://www.playkite.com",
          areaServed: "Hurghada, Egypt"
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "Playkite Hurghada",
          sport: "Kitesurfing",
          address: { "@type": "PostalAddress", addressLocality: "Hurghada", addressCountry: "EG" }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a }
          }))
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.playkite.com/" }]
        }}
      />
    </main>
  );
}
