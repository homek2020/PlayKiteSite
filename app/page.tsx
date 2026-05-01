import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import PriceCard from "@/components/PriceCard";
import FAQ from "@/components/FAQ";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";

export const metadata = { title: "Kite School in Hurghada, Egypt", description: "Playkite is a kitesurfing school in Hurghada, Egypt offering lessons and courses.", alternates: { canonical: "/" } };

export default function HomePage() { return <main><Hero title="Kite School in Hurghada, Egypt" subtitle="Learn kitesurfing on the Red Sea with professional instructors, shallow-water conditions, and courses for every level." />
  <Section title="Why learn with Playkite" subtitle="Playkite is a kitesurfing school in Hurghada, Egypt, offering beginner lessons, advanced coaching, and complete kitesurfing courses on the Red Sea."><div className="grid gap-4 md:grid-cols-3"><ServiceCard title="Certified instructors" text="Patient coaching focused on safety and progress."/><ServiceCard title="Shallow-water training" text="Ideal first sessions with confidence-building conditions."/><ServiceCard title="Steady Red Sea wind" text="Warm weather and consistent wind most of the year."/></div></Section>
  <Section title="Kite lessons in Hurghada"><p>Whether you are trying kitesurfing for the first time or want to improve your riding, our instructors help you progress safely and confidently.</p></Section>
  <Section title="Kitesurfing courses for all levels"><div className="grid gap-4 md:grid-cols-3"><ServiceCard title="Discovery" text="First taste of kite control and safety."/><ServiceCard title="Beginner" text="From setup to first waterstarts."/><ServiceCard title="Advanced" text="Transitions, upwind riding, and style."/></div></Section>
  <Section title="Why Hurghada is perfect for kitesurfing"><p>Hurghada is one of the best places to learn kitesurfing thanks to warm weather, steady wind, shallow water, and wide open training areas.</p></Section>
  <Section title="Prices preview"><div className="grid gap-4 md:grid-cols-3"><PriceCard title="Discovery Lesson" price="from €60"/><PriceCard title="Beginner Course" price="from €220"/><PriceCard title="Full Course" price="from €390"/></div></Section>
  <Section title="Testimonials"><div className="grid gap-4 md:grid-cols-2"><TestimonialCard name="Sophie" quote="Amazing instructors and fast progression."/><TestimonialCard name="Mark" quote="Perfect beginner spot with shallow water."/></div></Section>
  <Section title="FAQ"><FAQ items={[{q:"Do I need experience?",a:"No, beginner-friendly lessons start from zero."},{q:"Best season?",a:"Wind is strong most of the year in Hurghada."},{q:"How to book?",a:"Send us a WhatsApp message and we confirm quickly."}]} /></Section>
  <Section title="Ready to ride?" subtitle="Book your kite lessons in Hurghada today." ><a className="rounded-full bg-deepBlue px-6 py-3 font-semibold text-white" href="https://wa.me/200000000000">Book on WhatsApp</a></Section>
  <JsonLd data={{"@context":"https://schema.org","@type":"LocalBusiness","name":"Playkite","address":{"@type":"PostalAddress","addressLocality":"Hurghada","addressRegion":"Red Sea","addressCountry":"EG"},"url":"https://www.playkite.com"}} />

  <JsonLd data={{"@context":"https://schema.org","@type":"SportsActivityLocation","name":"Playkite Hurghada","address":{"@type":"PostalAddress","addressLocality":"Hurghada","addressCountry":"EG"}}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need experience?","acceptedAnswer":{"@type":"Answer","text":"No, beginner-friendly lessons start from zero."}}]}} />
  <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.playkite.com/"}]}} />
</main>; }
