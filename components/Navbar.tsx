"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/mysteries", label: "Mysteries" },
  { href: "/pray-along", label: "Pray Along" },
  { href: "/audio", label: "In Song" },
  { href: "/gregorian", label: "Chant" },
  { href: "/testimonies", label: "Stories" },
  { href: "/her-mantle", label: "Her Mantle" },
  { href: "/undoer-of-knots", label: "Undoer of Knots" },
  { href: "/he-will-provide", label: "He Will Provide" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      role="banner"
      className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur"
    >
      <div className="mx-auto h-16 max-w-5xl px-4 sm:px-6 flex items-center gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 no-underline"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden="true" className="text-accent text-xl leading-none">
            ✠
          </span>
          <span className="font-extrabold text-[17px] tracking-tight text-text whitespace-nowrap">
            Holy Rosary
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="ml-auto hidden lg:flex items-center gap-0.5"
        >
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-md text-[14px] font-semibold transition-colors ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-text-muted hover:text-accent hover:bg-accent-soft"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-text-muted hover:text-accent hover:bg-accent-soft transition-colors"
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        hidden={!open}
        className="lg:hidden border-t border-border bg-surface"
      >
        <ul className="px-3 py-2">
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block px-3 py-3 rounded-md text-[15px] font-semibold transition-colors ${
                    active
                      ? "bg-accent-soft text-accent"
                      : "text-text hover:text-accent hover:bg-accent-soft"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
