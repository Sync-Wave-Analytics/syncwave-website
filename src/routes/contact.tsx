import { createFileRoute } from "@tanstack/react-router"
import { Github, Linkedin, Mail } from "lucide-react"
import { usePageTitle } from "@/hooks/use-page-title"
import { AnimatedSection } from "@/components/ui/animated-section"

export const Route = createFileRoute("/contact")({ component: ContactPage })

function ContactPage() {
  usePageTitle("Contact")

  return (
    <section className="flex flex-1 items-center bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimatedSection>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
            Let's work{" "}
            <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
              together.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-slate-500">
            Whether you need a data pipeline, an ML model, or a full analytics
            platform — we'd love to hear about your project.
          </p>

          <a
            href="mailto:contact@syncwaveanalytics.com"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-sky-200/50"
          >
            <Mail className="size-5" />
            contact@syncwaveanalytics.com
          </a>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="https://github.com/Sync-Wave-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              <Github className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/sync-wave-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              <Linkedin className="size-6" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
