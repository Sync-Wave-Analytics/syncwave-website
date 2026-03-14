import { Link } from "@tanstack/react-router"

export function Logo() {
  return (
    <Link to="/" className="inline-flex flex-col">
      <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-lg font-bold text-transparent">
        SYNC WAVE
      </span>
      <span className="text-xs font-medium tracking-[0.3em] text-slate-400">
        ANALYTICS
      </span>
    </Link>
  )
}
