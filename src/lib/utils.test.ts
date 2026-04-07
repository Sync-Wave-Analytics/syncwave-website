import { cn } from "@/lib/utils"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles falsy values", () => {
    expect(cn("base", false, "visible")).toBe("base visible")
  })

  it("deduplicates conflicting Tailwind classes", () => {
    expect(cn("px-4", "px-8")).toBe("px-8")
  })

  it("handles undefined and null inputs", () => {
    expect(cn("base", undefined, null)).toBe("base")
  })

  it("handles empty inputs", () => {
    expect(cn()).toBe("")
  })
})
