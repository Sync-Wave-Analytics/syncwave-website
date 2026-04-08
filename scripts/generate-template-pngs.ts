import { join } from "node:path"
import { chromium } from "playwright"

const BRAND_DIR = join(import.meta.dirname, "..", "public", "brand")

const templates = [
  { file: "social/linkedin-profile.html", width: 400, height: 400 },
  { file: "social/linkedin-banner.html", width: 1584, height: 396 },
  { file: "social/twitter-profile.html", width: 400, height: 400 },
  { file: "social/twitter-header.html", width: 1500, height: 500 },
  { file: "social/github-avatar.html", width: 500, height: 500 },
  { file: "collateral/og-image.html", width: 1200, height: 630 },
]

const browser = await chromium.launch()

for (const template of templates) {
  const htmlPath = join(BRAND_DIR, template.file)
  const pngPath = htmlPath.replace(".html", ".png")

  const page = await browser.newPage({
    viewport: { width: template.width, height: template.height },
    deviceScaleFactor: 2,
  })

  await page.goto(`file://${htmlPath}`)
  await page.screenshot({ path: pngPath, type: "png" })
  await page.close()

  console.log(
    `${template.file} → ${template.file.replace(".html", ".png")} (${template.width}x${template.height} @2x)`
  )
}

await browser.close()
