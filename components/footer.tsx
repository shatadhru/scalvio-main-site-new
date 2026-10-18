import { Logo } from "@/components/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-muted/20 text-muted-foreground text-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="text-xs">
            © {currentYear} Scalvio. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="#services" className="hover:text-foreground">
            Services
          </a>
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#process" className="hover:text-foreground">
            Process
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a
            href="mailto:hello@scalvio.com"
            className="text-primary hover:underline font-semibold"
          >
            hello@scalvio.com
          </a>
        </div>
      </div>
    </footer>
  );
}
