import { useMemo, useState } from "react";
import { Container } from "../components/Container";
import { PageHero } from "../components/PageHero";
import { BRAND } from "../config/brand";
import { Button } from "../components/Button";
import { SectionTitle } from "../components/SectionTitle";

const EVENT_TYPES = [
  "Wedding Celebration",
  "Corporate Event",
  "Birthday / Kids Party",
  "Garden Brunch / Dining",
  "Photoshoot Session",
  "Anniversary / Special Occasion",
  "Family Gathering",
  "Other Celebration",
];

const faqItems = [
  {
    question: "Do you allow outside vendors?",
    answer: "Yes, we work with a curated list of preferred vendors. Depending on your package, you can bring in approved vendors with prior coordination."
  },
  {
    question: "Can I schedule a site visit?",
    answer: "Absolutely! We encourage site visits by appointment to ensure we can give you a personalized tour. Bookings available Monday through Saturday."
  },
  {
    question: "Are kids-friendly options available?",
    answer: "Yes! We have dedicated kids areas and family-friendly packages. Our venue is designed to be safe and engaging for children of all ages."
  },
  {
    question: "What's included in the basic packages?",
    answer: "All packages include venue access, basic hosting support, layout planning, and cleanup. Premium packages include additional services."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-6 months in advance for weddings and 1-2 months for other events. Dates fill quickly, especially during peak seasons."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We offer flexible cancellation policies depending on your booking timeframe. Details are provided in our booking agreement."
  }
];

