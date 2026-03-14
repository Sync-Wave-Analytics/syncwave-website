import { createFileRoute } from "@tanstack/react-router"
import { Briefcase, MapPin } from "lucide-react"
import { usePageTitle } from "@/hooks/use-page-title"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { jobs } from "@/data/jobs"

export const Route = createFileRoute("/careers")({ component: CareersPage })

function CareersPage() {
  usePageTitle("Careers")

  return (
    <>
      {/* Culture section */}
      <section className="bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Careers
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
              Build with us.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              We're a small, focused team that values deep work, ownership, and
              shipping production-grade solutions. If you're passionate about
              data, AI, and building things that matter — we'd love to hear from
              you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-800">
              Open Positions
            </h2>
          </AnimatedSection>

          {jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs.map((job) => (
                <AnimatedSection key={job.id}>
                  <Card className="border-sky-100 transition-all hover:border-sky-200 hover:shadow-md hover:shadow-sky-100/50">
                    <CardHeader>
                      <CardTitle className="text-slate-800">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase className="size-3.5" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {job.location}
                        </span>
                      </CardDescription>
                      {job.description && (
                        <p className="mt-2 text-sm text-slate-500">
                          {job.description}
                        </p>
                      )}
                    </CardHeader>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <Card className="border-sky-100 bg-sky-50/50">
                <CardHeader className="text-center">
                  <CardTitle className="text-slate-700">
                    No open positions right now
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    We're not actively hiring, but we're always interested in
                    hearing from talented people. Drop us a line if you'd like to
                    connect.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          )}

          {/* Application CTA */}
          <AnimatedSection className="mt-12 text-center">
            <p className="mb-4 text-slate-500">
              Interested in working with us?
            </p>
            <a
              href="mailto:contact@syncwaveanalytics.com?subject=Career Inquiry"
              className="inline-flex rounded-lg bg-gradient-to-r from-sky-700 to-cyan-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-sky-200/50"
            >
              Send us your resume
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
