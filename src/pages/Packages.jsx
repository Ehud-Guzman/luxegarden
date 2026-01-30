import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const packages = [
  {
    name: "Garden Dining Experience",
    price: "From KES 15,000",
    desc: "Perfect for brunch dates, intimate gatherings, and small celebrations in our serene garden setting.",
    items: ["Reserved premium seating zone", "Dedicated hosting service", "Garden ambiance setup", "Complimentary welcome drinks"],
    tag: "Most Popular",
    icon: "🍽️",
    gradient: "from-emerald-500 to-teal-500",
    color: "bg-emerald-50 text-emerald-700",
    popular: true,
    recommendedFor: ["Brunch dates", "Small gatherings", "Intimate celebrations"]
  },
  {
    name: "Kids & Family Celebration",
    price: "From KES 25,000",
    desc: "A safe, fun-filled family experience with space for games, activities, and themed setups.",
    items: ["Dedicated kids-friendly area", "Extended setup time", "Activity zone preparation", "Safety supervision"],
    tag: "Family Favorite",
    icon: "🎪",
    gradient: "from-purple-500 to-pink-500",
    color: "bg-purple-50 text-purple-700",
    recommendedFor: ["Birthday parties", "Family reunions", "Kids celebrations"]
  },
  {
    name: "Corporate & Business Events",
    price: "From KES 45,000",
    desc: "Professional space for launches, dinners, retreats, and team-building celebrations.",
    items: ["Flexible layout options", "Power & service access", "Professional AV setup", "Dedicated coordinator"],
    tag: "Business Ready",
    icon: "💼",
    gradient: "from-blue-500 to-cyan-500",
    color: "bg-blue-50 text-blue-700",
    recommendedFor: ["Product launches", "Team retreats", "Corporate dinners"]
  },
  {
    name: "Wedding & Celebration Package",
    price: "From KES 85,000",
    desc: "Complete garden ceremony and reception package with premium backdrops and full coordination.",
    items: ["Ceremony & reception space", "Full vendor coordination", "Premium photo locations", "Day-of coordinator"],
    tag: "Signature",
    icon: "💒",
    gradient: "from-rose-500 to-pink-500",
    color: "bg-rose-50 text-rose-700",
    featured: true,
    recommendedFor: ["Weddings", "Anniversaries", "Milestone celebrations"]
  },
];

const commonInclusions = [
  {
    icon: "🌿",
    title: "Venue Access",
    desc: "Full access to garden spaces for your event duration"
  },
  {
    icon: "🤝",
    title: "Hosting Support",
    desc: "On-site team to assist with setup and guest needs"
  },
  {
    icon: "🎨",
    title: "Layout Planning",
    desc: "Custom layout design tailored to your event"
  },
  {
    icon: "🔌",
    title: "Basic Utilities",
    desc: "Power access and essential service points"
  },
  {
    icon: "🧹",
    title: "Cleanup",
    desc: "Post-event cleanup and space restoration"
  },
  {
    icon: "🛋️",
    title: "Seating Areas",
    desc: "Flexible seating arrangements"
  },
];

const addOns = [
  { service: "Floral & Decor Design", price: "KES 10,000+", partner: "Bloom & Petal Studio" },
  { service: "Gourmet Catering", price: "KES 1,500/guest", partner: "Seasonal Harvest Kitchen" },
  { service: "Professional Photography", price: "KES 15,000+", partner: "Curated Lens Studio" },
  { service: "Live Music & DJ", price: "KES 8,000+", partner: "Soundscape Entertainment" },
  { service: "Kids Entertainment", price: "KES 5,000+", partner: "Magic Moments Crew" },
  { service: "Premium Audio Visual", price: "KES 12,000+", partner: "AV Excellence" },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Share your vision and requirements" },
  { step: "02", title: "Customization", desc: "We tailor packages to your needs" },
  { step: "03", title: "Booking", desc: "Secure your date with a deposit" },
  { step: "04", title: "Planning", desc: "Detailed planning and coordination" },
];

export default function Packages() {
  return (
    <div>
      <PageHero
        kicker="Premium Packages"
        title="Tailored experiences for every occasion"
        subtitle="Choose from our curated packages or customize your own perfect event. Every package includes our signature garden magic."
        imageSrc="/pick.png"
        overlay={true}
      />

      {/* Packages Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <SectionTitle
            kicker="Our Offerings"
            title="Select your perfect package"
            subtitle="Each package is designed with care to provide memorable experiences for you and your guests."
          />

          {/* Packages Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`group relative rounded-2xl border border-slate-200 bg-white shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  pkg.featured ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 text-xs font-bold">
                      <span>⭐</span> Most Popular
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className={`relative overflow-hidden bg-gradient-to-r ${pkg.gradient} p-6 text-white`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{pkg.icon}</div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pkg.color} backdrop-blur-sm`}>
                        {pkg.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{pkg.name}</h3>
                    <div className="mt-2 text-sm opacity-90">{pkg.desc}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="text-2xl font-black text-slate-900">{pkg.price}</div>
                    <div className="text-sm text-slate-500 mt-1">Starting price</div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-bold text-slate-900">What's Included:</h4>
                    {pkg.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.recommendedFor.map((item, idx) => (
                        <span key={idx} className="inline-block px-2 py-1 rounded-full bg-slate-100 text-xs text-slate-700">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book This Package
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-10">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-900/5 to-emerald-800/5 border border-emerald-200 p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
                ✨ Custom Solutions Available
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Need something unique?</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Mix and match elements from different packages to create your perfect event.
                Our team will work with you to design a custom solution.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    Request Custom Quote
                  </Button>
                </Link>
                <a href="tel:+254746527253">
                  <Button variant="outline">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call to Discuss
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Inclusions */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="In Every Package"
            title="What's included across all experiences"
            subtitle="These essentials come standard with every Luxe Garden booking"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commonInclusions.map((item, index) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-semibold mb-4">
                🎨 Premium Add-Ons
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Enhance Your Experience</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Work with our trusted partners to add extra magic to your event. All services are 
                vetted and coordinated by our team.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addOns.map((addon, index) => (
                <div
                  key={addon.service}
                  className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-slate-900">{addon.service}</h4>
                    <span className="text-sm font-semibold text-emerald-700">{addon.price}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{addon.partner}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Optional add-on</span>
                    <Button size="sm" variant="outline">
                      Select
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 text-center">
              <p className="text-slate-600 mb-6">
                All add-ons are fully customizable and can be tailored to your specific needs.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="group">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Discuss Add-On Options
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50/30">
        <Container>
          <SectionTitle
            kicker="Simple Process"
            title="How booking works"
            subtitle="Our streamlined process makes planning your event effortless"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl -rotate-3"></div>
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-2xl font-black text-white mx-auto mb-6">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <span>✨</span>
                Limited Availability
                <span>✨</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to book your perfect event?
              </h2>
              
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8 text-lg">
                Contact us today to check availability for your date and receive a detailed proposal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Inquiry
                  </Button>
                </Link>
                <a href="tel:+254746527253">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </Button>
                </a>
              </div>
              
              <p className="text-emerald-200/80 text-sm mt-8">
                ⚡ Quick response • 📅 Date holds available • 💳 Flexible payment options
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}