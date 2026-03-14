import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-0">
        <SheetHeader className="border-b border-sky-100 px-6 py-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <SheetClose
              key={link.to}
              render={
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700"
                  activeProps={{ className: "bg-sky-50 text-sky-700" }}
                />
              }
            >
              {link.label}
            </SheetClose>
          ))}
          <div className="mt-4 px-3">
            <SheetClose
              render={
                <Link
                  to="/contact"
                  className="block w-full rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-4 py-2 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
                />
              }
            >
              Contact
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
