export interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  image?: string
}

export const team: Array<TeamMember> = [
  {
    name: "Michael Nestel",
    role: "Founder",
    bio: "A decade-deep veteran of AI and data engineering across music, finance, sports, and entertainment. Battle-hardened across the full modern data stack — Python, TensorFlow, PyTorch, dbt, Airflow, Snowflake, BigQuery, GCP, and Docker — with equal command of full stack development in React, TypeScript, and FastAPI. Equally at home architecting pipelines that process millions of daily events, shipping ML models to hundreds of millions of users, and building the cloud infrastructure to run it all.",
    initials: "MN",
    image: "https://michael.nestel.me/images/michael-nestel.jpg",
  },
  {
    name: "DukeofWagner",
    role: "AI Wizard",
    bio: "A force of nature in data and business intelligence with years of battle-tested experience turning raw chaos into executive-ready insight. Master of the Microsoft ecosystem — Excel, Power BI, SQL Server, Azure, Access, and SSIS — with deep command of Pentaho, DBeaver, and every tool needed to wrangle enterprise data at scale. Equally comfortable building complex ETL workflows, designing data warehouses, and presenting boardroom-ready analytics that move the needle.",
    initials: "DW",
  },
]
