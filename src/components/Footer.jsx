import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BRAND } from "../config/brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-200">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
              <div className="text-xl font-extrabold tracking-tight text-emerald-900">
                {BRAND.name}
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              A premium garden venue where moments blossom into memories—perfect for celebrations, connections, and curated experiences.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {BRAND.socials.instagram && (
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-emerald-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {BRAND.socials.facebook && (
                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-emerald-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {BRAND.socials.tiktok && (
                <a
                  href={BRAND.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-emerald-700 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              )}
              {BRAND.socials.pinterest && (
                <a
                  href={BRAND.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-emerald-700 transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-5.514 4.486-10 10-10zm0 3.5c-3.59 0-6.5 2.91-6.5 6.5 0 2.765 1.729 5.127 4.161 6.077-.058-1.436.005-3.273.812-4.613.53-.911 1.44-1.893 1.44-3.413 0-2.209-1.791-4-4-4s-4 1.791-4 4c0 1.104.448 2.104 1.174 2.828.328.328.371.916.088 1.299-.171.235-.436.38-.724.38-.386 0-.698-.312-.698-.698 0-.157.052-.309.147-.437.586-.79.878-1.774.878-2.772 0-2.761 2.239-5 5-5s5 2.239 5 5c0 3.038-2.207 5.526-5 5.526-.386 0-.698-.312-.698-.698 0-.386.312-.698.698-.698 2.209 0 4-1.791 4-4 0-2.209-1.791-4-4-4z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-emerald-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/venue" className="hover:text-emerald-700 transition-colors">
                  The Venue
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-emerald-700 transition-colors">
                  Events & Experiences
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-emerald-700 transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-700 transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Experience Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Experiences</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link to="/weddings" className="hover:text-emerald-700 transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="hover:text-emerald-700 transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/dining" className="hover:text-emerald-700 transition-colors">
                  Garden Dining
                </Link>
              </li>
              <li>
                <Link to="/family" className="hover:text-emerald-700 transition-colors">
                  Family Activities
                </Link>
              </li>
              <li>
                <Link to="/photoshoots" className="hover:text-emerald-700 transition-colors">
                  Photoshoots
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{BRAND.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${BRAND.phone}`} className="hover:text-emerald-700 transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${BRAND.email}`} className="hover:text-emerald-700 transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-500">{BRAND.hours}</span>
              </li>
            </ul>
            
            {/* Newsletter Signup (Optional) */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm border border-r-0 border-slate-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button className="px-3 py-2 text-sm bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-slate-500 text-center md:text-left">
              © {currentYear} {BRAND.name}. All rights reserved.
              <span className="block md:inline md:ml-2 mt-1 md:mt-0">{BRAND.bookingNote}</span>
            </div>
            
            {/* Additional Links */}
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <Link to="/privacy" className="hover:text-slate-900 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-slate-900 transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="hover:text-slate-900 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Credits */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="text-center text-xs text-slate-400">
              <p className="mb-2">
                Made with <span className="text-emerald-600">💚</span> by{' '}
                <a 
                  href="https://glimmerink.co.ke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  GlimmerInk Creations
                </a>
              </p>
              <p className="text-slate-500">
                <a 
                  href="tel:0746527253"
                  className="hover:text-slate-900 transition-colors"
                >
                  📞 0746 527 253
                </a>
                {' • '}
                <a 
                  href="mailto:nyamuehud@gmail.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  ✉️ nyamuehud@gmail.com
                </a>
                {' • '}
                <a 
                  href="https://glimmerink.co.ke"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  🌐 glimmerink.co.ke
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}