const contactMethods = [
  {
    icon: "📞",
    title: "Call Us",
    details: BRAND.phone,
    link: `tel:${BRAND.phone}`,
    description: "Available 9 AM - 7 PM, 7 days a week"
  },
  {
    icon: "📧",
    title: "Email Us",
    details: BRAND.email,
    link: `mailto:${BRAND.email}`,
    description: "Response within 24 hours"
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: BRAND.location,
    link: "#location",
    description: "By appointment only"
  },
  {
    icon: "🕒",
    title: "Hours",
    details: BRAND.hours,
    description: "Open for tours and events"
  }
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `[Luxe Garden] Inquiry: ${eventType}`
    );
    const body = encodeURIComponent(
      `Hello Luxe Garden Team,\n\nI'm interested in booking your venue for an event. Here are my details:\n\n📋 **Event Details:**\n• Name: ${name}\n• Email: ${email}\n• Phone: ${phone}\n• Event Type: ${eventType}\n• Preferred Date: ${date || "Flexible"}\n• Guest Count: ${guests || "TBD"}\n• Budget Range: ${budget || "To be discussed"}\n\n📝 **Additional Notes:**\n${message}\n\nLooking forward to hearing from you!\n\nBest regards,\n${name}`
    );
    return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }, [name, email, phone, eventType, date, guests, budget, message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhone("");
        setEventType(EVENT_TYPES[0]);
        setDate("");
        setGuests("");
        setBudget("");
        setMessage("");
      }, 5000);
    }, 1500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <PageHero
        kicker="Get in Touch"
        title="Let's create something beautiful together"
        subtitle="Share your vision with us, and we'll handle the details. From initial concept to final celebration, we're with you every step."
        imageSrc="/images/hotel-reception.jpg"
        overlay={true}
      />

      {/* Contact Methods Banner */}
      <section className="py-10 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold opacity-90">{method.title}</div>
                  <div className="font-bold mt-1">{method.details}</div>
                  <div className="text-sm opacity-80 mt-1">{method.description}</div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Form Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-3xl text-emerald-600 mx-auto mb-6">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Thank You! 🎉
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                      Your inquiry has been received. We'll review your details and get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        variant="outline" 
                        onClick={() => window.location.href = mailto}
                        className="group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Email Directly
                      </Button>
                      <Button onClick={() => setSubmitted(false)}>
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-xl">
                        📋
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          Tell Us About Your Event
                        </h3>
                        <p className="text-slate-600 mt-1">
                          Fill out the form below and we'll get back to you with personalized options
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        {/* Personal Information */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Your Name *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                👤
                              </div>
                              <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Email Address *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                ✉️
                              </div>
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                placeholder="your@email.com"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                📱
                              </div>
                              <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                placeholder="+254 700 000 000"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Event Type *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                🎯
                              </div>
                              <select
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
                              >
                                {EVENT_TYPES.map((t) => (
                                  <option key={t} value={t}>
                                    {t}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Preferred Date *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                📅
                              </div>
                              <input
                                type="date"
                                value={date}
                                min={today}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Estimated Guests *
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                👥
                              </div>
                              <input
                                type="number"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="e.g. 60"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-slate-900 mb-2">
                              Budget Range
                            </label>
                            <div className="relative">
                              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                💰
                              </div>
                              <select
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none"
                              >
                                <option value="">Select budget range</option>
                                <option value="Under KES 50,000">Under KES 50,000</option>
                                <option value="KES 50,000 - 100,000">KES 50,000 - 100,000</option>
                                <option value="KES 100,000 - 200,000">KES 100,000 - 200,000</option>
                                <option value="KES 200,000 - 500,000">KES 200,000 - 500,000</option>
                                <option value="KES 500,000+">KES 500,000+</option>
                                <option value="To be discussed">To be discussed</option>
                              </select>
                              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-900 mb-2">
                            Tell Us About Your Vision *
                          </label>
                          <div className="relative">
                            <div className="absolute left-4 top-4 text-slate-400">
                              💭
                            </div>
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              rows={5}
                              className="w-full rounded-xl border border-slate-300 pl-12 pr-4 py-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                              placeholder="Tell us about your vision, special requests, themes, colors, and any other details..."
                              required
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                          <div className="text-xs text-slate-500 order-2 sm:order-1">
                            <p>By submitting, you agree to our Privacy Policy. We'll contact you within 24 hours.</p>
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 order-1 sm:order-2"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Submit Inquiry
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Column - Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📞", title: "Call", value: BRAND.phone, action: `tel:${BRAND.phone}` },
                    { icon: "📧", title: "Email", value: BRAND.email, action: `mailto:${BRAND.email}` },
                    { icon: "📍", title: "Location", value: BRAND.location },
                    { icon: "🕒", title: "Hours", value: BRAND.hours }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium opacity-80">{item.title}</div>
                        {item.action ? (
                          <a href={item.action} className="font-bold text-lg hover:text-emerald-200 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-bold text-lg">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Questions</h3>
                <div className="space-y-6">
                  {faqItems.slice(0, 3).map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="font-semibold text-slate-900 mb-2">{faq.question}</div>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a 
                    href="/faq" 
                    className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
                  >
                    View all FAQs
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Our Journey</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  See more photos, events, and behind-the-scenes on our social media.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: "📸", label: "Instagram", url: BRAND.socials.instagram },
                    { icon: "👍", label: "Facebook", url: BRAND.socials.facebook },
                    { icon: "🎵", label: "TikTok", url: BRAND.socials.tiktok }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</div>
                      <div className="text-sm font-medium text-slate-700">{social.label}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Response Time & Process */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
        <Container>
          <SectionTitle
            kicker="Our Process"
            title="What happens after you contact us"
            subtitle="We make sure you're informed and comfortable every step of the way"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Initial Response",
                desc: "We'll acknowledge your inquiry within 24 hours"
              },
              {
                step: "02",
                title: "Detailed Proposal",
                desc: "Receive a customized quote and package options"
              },
              {
                step: "03",
                title: "Consultation",
                desc: "Schedule a site visit or virtual meeting"
              },
              {
                step: "04",
                title: "Booking",
                desc: "Secure your date with a deposit"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl -rotate-3"></div>
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-xl font-black text-white mx-auto">
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

      {/* Map & Location (Placeholder) */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/30">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Find Our Venue</h3>
              <p className="text-slate-600 mb-6">{BRAND.location}</p>
              
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300">
                {/* Placeholder for Google Maps */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">📍</div>
                    <div className="text-slate-700 font-medium">Map Location</div>
                    <p className="text-slate-500 text-sm mt-2">
                      Google Maps integration coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: "🅿️", title: "Parking", desc: "Ample secure parking available" },
                  { icon: "♿", title: "Accessibility", desc: "Wheelchair accessible pathways" },
                  { icon: "🚗", title: "Transport", desc: "Easy access from main roads" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <div className="text-xl">{feature.icon}</div>
                    <div>
                      <div className="font-medium text-slate-900">{feature.title}</div>
                      <div className="text-sm text-slate-600">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}