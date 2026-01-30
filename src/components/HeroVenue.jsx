import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Button } from "./Button";
import { Badge } from "./Badge";

export function HeroVenue() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Luxe Garden"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay (like Asyana) */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Optional soft gradient for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/35" />
      </div>

      {/* Content */}
      <Container className="relative flex min-h-[78vh] items-center py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex justify-center">
            <Badge className="border-white/20 bg-white/10 text-white">
              Weddings • Events • Dining • Kids • Photoshoots
            </Badge>
          </div>

          <div className="mb-3 text-xs font-semibold tracking-[0.25em] text-white/80">
            BEAUTIFUL • TRANQUIL • PREMIUM
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Dine. Have Fun. Hold Events.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/85 sm:text-base">
            Luxe Garden is a premium destination for celebrations, dining, play and
            relaxed experiences — curated to look amazing in photos.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/venue">
              <Button variant="outline" className="w-full border-white/30 bg-transparent text-blue hover:bg-white/10 sm:w-auto">
                Read More
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="w-full sm:w-auto">Contact Us</Button>
            </Link>
          </div>

          {/* Asyana-like “quick highlights” */}
          <div className="mt-10 grid gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-left text-sm text-white/90 backdrop-blur sm:grid-cols-3">
            <div>
              <div className="text-xs font-semibold tracking-wide text-emerald-200">ACTIVITIES</div>
              <div className="mt-1 font-semibold">Family-friendly experiences.</div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wide text-emerald-200">DINING</div>
              <div className="mt-1 font-semibold">Brunch, lunch, private setups.</div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wide text-emerald-200">EVENTS</div>
              <div className="mt-1 font-semibold">Weddings & celebrations.</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
