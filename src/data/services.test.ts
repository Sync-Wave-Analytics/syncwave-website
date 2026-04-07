import { services } from "@/data/services"

describe("services data", () => {
  it("has at least one service", () => {
    expect(services.length).toBeGreaterThan(0)
  })

  it("has unique IDs", () => {
    const ids = services.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("has non-empty required fields", () => {
    for (const service of services) {
      expect(service.id).toBeTruthy()
      expect(service.title).toBeTruthy()
      expect(service.shortDescription).toBeTruthy()
      expect(service.fullDescription).toBeTruthy()
    }
  })

  it("has non-empty technologies array", () => {
    for (const service of services) {
      expect(service.technologies.length).toBeGreaterThan(0)
      for (const tech of service.technologies) {
        expect(tech).toBeTruthy()
      }
    }
  })

  it("has non-empty useCases array", () => {
    for (const service of services) {
      expect(service.useCases.length).toBeGreaterThan(0)
      for (const useCase of service.useCases) {
        expect(useCase).toBeTruthy()
      }
    }
  })
})
