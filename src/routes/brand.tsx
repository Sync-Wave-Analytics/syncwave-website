import { createFileRoute } from "@tanstack/react-router"
import { Download } from "lucide-react"
import { usePageTitle } from "@/hooks/use-page-title"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const Route = createFileRoute("/brand")({ component: BrandPage })

const brandColors = [
  { name: "Sky 700", hex: "#0369a1", rgb: "3, 105, 161", tailwind: "sky-700", role: "Primary" },
  { name: "Cyan 600", hex: "#0891b2", rgb: "8, 145, 178", tailwind: "cyan-600", role: "Accent" },
  { name: "Teal 500", hex: "#14b8a6", rgb: "20, 184, 166", tailwind: "teal-500", role: "Accent" },
  { name: "Sky 50", hex: "#f0f9ff", rgb: "240, 249, 255", tailwind: "sky-50", role: "Background (light)" },
  { name: "Amber 50", hex: "#fefce8", rgb: "254, 252, 232", tailwind: "amber-50", role: "Background (warm)" },
  { name: "Slate 800", hex: "#1e293b", rgb: "30, 41, 59", tailwind: "slate-800", role: "Text" },
  { name: "Slate 500", hex: "#64748b", rgb: "100, 116, 139", tailwind: "slate-500", role: "Muted text" },
  { name: "Sky 200", hex: "#bae6fd", rgb: "186, 230, 253", tailwind: "sky-200", role: "Border" },
]

const logoAssets = [
  { name: "Icon Mark", file: "logo-icon.svg", desc: "Standalone wave icon — light background" },
  { name: "Icon (Transparent)", file: "logo-icon-transparent.svg", desc: "Wave icon — no background" },
  { name: "Icon (Dark)", file: "logo-icon-dark.svg", desc: "Wave icon — dark background" },
  { name: "Horizontal", file: "logo-horizontal.svg", desc: "Icon + wordmark side by side" },
  { name: "Horizontal (Dark)", file: "logo-horizontal-dark.svg", desc: "Horizontal lockup for dark backgrounds" },
  { name: "Stacked", file: "logo-stacked.svg", desc: "Icon above wordmark" },
  { name: "Stacked (Dark)", file: "logo-stacked-dark.svg", desc: "Stacked lockup for dark backgrounds" },
]

const typeSamples = [
  { label: "H1", className: "text-4xl font-bold tracking-tight text-slate-800 md:text-5xl", text: "Heading One" },
  { label: "H2", className: "text-3xl font-bold tracking-tight text-slate-800", text: "Heading Two" },
  { label: "H3", className: "text-xl font-semibold text-slate-800", text: "Heading Three" },
  { label: "H4", className: "text-lg font-semibold text-slate-800", text: "Heading Four" },
  { label: "Body", className: "text-base text-slate-500 leading-relaxed", text: "Body text for paragraphs and general content. Noto Sans Variable at regular weight." },
  { label: "Caption", className: "text-sm text-slate-400", text: "Caption or helper text at a smaller size." },
  { label: "Label", className: "text-xs font-semibold uppercase tracking-widest text-cyan-600", text: "Section Label" },
]

