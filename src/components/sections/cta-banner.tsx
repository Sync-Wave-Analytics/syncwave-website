import { AnimatedSection } from "@/components/ui/animated-section"

export function CtaBanner() {
  return (
    <section className="py-20">
      <AnimatedSection
        animation="fade-up"
        className="mx-auto max-w-4xl px-6"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50 p-12 text-center md:p-16">
          {/* Background wave pattern decoration */}
          <svg
            className="pointer-events-none absolute inset-0 size-full opacity-[0.07]"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 200C100 260 200 140 300 200C400 260 500 140 600 200C700 260 800 140 800 200V400H0V200Z"
              className="fill-sky-600"
            />
            <path
              d="M0 260C120 320 240 200 360 260C480 320 600 200 720 260C780 290 800 280 800 260V400H0V260Z"
              className="fill-cyan-600"
            />
            <path
              d="M0 300C150 360 300 260 450 300C600 340 750 260 800 300V400H0V300Z"
              className="fill-teal-600"
            />
          </svg>

          <div className="relative">
            <h2 className="text-3xl font-bold text-slate-800">
              Ready to transform your data?
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Let's build something production-grade together.
            </p>
            <a
              href="mailto:contact@syncwaveanalytics.com"
              className="mt-8 inline-flex rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
            >
              Get in touch
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
