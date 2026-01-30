import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const eventTypes = [
  { 
    title: "Weddings", 
    points: ["Garden ceremony setups", "Reception layouts", "Photo-ready scenes"],
    image: "/wedding.jpg",
    icon: "💍",
    gradient: "from-pink-500/10 to-rose-500/5",
    color: "text-pink-700",
    bgColor: "bg-pink-50"
  },
  { 
    title: "Corporate", 
    points: ["Product launches", "Networking mixers", "Team celebrations"],
    image: "/cooporate-events.jpg",
    icon: "💼",
    gradient: "from-blue-500/10 to-cyan-500/5",
    color: "text-blue-700",
    bgColor: "bg-blue-50"
  },
  { 
    title: "Family Events", 
    points: ["Birthdays", "Family reunions", "Games & themed setups"],
    image: "/fam-game.jpg",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-purple-500/10 to-pink-500/5",
    color: "text-purple-700",
    bgColor: "bg-purple-50"
  },
  { 
    title: "Private Celebrations", 
    points: ["Baby showers", "Anniversaries", "Graduation parties"],
    image: "/outdoor-graduation.jpg",
    icon: "🎉",
    gradient: "from-emerald-500/10 to-teal-500/5",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50"
  },
];

const eventFeatures = [
  {
    icon: "🕒",
    title: "Flexible Timing",
    desc: "Morning, afternoon, or evening slots to suit your schedule"
  },
  {
    icon: "🌿",
    title: "Natural Setting",
    desc: "Beautiful garden environment that needs minimal decoration"
  },
  {
    icon: "📸",
    title: "Built-in Backdrops",
    desc: "Multiple photo locations throughout the venue"
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "On-site coordinator for smooth event execution"
  }
];

export default function Events() {
  return (
    <div>
      <PageHero
        kicker="Events at Luxe Garden"
        title="Create unforgettable moments in nature's embrace"
        subtitle="From intimate gatherings to grand celebrations—every event is curated with care, attention to detail, and premium service."
        imageSrc="/events.jpg"
        overlay={true}
      />

      {/* Event Types Showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <SectionTitle
            kicker="Our Specialties"
            title="Designed for every occasion"
            subtitle="Each event type gets customized attention to ensure your vision comes to life perfectly."
          />

          <div className="mt-12 space-y-12 lg:space-y-16">
            {eventTypes.map((event, index) => (
              <div
                key={event.title}
                className={`relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} z-10`} />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${event.bgColor} ${event.color} text-sm font-bold`}>
                      <span className="text-lg">{event.icon}</span>
                      {event.title}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full ${event.bgColor} flex items-center justify-center text-xl`}>
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{event.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {event.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="outline" className={`${event.color} border-current hover:bg-current hover:text-white`}>
                      View {event.title} Gallery
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="Why choose us"
            title="The Luxe Garden difference"
            subtitle="What sets our event hosting apart from traditional venues"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {eventFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Planning Process */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-8 md:p-12 overflow-hidden relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Simple, Transparent Planning</h2>
                <p className="text-emerald-100 max-w-3xl mx-auto">
                  Our streamlined process ensures your event planning is stress-free and enjoyable
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Share your vision and we'll explore possibilities"
                  },
                  {
                    step: "02",
                    title: "Customization",
                    desc: "We'll tailor packages to match your specific needs"
                  },
                  {
                    step: "03",
                    title: "Celebration",
                    desc: "Relax and enjoy your perfect day with our support"
                  }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl font-black text-white mb-4 mx-auto">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-emerald-100/80 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* All-Inclusive Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900">Everything you need, beautifully arranged</h2>
              <p className="text-slate-600">
                Our comprehensive approach means you don't have to coordinate multiple vendors. 
                We handle the details so you can focus on creating memories.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "✅", text: "Venue access for your entire event duration" },
                  { icon: "✅", text: "Event coordinator from planning to execution" },
                  { icon: "✅", text: "Custom layout design tailored to your needs" },
                  { icon: "✅", text: "Basic sound system and lighting setup" },
                  { icon: "✅", text: "Flexible seating arrangements" },
                  { icon: "✅", text: "Cleanup and restoration post-event" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                      {item.icon}
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Inclusions */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Premium Add-Ons Available</h3>
                  <p className="text-sm text-slate-600">Enhance your experience with our premium partners</p>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { service: "Professional Photography", partner: "Curated Lens Studio" },
                  { service: "Gourmet Catering", partner: "Seasonal Harvest Kitchen" },
                  { service: "Floral Design", partner: "Bloom & Petal Designers" },
                  { service: "Live Music & DJ", partner: "Soundscape Entertainment" },
                ].map((addon, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors">
                    <div>
                      <div className="font-medium text-slate-900">{addon.service}</div>
                      <div className="text-sm text-slate-500">{addon.partner}</div>
                    </div>
                    <Button size="sm" variant="outline">
                      Add
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/packages" className="flex-1">
                    <Button className="w-full">View Complete Packages</Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">Get Custom Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6">
              <span>✨</span>
              Ready to Start Planning?
              <span>✨</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Let's create something amazing together
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Share your vision with us, and we'll handle the rest. From initial concept to final celebration, 
              we're with you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  Browse Past Events
                </Button>
              </Link>
            </div>
            
            <p className="text-slate-500 text-sm mt-8">
              Response within 24 hours • No-obligation quote • Flexible payment options
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}