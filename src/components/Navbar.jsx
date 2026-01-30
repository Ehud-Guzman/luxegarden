import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { BRAND } from "../config/brand";
import { Button } from "./Button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/venue", label: "The Venue" },
  { to: "/activities", label: "Activities" },
  { to: "/events", label: "Events" },
  { to: "/dining", label: "Dining" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Bookings" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80" 
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <Container className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg">
                <span className="text-lg lg:text-xl font-bold tracking-tight">LG</span>
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-base lg:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                {BRAND.name}
              </div>
              <div className="text-xs text-slate-500 font-medium">Premium Garden Venue</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-emerald-700"
                      : "text-slate-700 hover:text-emerald-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg -m-2"></div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA & Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="group flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="hidden xl:inline">{BRAND.phone}</span>
            </a>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contact" className="mr-2">
              <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                Book
              </Button>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 top-2 h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`absolute left-0 top-3 h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute left-0 top-4 h-0.5 w-6 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </Container>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Slide-in */}
        <div
          className={`lg:hidden fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
                <span className="text-lg font-bold">LG</span>
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-slate-900">{BRAND.name}</div>
                <div className="text-xs text-slate-500">Garden Venue</div>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-emerald-600"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                        <span>{item.label}</span>
                        {isActive && (
                          <svg className="ml-auto w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Info */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6">
            <div className="space-y-4">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-700">Call us</div>
                  <div className="text-base font-bold text-emerald-700">{BRAND.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-700">Email us</div>
                  <div className="text-sm font-bold text-slate-700 truncate">{BRAND.email}</div>
                </div>
              </a>

              <div className="pt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex justify-center gap-4">
                {BRAND.socials.instagram && (
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </a>
                )}
                {BRAND.socials.facebook && (
                  <a
                    href={BRAND.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}