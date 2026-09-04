import { Handshake } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Become a Provider", href: "#provider" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
              <Handshake className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-semibold text-foreground">
              CO<span className="text-clay">-</span>SERVE
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Local Services. Fair Opportunities. Stronger Communities. A cooperative-powered
            marketplace for verified local service professionals.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground lg:px-8">
          © {new Date().getFullYear()} CO-SERVE. Built with labour cooperatives.
        </p>
      </div>
    </footer>
  );
}
