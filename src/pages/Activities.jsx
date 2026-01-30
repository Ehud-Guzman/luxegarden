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
    icon: "💒",
    gradient: "from-pink-500/20 to-rose-500/10"
  },
  { 
    title: "Corporate events", 
    desc: "Launches, retreats, dinners, and team experiences.",
    image: "/cooporate-events.jpg",
    icon: "💼",
    gradient: "from-blue-500/20 to-cyan-500/10"
  },
  { 
    title: "Dining", 
    desc: "Brunch and lunch with calm garden vibes.",
    image: "/dining1.jpg",
    icon: "🍽️",
    gradient: "from-amber-500/20 to-orange-500/10"
  },
  { 
    title: "Kids activities", 
    desc: "Family days, birthdays, games and themed setups.",
    image: "/Kids-outdoor.jpg",
    icon: "🎪",
    gradient: "from-purple-500/20 to-pink-500/10"
  },
  { 
    title: "Photoshoots", 
    desc: "Content-ready spaces for couples, brands and creators.",
    image: "/outdoorphotoshoot.jpg",
    icon: "📸",
    gradient: "from-emerald-500/20 to-teal-500/10"
  },
  { 
    title: "Private celebrations", 
    desc: "Baby showers, anniversaries, graduation parties & more.",
    image: "/outdoor-graduation.jpg",
    icon: "🎉",
    gradient: "from-violet-500/20 to-indigo-500/10"
  },
];

const highlights = [
  { 
    title: "Garden of activities", 
    desc: "Guests can do more than just sit — the venue is an experience.",
    icon: "🌿"
  },
  { 
    title: "Photo-ready aesthetics", 
    desc: "Clean landscapes, great light, and curated corners.",
    icon: "✨"
  },
  { 
    title: "Smooth operations", 
    desc: "Clear booking flow, options, and on-site hosting support.",
    icon: "⚡"
  },
];

const featuredExperiences = [
  {
    tag: "WEDDINGS",
    title: "Say 'I Do' in the Garden",
    subtitle: "Picture-perfect ceremonies surrounded by nature.",
    src: "/wedding.jpg",
    to: "/weddings",
    accent: "bg-pink-100 text-pink-800"
  },
  {
    tag: "CORPORATE",
    title: "Elevate Team Experiences",
    subtitle: "Productive retreats in inspiring outdoor settings.",
    src: "/cooporate-events.jpg",
    to: "/corporate",
    accent: "bg-blue-100 text-blue-800"
  },
  {
    tag: "FAMILY",
    title: "Kids & Family Fun",
    subtitle: "Memorable celebrations for all ages.",
    src: "/Kids-outdoor.jpg",
    to: "/family",
    accent: "bg-purple-100 text-purple-800"
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroVenue />

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-black">10,000+</div>
              <div className="text-sm text-emerald-200">Square Feet</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black">200+</div>
              <div className="text-sm text-emerald-200">Max Capacity</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black">6</div>
              <div className="text-sm text-emerald-200">Unique Zones</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black">50+</div>
              <div className="text-sm text-emerald-200">Events Hosted</div>
            </div>
          </div>
        </Container>
      </div>

      {/* What We Offer - Enhanced */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <SectionTitle
            kicker="What we offer"
            title="Transform moments into memories"
            subtitle="More than a venue—it's a complete experience designed for celebration, connection, and joy."
          />

          {/* Grid Layout with staggered heights */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {experiences.map((x, index) => (
              <div
                key={x.title}
                className={`group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  index % 3 === 1 ? "md:mt-8 lg:mt-0" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${x.gradient} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <img
                    src={x.image}
                    alt={x.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Icon & Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{x.icon}</div>
                      <h3 className="text-xl font-bold">{x.title}</h3>
                    </div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="p-6 bg-white relative z-20">
                  <p className="text-slate-600 leading-relaxed">
                    {x.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={`/${x.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 group/link"
                    >
                      <span>Explore this experience</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-12 lg:mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white rounded-2xl"></div>
            <div className="relative bg-gradient-to-r from-emerald-900/5 to-emerald-800/5 border border-emerald-200 rounded-2xl p-8 lg:p-10 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                    <span>✨</span>
                    Custom Experiences
                    <span>✨</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Create your perfect day
                  </h3>
                  <p className="text-slate-600 mt-2">
                    Mix & match our offerings to design a unique experience
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link to="/packages">
                    <Button variant="primary" className="shadow-emerald-200 shadow-lg hover:shadow-xl">
                      View Packages
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="Most Popular"
            title="Featured Experiences"
            subtitle="Our most requested setups, perfected for memorable moments"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredExperiences.map((card) => (
              <div key={card.title} className="group">
                <Link to={card.to} className="block">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${card.accent}`}>
                        {card.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-white/90 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Luxe - Enhanced */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            kicker="Why Luxe"
            title="Where every detail creates magic"
            subtitle="Premium isn't just a word—it's our promise in every interaction, every space, every moment."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div 
                key={highlight.title}
                className="group relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-xl">
                    {highlight.icon}
                  </div>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-2xl mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{highlight.title}</h3>
                <p className="text-slate-600 leading-relaxed">{highlight.desc}</p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-sm text-emerald-700 font-medium">Included in every booking</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="text-5xl text-emerald-600">"</div>
                <h3 className="text-xl font-black text-slate-900 mt-4">Client Love</h3>
                <p className="text-slate-600 mt-2">Hear from our happy clients</p>
              </div>
              <div className="lg:w-2/3">
                <p className="text-lg text-slate-700 italic">
                  "Luxe Garden turned our wedding into a fairy tale. Every corner was picture-perfect, 
                  and the team made everything effortless. Our guests are still talking about it!"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-white font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Sarah & Kevin</div>
                    <div className="text-sm text-slate-600">Wedding • June 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50/30">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Dates Available
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to create memories?
              </h2>
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
                Your perfect day starts here. Check availability for your date and let's make it unforgettable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Check Availability
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
                    View Gallery
                  </Button>
                </Link>
              </div>
              
              <p className="text-emerald-200/80 text-sm mt-8">
                ⚡ Response within 24 hours • 🔒 Secure booking • 🌟 50+ five-star reviews
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}