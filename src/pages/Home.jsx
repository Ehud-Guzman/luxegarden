import { Link } from "react-router-dom";
import { HeroVenue } from "../components/HeroVenue";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Button } from "../components/Button";
import { PhotoCard } from "../components/PhotoCard";

const experiences = [
  { 
    title: "Weddings", 
    desc: "Garden ceremonies, receptions, and premium backdrops.",
    image: "/wedding.jpg",
    icon: "💒"
  },
  { 
    title: "Corporate events", 
    desc: "Launches, retreats, dinners, and team experiences.",
    image: "/cooporate-events.jpg",
    icon: "💼"
  },
  { 
    title: "Dining", 
    desc: "Brunch and lunch with calm garden vibes.",
    image: "/dining1.jpg",
    icon: "🍽️"
  },
  { 
    title: "Kids activities", 
    desc: "Family days, birthdays, games and themed setups.",
    image: "/Kids-outdoor.jpg",
    icon: "🎪"
  },
  { 
    title: "Photoshoots", 
    desc: "Content-ready spaces for couples, brands and creators.",
    image: "/outdoorphotoshoot.jpg",
    icon: "📸"
  },
  { 
    title: "Private celebrations", 
    desc: "Baby showers, anniversaries, graduation parties & more.",
    image: "/outdoor-graduation.jpg",
    icon: "🎉"
  },
];

const highlights = [
  ["Garden of activities", "Guests can do more than just sit — the venue is an experience."],
  ["Photo-ready aesthetics", "Clean landscapes, great light, and curated corners."],
  ["Smooth operations", "Clear booking flow, options, and on-site hosting support."],
];

const cards = [
  {
    tag: "THE VENUE",
    title: "Curated spaces & seating zones",
    subtitle: "Flexible areas for dining, ceremonies, and relaxing.",
    src: "/venue.jpg",
    to: "/venue",
  },
  {
    tag: "ACTIVITIES",
    title: "Kids-friendly & family energy",
    subtitle: "Games, fun corners, and family day experiences.",
    src: "/activities.jpg",
    to: "/activities",
  },
  {
    tag: "DINING",
    title: "Brunch and lunch in the garden",
    subtitle: "Reserved seating, private setups and chill vibes.",
    src: "/Kids-outdoor.jpg",
    to: "/dining",
  },
];

export default function Home() {
  return (
    <div>
      <HeroVenue />

      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <SectionTitle
            kicker="What we offer"
            title="A premium destination for events + experiences"
            subtitle="Not just a venue. A place guests enjoy the whole day."
          />

          <div className="mt-12 lg:mt-16 grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {experiences.map((x, index) => (
              <div
                key={x.title}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                  <img
                    src={x.image}
                    alt={x.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-md">
                    {x.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {x.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {x.desc}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      to={`/${x.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 group/link"
                    >
                      <span>Learn more</span>
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Layout Option - Masonry Style */}
          { <div className="mt-12 lg:mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
            {experiences.map((x, index) => (
              <div
                key={x.title}
                className={`break-inside-avoid rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-soft hover:shadow-xl transition-shadow duration-300 ${
                  index % 3 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={x.image}
                    alt={x.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-3xl mb-2">{x.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{x.title}</h3>
                    <p className="text-white/90">{x.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> }

          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100">
              <div className="text-left">
                <div className="text-sm font-medium text-emerald-800">Custom Packages Available</div>
                <p className="text-sm text-slate-600 mt-1">Mix & match experiences for your perfect day</p>
              </div>
              <Link to="/packages">
                <Button variant="primary" className="shadow-emerald-200 shadow-lg">
                  View All Packages
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-14">
        <Container>
          <SectionTitle
            kicker="Explore"
            title="Pick the vibe you're looking for"
            subtitle="These sections are designed like a premium activities garden (Asyana-style)."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {cards.map((c) => (
              <Link key={c.title} to={c.to} className="block">
                <PhotoCard src={c.src} tag={c.tag} title={c.title} subtitle={c.subtitle} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionTitle
            kicker="Why Luxe"
            title="A venue that makes your event look premium"
            subtitle="Great spaces don't happen by accident — it's design, operations, and details."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-100 bg-white p-6">
                <div className="text-sm font-bold text-slate-900">{t}</div>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-100 bg-white py-14">
        <Container>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
            <div className="text-xs font-semibold tracking-widest text-emerald-700">
              READY?
            </div>
            <div className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Let's lock your date.
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
              Share the basics — event type, date, and guest count — we'll respond fast with
              availability and options.
            </p>
            <div className="mt-6 flex justify-center">
              <Link to="/contact">
                <Button>Check Availability</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}