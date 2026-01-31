import { Link } from "react-router-dom";
import { Container } from "./Container";
import { BRAND } from "../config/brand";
import {
  Instagram,
  Facebook,
  Music2,
  Pin,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Globe,
} from "lucide-react";

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
              A premium garden venue where moments blossom into memories—perfect
              for celebrations, connections, and curated experiences.
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
                  <Instagram className="w-5 h-5" />
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
                  <Facebook className="w-5 h-5" />
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
                  {/* Lucide doesn’t have a TikTok icon by default.
                      "Music2" is a solid clean substitute. */}
                  <Music2 className="w-5 h-5" />
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
                  {/* Lucide uses "Pin" - not Pinterest logo, but works aesthetically */}
                  <Pin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-emerald-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/venue"
                  className="hover:text-emerald-700 transition-colors"
                >
                  The Venue
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Events & Experiences
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Experience Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Experiences
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  to="/weddings"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  to="/dining"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Garden Dining
                </Link>
              </li>
              <li>
                <Link
                  to="/family"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Family Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/photoshoots"
                  className="hover:text-emerald-700 transition-colors"
                >
                  Photoshoots
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">
              Get In Touch
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span>{BRAND.location}</span>
              </li>

              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-600 mt-0.5" />
                <a
                  href={`tel:${BRAND.phone}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-600 mt-0.5" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>

              <li className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span className="text-slate-500">{BRAND.hours}</span>
              </li>
            </ul>

            {/* Newsletter Signup (Optional) */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-900 mb-3">
                Stay Updated
              </h4>
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
              <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                {BRAND.bookingNote}
              </span>
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
                Made with{" "}
                <Heart className="inline w-4 h-4 text-emerald-600 align-[-2px]" />{" "}
                by{" "}
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
                  <Phone className="inline w-4 h-4 align-[-2px]" /> 0746 527 253
                </a>
                {" • "}
                <a
                  href="mailto:nyamuehud@gmail.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  <Mail className="inline w-4 h-4 align-[-2px]" /> nyamuehud@gmail.com
                </a>
                {" • "}
                <a
                  href="https://glimmerink.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  <Globe className="inline w-4 h-4 align-[-2px]" /> glimmerink.co.ke
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
