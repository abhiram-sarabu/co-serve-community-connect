import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench,
  Zap,
  Hammer,
  PaintRoller,
  Sparkles,
  Leaf,
  Car,
  HeartHandshake,
  Search,
  MapPin,
  ClipboardList,
  Users,
  CalendarCheck,
  BadgeCheck,
  Star,
  ShieldCheck,
  Scale,
  Receipt,
  LifeBuoy,
  Home,
  Compass,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import heroImage from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CO-SERVE — Local Services from Labour Cooperatives" },
      {
        name: "description",
        content:
          "Find verified local service professionals from labour cooperatives for reliable household and community services. Fair opportunities, stronger communities.",
      },
      { property: "og:title", content: "CO-SERVE — Local Services from Labour Cooperatives" },
      {
        property: "og:description",
        content:
          "Book verified plumbers, electricians, carpenters, cleaners and more from your local labour cooperative network.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Plumbing", icon: Wrench, note: "Leaks, fittings, repairs" },
  { name: "Electrical", icon: Zap, note: "Wiring, fixtures, safety" },
  { name: "Carpentry", icon: Hammer, note: "Furniture and fittings" },
  { name: "Painting", icon: PaintRoller, note: "Interior and exterior" },
  { name: "Cleaning", icon: Sparkles, note: "Homes and offices" },
  { name: "Gardening", icon: Leaf, note: "Lawns and landscaping" },
  { name: "Driving", icon: Car, note: "Trips and errands" },
  { name: "Caregiving", icon: HeartHandshake, note: "Elder and home care" },
];

const steps = [
  { title: "Request a Service", icon: ClipboardList, text: "Tell us what you need and where." },
  { title: "Get Matched", icon: Users, text: "We surface suitable cooperative workers nearby." },
  { title: "Book a Professional", icon: CalendarCheck, text: "Confirm a time that works for you." },
  { title: "Get the Service", icon: BadgeCheck, text: "A verified professional arrives on site." },
  { title: "Pay & Rate", icon: Star, text: "Settle transparently and share feedback." },
];

const chain = [
  { label: "Labour Federation", note: "Apex body of cooperatives" },
  { label: "Labour Cooperatives", note: "Member-owned worker societies" },
  { label: "Verified Local Workers", note: "Skill and identity assessed" },
  { label: "Customers & Institutions", note: "Households, offices, campuses" },
  { label: "Fair Income + Worker Welfare + Stronger Communities", note: "Value stays local" },
];

