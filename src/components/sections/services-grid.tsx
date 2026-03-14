import { services } from "@/data/services"
import { AnimatedSection } from "@/components/ui/animated-section"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ServicesGridProps {
  compact?: boolean
}

export function ServicesGrid({ compact = false }: ServicesGridProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection animation="fade-up" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.id} animation="fade-up">
                <Card
                  className={cn(
                    "h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-100/50",
                  )}
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="inline-flex rounded-lg bg-sky-100 p-2">
                        <Icon className="size-5 text-sky-700" />
                      </div>
                      <CardTitle className="text-lg text-slate-800">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-slate-500">
                      {compact
                        ? service.shortDescription
                        : service.fullDescription}
                    </CardDescription>
                  </CardHeader>

                  {!compact && (
                    <CardContent className="space-y-4">
                      {/* Technology badges */}
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Use cases */}
                      <ul className="space-y-1.5 text-sm text-slate-500">
                        {service.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-start gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
