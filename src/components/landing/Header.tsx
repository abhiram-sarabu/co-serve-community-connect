import { useState } from "react";
import { Menu, X, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Become a Provider", href: "#provider" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="CO-SERVE home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Handshake className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            CO<span className="text-clay">-</span>SERVE
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" className="text-foreground">
            Login
          </Button>
          <Button variant="brand">Sign Up</Button>
        </div>

        <Button
          variant="quiet"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-1 py-3 text-sm font-medium text-foreground hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex gap-2 pb-2">
              <Button variant="quiet" className="flex-1">
                Login
              </Button>
              <Button variant="brand" className="flex-1">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
