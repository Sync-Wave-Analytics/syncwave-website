import { BarChart3, Brain, Code2, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  title: string
  icon: LucideIcon
  shortDescription: string
  fullDescription: string
  technologies: Array<string>
  useCases: Array<string>
}

export const services: Array<Service> = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    shortDescription:
      "Custom ML models, NLP pipelines, and intelligent automation tailored to your data.",
    fullDescription:
      "We design and deploy production-grade machine learning systems — from predictive models and recommendation engines to NLP pipelines and computer vision solutions. Every model is built for real-world performance, not just notebook accuracy.",
    technologies: ["Python", "PyTorch", "scikit-learn", "Hugging Face", "LangChain", "OpenAI API"],
    useCases: [
      "Demand forecasting and predictive analytics",
      "Natural language processing and text classification",
      "Recommendation systems",
      "Intelligent document processing",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    icon: Database,
    shortDescription:
      "Reliable, scalable data pipelines that move and transform your data end-to-end.",
    fullDescription:
      "We build modern data stacks from ingestion to warehouse. Our pipelines are orchestrated, tested, and monitored — designed to handle scale without surprises. Whether you need batch ETL, streaming, or reverse ETL, we deliver infrastructure you can trust.",
    technologies: ["dbt", "Airbyte", "Prefect", "Apache Spark", "BigQuery", "Snowflake"],
    useCases: [
      "Data warehouse design and optimization",
      "ETL/ELT pipeline development",
      "Real-time data streaming",
      "Data quality monitoring and alerting",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    icon: BarChart3,
    shortDescription:
      "Dashboards, reports, and analytics that turn raw data into clear business decisions.",
    fullDescription:
      "We transform messy data into clear, actionable insights. From executive dashboards to self-serve analytics platforms, we build the reporting layer that keeps your team informed and data-driven.",
    technologies: ["Looker", "Metabase", "Python", "SQL", "Pandas", "Plotly"],
    useCases: [
      "Executive and operational dashboards",
      "KPI tracking and anomaly detection",
      "Ad hoc analysis and data exploration",
      "Automated reporting and alerting",
    ],
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    icon: Code2,
    shortDescription:
      "Modern web applications with data-rich interfaces, APIs, and cloud infrastructure.",
    fullDescription:
      "We build performant, data-driven web applications from frontend to cloud. Our stack is modern and pragmatic — React frontends, robust APIs, and cloud-native infrastructure that scales with your business.",
    technologies: ["React", "TypeScript", "Node.js", "Bun", "GCP", "Terraform"],
    useCases: [
      "Data-driven web applications",
      "Internal tools and admin panels",
      "API design and development",
      "Cloud infrastructure and DevOps",
    ],
  },
]
