import { useState } from "react";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const diningExperiences = [
  {
    title: "Garden Brunch",
    description: "Classic plates, fresh juices, artisan coffee, and light bites served in our serene garden setting.",
    image: "/images/dining/but-first-brunch-outdoor-brunch-party-ideas-165228_300x.jpg",
    icon: "🌅",
    time: "9:00 AM - 2:00 PM",
    highlights: ["Seasonal menu", "Fresh juices & smoothies", "Artisan coffee", "Garden seating"],
    color: "bg-gradient-to-r from-amber-50 to-orange-50",
    tag: "Most Popular"
  },
  {
    title: "Premium Lunch",
    description: "Grills, signature salads, chef's specials, and family-style platters for a leisurely afternoon.",
    image: "/images/dining/premium-lunch.jpg",
    icon: "🌿",
    time: "12:00 PM - 4:00 PM",
    highlights: ["Chef's specials", "Local ingredients", "Family platters", "Premium beverages"],
    color: "bg-gradient-to-r from-emerald-50 to-teal-50",
    tag: "Signature"
  },
  {
    title: "Kids Dining Experience",
    description: "Kid-friendly options that are both nutritious and fun, in a safe and engaging environment.",
    image: "/images/dining/kids-dining.jpg",
    icon: "👨‍👩‍👧‍👦",
    time: "All Day",
    highlights: ["Kid-approved menu", "Interactive dining", "Healthy options", "Fun presentations"],
    color: "bg-gradient-to-r from-pink-50 to-purple-50",
    tag: "Family Favorite"
  },
  {
    title: "Private Dining",
    description: "Reserved seating and custom menus for birthdays, proposals, anniversaries, and intimate gatherings.",
    image: "/images/dining/private-dining.jpg",
    icon: "✨",
    time: "By Reservation",
    highlights: ["Custom menu design", "Exclusive seating", "Personalized service", "Special occasions"],
    color: "bg-gradient-to-r from-blue-50 to-cyan-50",
    tag: "Exclusive"
  },
];

const menuHighlights = [
  {
    category: "Brunch Specialties",
    items: [
      { name: "Garden Avocado Toast", price: "KES 850", description: "Sourdough, avocado, cherry tomatoes, microgreens" },
      { name: "French Toast Deluxe", price: "KES 950", description: "Brioche, berries, maple syrup, whipped cream" },
      { name: "Farmers Breakfast", price: "KES 1,200", description: "Eggs, sausage, mushrooms, roasted tomatoes" }
    ],
    icon: "🍳"
  },
  {
    category: "Lunch Features",
    items: [
      { name: "Grilled Salmon", price: "KES 1,800", description: "Atlantic salmon, seasonal vegetables, lemon butter" },
      { name: "Garden Harvest Salad", price: "KES 1,100", description: "Mixed greens, goat cheese, nuts, balsamic" },
      { name: "Chef's Burger", price: "KES 1,350", description: "Wagyu beef, truffle aioli, artisanal bun" }
    ],
    icon: "🥗"
  },
  {
    category: "Family Platters",
    items: [
      { name: "Mediterranean Feast", price: "KES 4,500", description: "For 4-6 people, mezze, grilled meats, bread" },
      { name: "Garden Picnic Basket", price: "KES 3,800", description: "For 2-3 people, sandwiches, salads, desserts" },
      { name: "Kids Party Platter", price: "KES 2,500", description: "For 4 kids, mini burgers, fries, juice boxes" }
    ],
    icon: "🧺"
  }
];

const diningFeatures = [
  {
    icon: "🌳",
    title: "Garden Ambiance",
    description: "Dine surrounded by lush greenery and natural beauty"
  },
  {
    icon: "🌞",
    title: "Perfect Lighting",
    description: "Natural light throughout the day for the best photos"
  },
  {
    icon: "🎶",
    title: "Curated Music",
    description: "Background tunes that enhance the dining experience"
  },
  {
    icon: "👨‍🍳",
    title: "Chef's Creations",
    description: "Seasonal menus crafted by our culinary team"
  },
  {
    icon: "🤝",
    title: "Attentive Service",
    description: "Friendly staff ensuring a memorable experience"
  },
  {
    icon: "📸",
    title: "Photo-Ready",
    description: "Every corner is designed for beautiful photos"
  }
];

