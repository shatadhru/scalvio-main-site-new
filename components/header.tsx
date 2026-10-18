"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Menu,
  RefreshCw,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SERVICES_NAV = [
  {
    title: "Custom Web Applications",
    href: "/#services",
    description:
      "Full-stack apps engineered with Next.js, TypeScript, and robust databases.",
    icon: Code2,
  },
  {
    title: "High-Converting Websites",
    href: "/#services",
    description:
      "Sub-second load times, crisp typography, and conversion funnels.",
    icon: Globe,
  },
  {
    title: "SaaS & MVP Engineering",
    href: "/#services",
    description:
      "Rapid technical prototyping, Stripe billing, and scalable foundations.",
    icon: Rocket,
  },
  {
    title: "Website Modernization",
    href: "/#services",
    description:
      "Refactoring legacy codebases for Core Web Vitals and clean UI.",
    icon: RefreshCw,
  },
  {
    title: "API & Backend Integrations",
    href: "/#services",
    description:
      "Serverless pipelines, webhooks, and secure operational logic.",
    icon: Cpu,
  },
];

const SIMPLE_LINKS = [
  { href: "/#work", label: "Selected Work" },
  { href: "/#process", label: "Our Process" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md shadow-xs py-2.5"
          : "border-b border-border/40 bg-background/60 backdrop-blur-sm py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity / Logo from public folder */}
        <Link
          href="/"
          className="group flex items-center outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          aria-label="Scalvio Home"
        >
          <Logo size="md" />
        </Link>

        {/* Desktop Navigation Menu (using Shadcn NavigationMenu) */}
        <div className="hidden md:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 md:w-[500px] lg:w-[600px] grid grid-cols-2 gap-3 bg-popover/95 backdrop-blur-md border border-border shadow-xl rounded-xl">
                  {SERVICES_NAV.map((service) => {
                    const Icon = service.icon;
                    return (
                      <NavigationMenuLink
                        key={service.title}
                        href={service.href}
                        className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/80 focus:bg-muted outline-none"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary mt-0.5">
                          <Icon className="size-4" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-semibold text-foreground leading-tight">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-[11px] text-muted-foreground leading-snug">
                            {service.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    );
                  })}
                  <div className="col-span-2 pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="size-3.5 text-primary" />
                      Direct developer consultation
                    </span>
                    <a
                      href="/#services"
                      className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View all capabilities <ArrowRight className="size-3" />
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Direct Navigation Links */}
              {SIMPLE_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className="h-9 px-3 text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center rounded-md transition-colors hover:bg-muted/60"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action CTAs, Theme Switcher & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          <Button
            asChild
            size="default"
            className="hidden sm:inline-flex font-semibold shadow-xs"
          >
            <a href="#contact" className="gap-2">
              <span>Start a Project</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>

          {/* Full Screen Mobile Navigation Menu (Shadcn Sheet) */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="md:hidden inline-flex size-10 items-center justify-center rounded-xl text-foreground hover:bg-muted active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-border/60"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="full"
              showCloseButton={true}
              className="p-0 border-0 flex flex-col justify-between overflow-hidden bg-background/95 backdrop-blur-xl supports-backdrop-filter:backdrop-blur-2xl"
            >
              {/* Top Bar inside Full Screen Sheet */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/60 shrink-0">
                <SheetHeader className="p-0 m-0 text-left">
                  <SheetTitle className="flex items-center m-0">
                    <Logo size="md" />
                  </SheetTitle>
                </SheetHeader>
              </div>

              {/* Scrollable Center Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                {/* Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      Engineering Capabilities
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/70">
                      04 Modules
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_NAV.map((s) => {
                      const Icon = s.icon;
                      return (
                        <SheetClose
                          key={s.title}
                          render={(props) => (
                            <a
                              {...props}
                              href={s.href}
                              className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-border/70 hover:border-primary/50 bg-card/60 hover:bg-accent/40 active:scale-[0.99] transition-all"
                            >
                              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-0.5">
                                <Icon className="size-4" />
                              </div>
                              <div className="space-y-1">
                                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                                  {s.title}
                                </span>
                                <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                  {s.description}
                                </span>
                              </div>
                            </a>
                          )}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Direct Page Navigation */}
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                    Navigation
                  </span>
                  <div className="rounded-xl border border-border/70 divide-y divide-border/60 bg-card/40 overflow-hidden">
                    {SIMPLE_LINKS.map((link) => (
                      <SheetClose
                        key={link.href}
                        render={(props) => (
                          <a
                            {...props}
                            href={link.href}
                            className="flex items-center justify-between p-3.5 text-sm font-medium text-foreground hover:bg-muted/80 active:bg-muted transition-colors"
                          >
                            <span>{link.label}</span>
                            <ChevronRight className="size-4 text-muted-foreground" />
                          </a>
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Sticky Action Area */}
              <div className="p-6 border-t border-border/80 bg-background/95 backdrop-blur-md shrink-0">
                <SheetClose
                  render={(props) => (
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-center font-semibold text-base h-12 shadow-md"
                      {...props}
                    >
                      <a href="#contact" className="gap-2">
                        <span>Start a Project</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  )}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
