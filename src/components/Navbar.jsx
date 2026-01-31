import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { BRAND } from "../config/brand";
import { Button } from "./Button";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC to close + lock body scroll when menu is open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-10 w-10 lg:h-12 lg:w-12 grid place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg">
              <span className="text-lg lg:text-xl font-bold tracking-tight">LG</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-base lg:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              {BRAND.name}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Premium Garden Venue
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
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
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg" />
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
              <Phone className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="hidden xl:inline">{BRAND.phone}</span>
          </a>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-200">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/contact" className="mr-1">
            <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-emerald-700">
              Book
            </Button>
          </Link>

          {/* Premium hamburger: icon button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`h-10 w-10 grid place-items-center rounded-xl border transition-all ${
              isMenuOpen
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            } shadow-sm`}
          >
            <span className="relative">
              <Menu
                className={`w-5 h-5 transition-all duration-200 ${
                  isMenuOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <X
                className={`w-5 h-5 absolute inset-0 transition-all duration-200 ${
                  isMenuOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`lg:hidden fixed right-3 top-3 z-50 h-[calc(100vh-1.5rem)] w-[min(22rem,calc(100vw-1.5rem))] 
          rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden
          transform transition-all duration-300 ease-out
          ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0 pointer-events-none"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
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
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="h-10 w-10 grid place-items-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Nav */}
        <nav className="p-5">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all border ${
                      isActive
                        ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                        : "bg-white border-slate-100 text-slate-700 hover:bg-slate-50 hover:border-slate-200"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isActive ? "bg-emerald-500" : "bg-slate-300 group-hover:bg-emerald-300"
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                      <ChevronRight
                        className={`ml-auto w-4 h-4 transition-all ${
                          isActive ? "text-emerald-600 translate-x-0" : "text-slate-400 translate-x-0 group-hover:translate-x-0.5"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer / contact */}
        <div className="mt-auto border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5">
          <div className="grid gap-3">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-3 p-3 rounded-2xl border border-emerald-100 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 grid place-items-center">
                <Phone className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-600">Call us</div>
                <div className="text-sm font-extrabold text-emerald-800">{BRAND.phone}</div>
              </div>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 grid place-items-center">
                <Mail className="w-5 h-5 text-slate-700" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium text-slate-600">Email us</div>
                <div className="text-sm font-bold text-slate-700 truncate">{BRAND.email}</div>
              </div>
            </a>

            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Socials (keep yours, just tighter) */}
          {(BRAND.socials.instagram || BRAND.socials.facebook) && (
            <div className="mt-5 pt-5 border-t border-slate-200">
              <div className="flex justify-center gap-3">
                {BRAND.socials.instagram && (
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                    aria-label="Instagram"
                  >
                    {/* keep your svg here if you want */}
                    <span className="text-sm font-semibold">IG</span>
                  </a>
                )}
                {BRAND.socials.facebook && (
                  <a
                    href={BRAND.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="text-sm font-semibold">FB</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </aside>
    </header>
  );
}
