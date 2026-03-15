import { useEffect } from "react"
import { Outlet, ScrollRestoration, createRootRoute, useLocation } from "@tanstack/react-router"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

declare global {
  interface Window {
    gtag: (...args: Array<unknown>) => void
  }
}

export const Route = createRootRoute({
  component: RootLayout,
})

function usePageView() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname })
    }
  }, [pathname])
}

function RootLayout() {
  usePageView()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
