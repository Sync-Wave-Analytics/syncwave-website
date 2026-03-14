import { useEffect } from "react"

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} | Sync Wave Analytics` : "Sync Wave Analytics"
  }, [title])
}
