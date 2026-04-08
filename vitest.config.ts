import { defineConfig } from "vitest/config"
import viteTsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [viteTsConfigPaths()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    globals: true,
    css: false,
    setupFiles: ["./src/test-setup.ts"],
  },
})