function BrandPage() {
  usePageTitle("Brand")

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50/50 via-sky-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Brand Guidelines
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
              Sync Wave{" "}
              <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Brand Kit
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
              Logo assets, color palette, typography, and usage guidelines for
              Sync Wave Analytics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Logo Usage */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">
              Logo
            </h2>
            <p className="mb-12 max-w-2xl text-slate-500">
              Always maintain clear space equal to the icon height around the
              logo. Never stretch, rotate, or recolor the logo.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logoAssets.map((asset) => (
              <AnimatedSection key={asset.file}>
                <Card className="h-full border-sky-100">
                  <CardHeader className="pb-2">
                    <div
                      className={`flex h-32 items-center justify-center rounded-lg ${
                        asset.file.includes("-dark")
                          ? "bg-slate-800"
                          : "bg-sky-50/50"
                      }`}
                    >
                      <img
                        src={`/brand/${asset.file}`}
                        alt={asset.name}
                        className="max-h-20 w-auto"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-1 text-base text-slate-800">
                      {asset.name}
                    </CardTitle>
                    <p className="mb-3 text-sm text-slate-500">{asset.desc}</p>
                    <a
                      href={`/brand/${asset.file}`}
                      download
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-800"
                    >
                      <Download className="size-3.5" />
                      Download SVG
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Color Palette */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">
              Color Palette
            </h2>
            <p className="mb-12 max-w-2xl text-slate-500">
              Our ocean-inspired palette. The primary gradient flows from sky
              through cyan to teal.
            </p>
          </AnimatedSection>

          {/* Gradient bar */}
          <AnimatedSection>
            <div className="mb-12 overflow-hidden rounded-xl">
              <div
                className="h-20"
                style={{
                  background:
                    "linear-gradient(to right, #0369a1, #0891b2, #14b8a6)",
                }}
              />
              <div className="bg-white p-4">
                <p className="text-sm font-medium text-slate-800">
                  Brand Gradient
                </p>
                <code className="text-xs text-slate-500">
                  background: linear-gradient(to right, #0369a1, #0891b2,
                  #14b8a6)
                </code>
              </div>
            </div>
          </AnimatedSection>

          {/* Color swatches */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brandColors.map((color) => (
              <AnimatedSection key={color.hex}>
                <Card className="border-sky-100">
                  <div
                    className="h-20 rounded-t-lg"
                    style={{ backgroundColor: color.hex }}
                  />
                  <CardContent className="pt-4">
                    <p className="font-semibold text-slate-800">{color.name}</p>
                    <p className="text-sm text-slate-500">{color.role}</p>
                    <Separator className="my-2" />
                    <div className="space-y-1 text-xs text-slate-500">
                      <p>
                        <span className="font-medium text-slate-700">Hex:</span>{" "}
                        {color.hex}
                      </p>
                      <p>
                        <span className="font-medium text-slate-700">RGB:</span>{" "}
                        {color.rgb}
                      </p>
                      <p>
                        <span className="font-medium text-slate-700">
                          Tailwind:
                        </span>{" "}
                        {color.tailwind}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Typography */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">
              Typography
            </h2>
            <p className="mb-2 max-w-2xl text-slate-500">
              We use Noto Sans Variable for all text.
            </p>
            <code className="mb-12 block text-sm text-slate-400">
              font-family: &apos;Noto Sans Variable&apos;, sans-serif
            </code>
          </AnimatedSection>

          <div className="space-y-6">
            {typeSamples.map((sample) => (
              <AnimatedSection key={sample.label}>
                <div className="flex items-baseline gap-6 border-b border-sky-100 pb-6">
                  <span className="w-16 shrink-0 text-sm font-semibold text-cyan-600">
                    {sample.label}
                  </span>
                  <span className={sample.className}>{sample.text}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Iconography & Motifs */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">
              Iconography & Motifs
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection>
              <Card className="h-full border-sky-100">
                <CardHeader>
                  <CardTitle className="text-slate-800">Wave Motif</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-sky-50/50">
                    <svg
                      width="120"
                      height="40"
                      viewBox="0 0 120 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="motif-grad"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#0369a1" />
                          <stop offset="50%" stopColor="#0891b2" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 20c10-12 20-12 30 0s20 12 30 0 20-12 30 0 20 12 30 0"
                        stroke="url(#motif-grad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M0 32c10-12 20-12 30 0s20 12 30 0 20-12 30 0 20 12 30 0"
                        stroke="url(#motif-grad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500">
                    The double wave is our signature motif. Use it as a
                    decorative element in backgrounds, dividers, and headers.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="h-full border-sky-100">
                <CardHeader>
                  <CardTitle className="text-slate-800">Icon Set</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    We use{" "}
                    <a
                      href="https://lucide.dev"
                      className="font-medium text-sky-700 hover:text-sky-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lucide React
                    </a>{" "}
                    icons at 20px (size-5) with sky-700 color on sky-50
                    backgrounds. Icons are wrapped in a rounded-lg container
                    with p-2.5 padding.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="h-full border-sky-100">
                <CardHeader>
                  <CardTitle className="text-slate-800">
                    Corners & Shadows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Border radius: 0.45rem (base). Cards use sky-100 borders
                    with hover:shadow-md hover:shadow-sky-100/50 transitions.
                    Icons use rx=&quot;24&quot; at 128px scale (proportional).
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Downloads */}
      <section className="bg-sky-50/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800">
              Templates & Downloads
            </h2>
            <p className="mb-12 max-w-2xl text-slate-500">
              Social media templates and marketing collateral. Open the HTML
              files in a browser and screenshot at the target dimensions.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "LinkedIn Profile",
                file: "social/linkedin-profile.html",
                size: "400 x 400",
              },
              {
                name: "LinkedIn Banner",
                file: "social/linkedin-banner.html",
                size: "1584 x 396",
              },
              {
                name: "Twitter Profile",
                file: "social/twitter-profile.html",
                size: "400 x 400",
              },
              {
                name: "Twitter Header",
                file: "social/twitter-header.html",
                size: "1500 x 500",
              },
              {
                name: "GitHub Avatar",
                file: "social/github-avatar.html",
                size: "500 x 500",
              },
              {
                name: "Business Card",
                file: "collateral/business-card.html",
                size: "700 x 400",
              },
              {
                name: "Email Signature",
                file: "collateral/email-signature.html",
                size: "HTML",
              },
              {
                name: "Presentation",
                file: "collateral/presentation-template.html",
                size: "1920 x 1080",
              },
              {
                name: "Letterhead",
                file: "collateral/letterhead.html",
                size: '8.5" x 11"',
              },
              {
                name: "OG Image",
                file: "collateral/og-image.html",
                size: "1200 x 630",
              },
            ].map((item) => (
              <AnimatedSection key={item.file}>
                <Card className="border-sky-100 transition-all hover:border-sky-200 hover:shadow-md hover:shadow-sky-100/50">
                  <CardContent className="flex items-center justify-between pt-6">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">{item.size}</p>
                    </div>
                    <a
                      href={`/brand/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700 hover:bg-sky-100"
                    >
                      Open
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
