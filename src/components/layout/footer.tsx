import { Link } from "@tanstack/react-router"
import { Github, Linkedin } from "lucide-react"
import { Logo } from "./logo"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <Logo />
          <div className="flex gap-3">
            <a
              href="https://github.com/Sync-Wave-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-700"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/sync-wave-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <p className="text-sm text-slate-500">
            Data engineering, AI, and analytics — built for production.
          </p>
          <div className="flex gap-4">
            <Link
              to="/brand"
              className="text-sm text-slate-400 transition-colors hover:text-sky-700"
            >
              Brand
            </Link>
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Sync Wave Analytics
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
