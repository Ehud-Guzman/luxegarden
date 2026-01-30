import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const amenities = [
  { 
    title: "Garden seating zones", 
    description: "Multiple areas for dining, ceremonies and chill.",
    icon: "🌿"
  },
  { 
    title: "Photo backdrops", 
    description: "Green corners, walkways, and curated scenes.",
    icon: "📸"
  },
  { 
    title: "Kids-friendly areas", 
    description: "Space for safe play and family days.",
    icon: "👨‍👩‍👧‍👦"
  },
  { 
    title: "Power & service access", 
    description: "For DJs, lighting and event operations.",
    icon: "⚡"
  },
  { 
    title: "Ample Parking", 
    description: "Convenient, secure parking for guests.",
    icon: "🅿️"
  },
  { 
    title: "On-site team", 
    description: "Hosting support for smooth guest experiences.",
    icon: "🤝"
  },
];

const layoutZones = [
  { name: "Ceremony Lawn", capacity: "Up to 200 guests", color: "bg-emerald-100" },
  { name: "Dining Pavilion", capacity: "Up to 150 seated", color: "bg-amber-100" },
  { name: "Lounge Area", capacity: "Multiple seating zones", color: "bg-blue-100" },
  { name: "Kids Zone", capacity: "Safe play area", color: "bg-pink-100" },
  { name: "Photo Garden", capacity: "Multiple backdrops", color: "bg-purple-100" },
  { name: "Service Area", capacity: "Prep & operations", color: "bg-slate-100" },
];

export default function Venue() {
  return (
    <div>
      <PageHero
        kicker="The Venue"
        title="A premium garden built for experiences"
        subtitle="Clean aesthetics, flexible space, and the kind of light that makes photos look expensive."
        imageSrc="/setup.jpg"
        overlay={true}
      />

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-white to-emerald-50/30 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10,000+", label: "Square Feet" },
              { value: "200+", label: "Max Capacity" },
              { value: "6", label: "Unique Zones" },
              { value: "10+", label: "Photo Spots" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-black text-emerald-900">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionTitle
            kicker="Space & Flow"
            title="Designed for seamless experiences"
            subtitle="Every zone has a purpose, flowing naturally for guests and smooth operations."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Venue Overview */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-lg">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Venue Overview</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Luxe Garden is designed to feel like a destination. Guests can celebrate, dine,
                  relax, take photos, and enjoy activities — all in one curated outdoor space.
                  Each area flows into the next, creating a journey rather than just a venue.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link to="/gallery">
                    <Button variant="outline" className="group">
                      View Gallery
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                      Book a Visit
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Amenities */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-soft">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Amenities & Features</h3>
                <div className="grid gap-4">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-xl flex-shrink-0">
                        {amenity.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{amenity.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{amenity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Layout */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Layout & Zones</h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Interactive
                  </span>
                </div>
                
                {/* Layout Visualization */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-6">
                  {/* Mock Layout Grid */}
                  <div className="grid grid-cols-3 grid-rows-2 gap-4 h-64">
                    {layoutZones.map((zone, index) => (
                      <div
                        key={index}
                        className={`${zone.color} rounded-xl border border-slate-200 p-3 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
                      >
                        <div className="text-xs font-bold text-slate-800">{zone.name}</div>
                        <div className="text-xs text-slate-600 mt-1">{zone.capacity}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-3">Zone Key</h4>
                    <div className="flex flex-wrap gap-2">
                      {layoutZones.map((zone, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <div className={`w-3 h-3 rounded-sm ${zone.color} border border-slate-300`}></div>
                          <span className="text-slate-700">{zone.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 mt-6">
                  This interactive layout shows how spaces flow together. Each zone is designed for specific activities while maintaining visual harmony.
                </p>
                
                <div className="mt-6">
                  <Link to="/layout-details">
                    <Button variant="outline" className="w-full justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      View Detailed Floor Plan
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/30 border border-emerald-200 p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  {[
                    "Weddings & Receptions",
                    "Corporate Retreats",
                    "Family Celebrations",
                    "Brand Photoshoots",
                    "Product Launches",
                    "Community Events"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo Gallery Preview */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900">See It For Yourself</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              A glimpse of the space through different seasons and setups
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/setup.jpg  ", alt: "Evening setup" },
              { src: "/outdoor-graduation.jpg", alt: "Daytime ceremony" },
              { src: "/dining1.jpg", alt: "Dining area" },
              { src: "/events.jpg", alt: "Garden details" },
            ].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" className="group">
                Explore Full Gallery
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 p-8 md:p-12 text-center text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <span>✨</span>
                Schedule a Tour
                <span>✨</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Experience It?
              </h2>
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
                The best way to appreciate the space is to walk through it. Book a private tour and see how Luxe Garden can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                    Schedule a Visit
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}