import { team } from "@/data/team"

describe("team data", () => {
  it("has at least one team member", () => {
    expect(team.length).toBeGreaterThan(0)
  })

  it("has unique names", () => {
    const names = team.map((m) => m.name)
    expect(new Set(names).size).toBe(names.length)
  })

  it("has non-empty required fields", () => {
    for (const member of team) {
      expect(member.name).toBeTruthy()
      expect(member.role).toBeTruthy()
      expect(member.bio).toBeTruthy()
      expect(member.initials).toBeTruthy()
    }
  })

  it("has initials in correct format (2 uppercase letters)", () => {
    for (const member of team) {
      expect(member.initials).toMatch(/^[A-Z]{2}$/)
    }
  })
})
