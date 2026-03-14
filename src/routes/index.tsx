import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "@/components/sections/hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { CtaBanner } from "@/components/sections/cta-banner"
import { usePageTitle } from "@/hooks/use-page-title"

export const Route = createFileRoute("/")({ component: HomePage })

function HomePage() {
  usePageTitle("")

  return (
    <>
      <Hero />
      <ServicesGrid compact />
      <TechStackSection />
      <CtaBanner />
    </>
  )
}