const reservationTimes = [
  "9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"
];

export default function Dining() {
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [guests, setGuests] = useState(2);
  const [showReservationForm, setShowReservationForm] = useState(false);

  return (
    <div>
      <PageHero
        kicker="Garden Dining"
        title="Culinary experiences in nature's embrace"
        subtitle="Savor carefully crafted meals in our serene garden setting. Every dish is an experience, every moment is memorable."
        imageSrc="/dining1.jpg"
        overlay={true}
      />

      {/* Dining Experiences Showcase */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <SectionTitle
            kicker="Our Experiences"
            title="Choose your dining adventure"
            subtitle="From leisurely brunches to intimate private dinners, each experience is thoughtfully designed"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {diningExperiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${experience.color} text-slate-800 text-sm font-bold`}>
                      <span>{experience.icon}</span>
                      {experience.title}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-emerald-700">
                      {experience.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                    <div className="text-sm font-medium text-slate-500">
                      <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {experience.time}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{experience.description}</p>

                  <div className="space-y-2 mb-6">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={() => setShowReservationForm(true)}
                  >
                    Reserve This Experience
                    <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="Menu Highlights"
            title="Taste the garden freshness"
            subtitle="Our menu changes with the seasons, ensuring the freshest ingredients and unique flavors"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {menuHighlights.map((section) => (
              <div
                key={section.category}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-2xl">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{section.category}</h3>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                        <span className="text-lg font-bold text-emerald-700">{item.price}</span>
                      </div>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              Full menu available upon request. Special dietary requirements accommodated with advance notice.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="group">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Request Full Menu
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Dining Features */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 p-8 md:p-12 text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                  <span>✨</span>
                  The Luxe Garden Difference
                  <span>✨</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  More than just a meal
                </h2>
                <p className="text-emerald-100 max-w-3xl mx-auto">
                  We believe dining should be an experience that engages all your senses
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {diningFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-emerald-100/80 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Reservation Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Reservation Form */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 lg:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-xl">
                  📅
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Make a Reservation</h3>
                  <p className="text-sm text-slate-600">Secure your spot in our garden paradise</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Guests Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuests(num)}
                        className={`flex-1 py-2 rounded-lg text-center transition-all ${
                          guests === num
                            ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {reservationTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-lg text-center transition-all ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Dining Experience
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>Garden Brunch (9:00 AM - 2:00 PM)</option>
                    <option>Premium Lunch (12:00 PM - 4:00 PM)</option>
                    <option>Kids Dining Experience (All Day)</option>
                    <option>Private Dining (By Reservation)</option>
                  </select>
                </div>

                {/* CTA Button */}
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reserve Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Reservation Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: "⏰", text: "Reservations recommended, especially on weekends" },
                    { icon: "👥", text: "Groups of 8+ require advance notice" },
                    { icon: "🎂", text: "Celebrations welcome - mention in notes" },
                    { icon: "🌱", text: "Vegetarian, vegan & allergy options available" },
                    { icon: "🅿️", text: "Complimentary parking for dining guests" },
                  ].map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                        {detail.icon}
                      </div>
                      <span className="text-slate-700">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <h3 className="text-lg font-bold text-amber-900">Special Offers</h3>
                </div>
                <ul className="space-y-3 text-amber-800">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Weekday brunch: 15% off for groups of 4+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Birthday celebrations: Complimentary dessert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Kids under 5: Free meal with adult order</span>
                  </li>
                </ul>
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
              <span>🍽️</span>
              Ready to Dine?
              <span>🍽️</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Experience garden dining like never before
            </h2>
            
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Join us for a meal that's more than just food—it's an experience. 
              Book your table today and taste the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Reserve
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg" className="group">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Dining Gallery
                </Button>
              </Link>
            </div>
            
            <p className="text-slate-500 text-sm mt-8">
              📞 Same-day reservations available • 🕒 Open 7 days a week • 🌟 Rated 4.9/5 by diners
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}