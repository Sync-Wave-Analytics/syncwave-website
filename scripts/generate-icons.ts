import sharp from "sharp"
import { readFileSync } from "fs"

const svg = readFileSync("public/brand/logo-icon.svg")

const sizes = [
  { width: 16, height: 16, name: "public/brand/favicon-16.png" },
  { width: 32, height: 32, name: "public/brand/favicon-32.png" },
  { width: 180, height: 180, name: "public/brand/apple-touch-icon.png" },
  { width: 192, height: 192, name: "public/brand/icon-192.png" },
  { width: 512, height: 512, name: "public/brand/icon-512.png" },
]

for (const { width, height, name } of sizes) {
  await sharp(svg).resize(width, height).png().toFile(name)
  console.log(`Created ${name}`)
}
