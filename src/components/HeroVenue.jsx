import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Sparkles, CalendarCheck, UtensilsCrossed, Camera, MapPin } from "lucide-react";

export function HeroVenue() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Luxe Garden"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Premium overlay stack */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/45" />

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 [background:radial-gradient(80%_60%_at_50%_35%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 shadow-[inset_0_-120px_140px_rgba(0,0,0,0.65)]" />
      </div>

      {/* Content */}
      <Container className="relative flex min-h-[82vh] items-center py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-5 flex justify-center">
            <Badge className="border-white/15 bg-white/10 text-white backdrop-blur">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-200" />
                Weddings • Events • Dining • Kids • Photoshoots
              </span>
            </Badge>
          </div>

          {/* Eyebrow */}
          <div className="mb-3 text-[11px] font-semibold tracking-[0.32em] text-white/80">
            BEAUTIFUL • TRANQUIL • PREMIUM
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Dine. Play. Celebrate —
            <span className="block bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">
              in a garden built for memories.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            Luxe Garden is a premium destination for celebrations, dining, play,
            and relaxed experiences — curated to look incredible in photos.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg shadow-emerald-500/20">
                Contact Us
              </Button>
            </Link>

            <Link to="/venue" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white/25 bg-white/5 text-white hover:bg-white/10 backdrop-blur"
              >
                Read More
              </Button>
            </Link>
          </div>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
              <MapPin className="h-4 w-4 text-emerald-200" />
              Easy to find • Secure parking
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
              <CalendarCheck className="h-4 w-4 text-emerald-200" />
              Bookings available weekly
            </span>
          </div>

          {/* Premium highlights */}
          <div className="mt-10 grid gap-3 rounded-3xl border border-white/12 bg-white/8 p-4 text-left text-sm text-white/90 backdrop-blur sm:grid-cols-3 sm:p-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-200">
                <Sparkles className="h-4 w-4" />
                ACTIVITIES
              </div>
              <div className="mt-2 font-semibold text-white">
                Family-friendly experiences.
              </div>
              <div className="mt-1 text-xs text-white/70">
                Kids play, chill spaces, and good vibes.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-200">
                <UtensilsCrossed className="h-4 w-4" />
                DINING
              </div>
              <div className="mt-2 font-semibold text-white">
                Brunch, lunch, private setups.
              </div>
              <div className="mt-1 text-xs text-white/70">
                Romantic tables • group platters • events catering.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-200">
                <Camera className="h-4 w-4" />
                EVENTS
              </div>
              <div className="mt-2 font-semibold text-white">
                Weddings & celebrations.
              </div>
              <div className="mt-1 text-xs text-white/70">
                Designed to look premium in every photo.
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/40 to-transparent" />
    </section>
  );
}
