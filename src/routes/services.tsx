import { createFileRoute } from "@tanstack/react-router"
import { ServicesGrid } from "@/components/sections/services-grid"
import { CtaBanner } from "@/components/sections/cta-banner"
import { usePageTitle } from "@/hooks/use-page-title"
import { AnimatedSection } from "@/components/ui/animated-section"

export const Route = createFileRoute("/services")({ component: ServicesPage })

function ServicesPage() {
  usePageTitle("Services")

  return (
    <>
      <section className="bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              What We Do
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
              Services built for{" "}
              <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                production.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500">
              From data pipelines to ML models to full stack apps — we deliver
              end-to-end solutions that work at scale.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <ServicesGrid compact={false} />
      <CtaBanner />
    </>
  )
}
