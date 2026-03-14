import { Link } from "@tanstack/react-router"
import { Logo } from "./logo"
import { MobileNav } from "./mobile-nav"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const

export function Navbar() {
  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-sky-100">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-700"
              activeProps={{ className: "text-sky-700" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
