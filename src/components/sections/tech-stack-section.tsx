import { techStack } from "@/data/tech-stack"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
              Our Tech Stack
            </span>
          </h2>
          <p className="mt-3 text-slate-500">
            The tools and frameworks we use daily
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="transition-colors duration-200 hover:border-cyan-300 hover:bg-sky-50 hover:text-sky-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
