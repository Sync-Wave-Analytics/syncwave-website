import { Link } from "@tanstack/react-router"
import { ArrowDown, Cpu, Database, Rocket } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const pipelineSteps = [
  { icon: Database, label: "Source" },
  { icon: ArrowDown, label: "Transform" },
  { icon: Cpu, label: "Model" },
  { icon: Rocket, label: "Deploy" },
] as const

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left column */}
          <AnimatedSection animation="fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              AI-POWERED ANALYTICS
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl lg:text-6xl">
              Turn raw data into
              <br />
              <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                real impact.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-500">
              We build production-grade data pipelines, ML models, and analytics
              that drive decisions — not just dashboards.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
            >
              Get in touch
            </Link>
          </AnimatedSection>

          {/* Right column — pipeline visualization */}
          <AnimatedSection
            animation="fade-in"
            className="hidden md:flex md:justify-center"
          >
            <div className="flex flex-col items-center gap-0">
              {pipelineSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    {/* Step card */}
                    <div className="flex w-44 items-center justify-center gap-3 rounded-xl border border-sky-200/60 bg-sky-100/80 px-5 py-3 shadow-sm backdrop-blur-sm">
                      <Icon className="size-5 text-sky-700" />
                      <span className="text-sm font-semibold text-sky-700">
                        {step.label}
                      </span>
                    </div>

                    {/* Connecting dots between steps */}
                    {index < pipelineSteps.length - 1 && (
                      <div className="flex flex-col items-center gap-1.5 py-2">
                        <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />
                        <span
                          className="size-1.5 animate-pulse rounded-full bg-cyan-400"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="size-1.5 animate-pulse rounded-full bg-cyan-400"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave SVG decoration */}
      <div className="absolute inset-x-0 -bottom-px">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z"
            className="fill-[#fefce8]"
          />
        </svg>
      </div>
    </section>
  )
}