const features = [
  {
    title: "Verified Skills",
    icon: ShieldCheck,
    text: "Workers are verified through identity, experience, skills and cooperative assessment.",
  },
  {
    title: "Fair Opportunities",
    icon: Scale,
    text: "Connect cooperative workers with more local employment opportunities.",
  },
  {
    title: "Transparent Earnings",
    icon: Receipt,
    text: "Make worker earnings and service pricing clearer.",
  },
  {
    title: "Worker Welfare",
    icon: LifeBuoy,
    text: "Support access to welfare and worker-benefit programs.",
  },
  {
    title: "Local Workforce",
    icon: Home,
    text: "Prioritize qualified professionals from the local cooperative network.",
  },
  {
    title: "Intelligent Matching",
    icon: Compass,
    text: "Match customers with suitable workers based on skills, location and availability.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="grain-panel absolute inset-0 -z-10" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
            <div className="rise-in">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/8 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand uppercase">
                <Handshakeless /> Cooperative-powered marketplace
              </p>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-foreground sm:text-5xl lg:text-6xl">
                Local Services.{" "}
                <span className="text-clay">Fair Opportunities.</span> Stronger Communities.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Find verified local service professionals from labour cooperatives for reliable
                household and community services.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button variant="brand" size="xl" asChild>
                  <a href="#search">
                    Find a Service <ArrowRight />
                  </a>
                </Button>
                <Button variant="quiet" size="xl" asChild>
                  <a href="#provider">Become a Provider</a>
                </Button>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
                {[
                  ["8", "Service categories"],
                  ["100%", "Cooperative workers"],
                  ["5-step", "Simple booking"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl font-semibold text-brand">{value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-clay/12"
                aria-hidden="true"
              />
              <img
                src={heroImage}
                width={1280}
                height={960}
                alt="Illustration of local cooperative service workers standing together in their neighbourhood"
                className="w-full rounded-3xl border border-border object-cover shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Search */}
        <section id="search" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-16">
            <h2 className="text-center font-display text-3xl font-semibold text-foreground">
              What service do you need?
            </h2>
            <form
              className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-sm sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 focus-within:bg-secondary/70">
                <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <label htmlFor="service" className="sr-only">
                  Search for a service
                </label>
                <input
                  id="service"
                  type="text"
                  placeholder="Search for a service..."
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="hidden w-px bg-border sm:block" aria-hidden="true" />
              <div className="flex flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 focus-within:bg-secondary/70">
                <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                <label htmlFor="location" className="sr-only">
                  Enter your location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter your location"
                  className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button type="submit" variant="brand" size="xl" className="sm:w-auto">
                Find Services
              </Button>
            </form>
          </div>
        </section>

        {/* Popular services */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest text-clay uppercase">
                Popular services
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Everyday work, done properly
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every category is staffed by cooperative members whose skills and identity have been
              assessed.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {services.map(({ name, icon: Icon, note }) => (
              <li key={name}>
                <a
                  href="#search"
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-lg font-semibold text-foreground">{name}</span>
                  <span className="text-xs text-muted-foreground">{note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-xs font-semibold tracking-widest text-clay uppercase">
              How CO-SERVE works
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Five steps from request to a job well done
            </h2>

            <ol className="relative mt-14 grid gap-8 md:grid-cols-5">
              <div
                className="absolute top-6 right-6 left-6 hidden h-px bg-border md:block"
                aria-hidden="true"
              />
              {steps.map(({ title, icon: Icon, text }, i) => (
                <li key={title} className="relative flex gap-4 md:block">
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-background text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="md:mt-5">
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                      STEP {i + 1}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cooperative model */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-widest text-clay uppercase">
                Powered by labour cooperatives
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                A marketplace owned by the people who do the work
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  CO-SERVE is designed around cooperative workers rather than a conventional private
                  service marketplace. Every professional on the platform belongs to a registered
                  labour cooperative, affiliated to a labour federation that supports training,
                  verification and welfare.
                </p>
                <p>
                  Instead of extracting value from independent gig workers, the cooperative model
                  keeps earnings, accountability and decision-making inside the community that
                  delivers the service.
                </p>
              </div>
            </div>

            <ol className="space-y-2" aria-label="Cooperative value chain">
              {chain.map((node, i) => (
                <li key={node.label}>
                  <div
                    className={`rounded-2xl border p-5 ${
                      i === chain.length - 1
                        ? "border-clay/30 bg-clay/10"
                        : "border-border bg-card"
                    }`}
                  >
                    <p
                      className={`font-display text-base font-semibold ${
                        i === chain.length - 1 ? "text-clay" : "text-foreground"
                      }`}
                    >
                      {node.label}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{node.note}</p>
                  </div>
                  {i < chain.length - 1 && (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <ArrowDown className="size-4 text-brand/50" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-xs font-semibold tracking-widest text-clay uppercase">
              Why CO-SERVE?
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Built for trust on both sides of the job
            </h2>

            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, icon: Icon, text }) => (
                <li
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-clay/12 text-clay">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section id="provider" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grain-panel relative overflow-hidden rounded-3xl border border-brand/20 bg-brand px-6 py-16 text-center sm:px-12">
            <h2 className="font-display text-3xl font-semibold text-brand-foreground sm:text-4xl">
              Need a skilled professional?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-foreground/80">
              Find trusted local workers through CO-SERVE.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button variant="clay" size="xl" asChild>
                <a href="#search">
                  Find a Service <ArrowRight />
                </a>
              </Button>
              <Button
                size="xl"
                variant="quiet"
                className="border-brand-foreground/35 text-brand-foreground hover:bg-brand-foreground/10"
                asChild
              >
                <a href="#services">Join as a Provider</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Handshakeless() {
  return <span className="size-1.5 rounded-full bg-clay" aria-hidden="true" />;
}
