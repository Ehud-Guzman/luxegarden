import { Container } from "./Container";
import { Badge } from "./Badge";

export function PageHero({ kicker, title, subtitle, imageSrc }) {
  return (
    <section className="border-b border-slate-100 bg-white">
      <Container className="py-10 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            {kicker ? (
              <div className="mb-3">
                <Badge className="border-emerald-200 bg-emerald-50 text-emerald-800">
                  {kicker}
                </Badge>
              </div>
            ) : null}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-soft">
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
