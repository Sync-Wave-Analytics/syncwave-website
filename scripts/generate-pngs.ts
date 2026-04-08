import { readdir } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"

const BRAND_DIR = join(import.meta.dirname, "..", "public", "brand")
const SCALE = 3

const svgs = (await readdir(BRAND_DIR)).filter((f) => f.endsWith(".svg"))

for (const svg of svgs) {
  const png = svg.replace(".svg", ".png")
  const input = join(BRAND_DIR, svg)
  const output = join(BRAND_DIR, png)

  const metadata = await sharp(input).metadata()
  const width = metadata.width * SCALE
  const height = metadata.height * SCALE

  await sharp(input)
    .resize(width, height)
    .png({ compressionLevel: 9 })
    .toFile(output)

  console.log(`${svg} → ${png} (${width}x${height})`)
}
