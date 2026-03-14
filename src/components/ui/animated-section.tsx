import { cn } from "@/lib/utils"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in"
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={cn(
        animation === "fade-up" ? "animate-fade-up" : "animate-fade-in",
        isVisible && "visible",
        className,
      )}
    >
      {children}
    </div>
  )
}
