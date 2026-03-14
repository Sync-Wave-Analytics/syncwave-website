import { createFileRoute } from "@tanstack/react-router"
import { Brain, Database, Shield, Users } from "lucide-react"
import { usePageTitle } from "@/hooks/use-page-title"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { team } from "@/data/team"
import { CtaBanner } from "@/components/sections/cta-banner"

export const Route = createFileRoute("/about")({ component: AboutPage })

const pillars = [
  {
    icon: Database,
    title: "Data-Driven",
    description:
      "Every decision grounded in data. We build systems that surface the right insights at the right time.",
  },
  {
    icon: Shield,
    title: "Production-Grade",
    description:
      "No prototypes left in production. We engineer for reliability, scale, and maintainability from day one.",
  },
  {
    icon: Brain,
    title: "AI-First",
    description:
      "Machine learning isn't an afterthought — it's woven into our approach to solving complex problems.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "We embed with your team, understand your domain, and build solutions that fit your workflow.",
  },
]

function AboutPage() {
  usePageTitle("About")

  return (
    <>
      {/* Story section */}
      <section className="bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Our Story
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
              Small team.{" "}
              <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Big data.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Sync Wave Analytics was born from a decade of building data systems
              at companies like Spotify, JPMorgan Chase, and ESPN — where
              messy, complex data had to become something people could actually
              act on. We keep our team small by design so every project gets
              senior-level attention from start to finish.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-800">
              How we work
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <AnimatedSection key={pillar.title}>
                <Card className="h-full border-sky-100 transition-all hover:border-sky-200 hover:shadow-md hover:shadow-sky-100/50">
                  <CardHeader>
                    <div className="mb-3 inline-flex rounded-lg bg-sky-50 p-2.5">
                      <pillar.icon className="size-5 text-sky-700" />
                    </div>
                    <CardTitle className="text-slate-800">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sky-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-800">
              Meet the team
            </h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            {team.map((member) => (
              <AnimatedSection key={member.name}>
                <Card className="h-full border-sky-100 text-center">
                  <CardHeader className="justify-items-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mb-2 size-20 rounded-full object-cover ring-2 ring-sky-200"
                      />
                    ) : (
                      <div className="mb-2 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-sky-700 to-cyan-600 text-xl font-bold text-white">
                        {member.initials}
                      </div>
                    )}
                    <CardTitle className="text-slate-800">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-cyan-600">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-left text-sm leading-relaxed text-slate-500">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
