window.siteData = {
  name: "Chenjie Li",
  initials: "CL",
  affiliation: "CS PhD Candidate - University of Illinois Chicago",
  headline: "Explainable data systems researcher working across databases, weak supervision, and LLM-assisted data understanding.",
  summary:
    "I am a PhD student in Computer Science at UIC advised by Prof. Boris Glavic. My research focuses on explainable data-driven systems, including provenance-based explanations, contextual query explanations, data repair, and programmatic weak supervision.",
  jobMarket:
    "I am actively looking for full-time industry research, applied scientist, research engineer, and data/ML systems roles.",
  currentTitle: "On the 2026 job market",
  currentSummary:
    "Seeking industry research, applied scientist, research engineer, and data/ML systems roles where reliable data-driven systems matter.",
  researchIntro:
    "My work sits at the intersection of database systems, explanations, data repair, and machine learning workflows. I build data systems that help users understand query results, improve weak labels, and make data-driven workflows more reliable.",
  publicationsIntro:
    "Selected work from KDD, SIGMOD, PVLDB, and VLDB workshop venues. For the latest list, see my Google Scholar profile.",
  internshipsIntro:
    "Two internships where I worked on production data systems, computer-vision pipeline support, and LLM-assisted table understanding.",
  contactTitle: "Open to industry research, applied scientist, and research engineering roles.",
  contactSummary:
    "I am especially interested in teams working on data-centric AI, database systems, explainability, weak supervision, LLM-assisted data workflows, and production data/ML platforms.",
  footerTitle: "PhD Candidate, Computer Science, UIC",
  graduationDate: "2026-12-15T12:00:00-06:00",

  quickStats: [
    { label: "Research", value: "Explainable data-driven systems" },
    { label: "Advisor", value: "Prof. Boris Glavic" },
    { label: "Seeking", value: "Industry research & applied roles" }
  ],

  actions: [
    { label: "Email", url: "mailto:cli206@uic.edu", style: "primary" },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=dNoImMQAAAAJ&hl=en&oi=ao",
      style: "secondary"
    },
    { label: "CV", url: "assets/Chenjie-Li-CV.pdf", style: "ghost" }
  ],

  researchAreas: [
    {
      title: "Explainable Data Systems",
      description:
        "Systems for explaining surprising query answers by augmenting provenance with contextual information from related data."
    },
    {
      title: "Weak Supervision and Data Repair",
      description:
        "Methods for refining labeling functions with limited ground truth so weak-supervision pipelines become more reliable and interpretable."
    },
    {
      title: "LLM-Assisted Data Understanding",
      description:
        "Prompting and system techniques for semantic type detection, table understanding, and scalable label-model workflows."
    }
  ],

  publications: [
    {
      venue: "KDD 2025",
      title: "Refining Labeling Functions with Limited Labeled Data",
      authors: "Chenjie Li, Amir Gilad, Boris Glavic, Zhengjie Miao, Sudeepa Roy",
      description:
        "Introduces RuleCleaner, a framework for repairing weak-supervision labeling functions with a small set of labeled examples.",
      url: "https://doi.org/10.1145/3711896.3737102"
    },
    {
      venue: "VLDB DATAI 2024",
      title: "LLM-assisted Labeling Function Generation for Semantic Type Detection",
      authors: "Chenjie Li, Dan Zhang, Jin Wang",
      description:
        "Explores LLM-assisted generation of labeling functions for semantic type detection and table understanding tasks.",
      url: "https://vldb.org/workshops/2024/proceedings/DATAI/DATAI-3.pdf"
    },
    {
      venue: "PVLDB 2022",
      title: "CaJaDE: Explaining Query Results by Augmenting Provenance with Context",
      authors: "Chenjie Li, Juseung Lee, Zhengjie Miao, Boris Glavic, Sudeepa Roy",
      description:
        "Demonstrates a system for explaining query results through provenance enriched with contextual information.",
      url: "https://doi.org/10.14778/3554821.3554852"
    },
    {
      venue: "SIGMOD 2021",
      title: "Putting Things into Context: Rich Explanations for Query Answers using Join Graphs",
      authors: "Chenjie Li, Zhengjie Miao, Qitian Zeng, Boris Glavic, Sudeepa Roy",
      description:
        "Presents contextual explanations for query answers using join graphs, optimization techniques, and user-study validation.",
      url: "https://doi.org/10.1145/3448016.3459246"
    },
    {
      venue: "PVLDB 2019",
      title: "CAPE: Explaining Outliers by Counterbalancing",
      authors: "Zhengjie Miao, Qitian Zeng, Chenjie Li, Boris Glavic, Oliver Kennedy, Sudeepa Roy",
      description:
        "A demonstration system for explaining aggregation outliers through counterbalancing patterns.",
      url: "https://doi.org/10.14778/3352063.3352071"
    }
  ],

  internships: [
    {
      company: "CCC Intelligent Solutions",
      role: "Data Science Engineer Intern",
      location: "Chicago, IL",
      dates: "May 2025 - Dec. 2025",
      logo: "assets/logos/ccc-logo.svg",
      alt: "CCC Intelligent Solutions logo",
      bullets: [
        "Designed and optimized a distributed video sanitization pipeline using Spark, AWS, Airflow, and Kubernetes.",
        "Developed a ground-truth generation and parameter-tuning framework for a computer-vision video sanitization pipeline.",
        "Improved metadata ingestion throughput by 2x and automated Grafana dashboards for data engineering pipelines."
      ]
    },
    {
      company: "Megagon Labs",
      role: "Research Scientist Intern",
      location: "Mountain View, CA",
      dates: "Jan. 2024 - Apr. 2024",
      logo: "assets/logos/megagon-logo.webp",
      alt: "Megagon Labs logo",
      bullets: [
        "Explored LLM capabilities on table understanding tasks.",
        "Designed prompts for semantic type detection and labeling-function generation.",
        "Addressed label-model scalability issues and published the work at the VLDB 2024 DATAI workshop."
      ]
    }
  ],

  projects: [
    {
      type: "Research System",
      title: "RuleCleaner for weak supervision",
      description:
        "Proposed and evaluated a framework for refining labeling functions with limited labeled data, improving reliability and interpretability in data-driven systems.",
      url: "https://doi.org/10.1145/3711896.3737102"
    },
    {
      type: "Database Explanation System",
      title: "CaJaDE and contextual query explanations",
      description:
        "Designed systems for explaining surprising query results by augmenting provenance with contextual information from related tables.",
      url: "https://github.com/IITDBGroup/CaJaDe"
    }
  ],

  timeline: [
    {
      dateLabel: "May 2026",
      datetime: "2026-05",
      description: "Finalize website, CV, research statement, and target-role list."
    },
    {
      dateLabel: "Summer 2026",
      datetime: "2026-06",
      description: "Reach out to industry research teams, applied scientist groups, and collaborators."
    },
    {
      dateLabel: "Fall 2026",
      datetime: "2026-09",
      description: "Interview cycle, research talks, publication updates, and role matching."
    },
    {
      dateLabel: "2026",
      datetime: "2026-12",
      description: "Expected PhD graduation from UIC."
    }
  ],

  profileLinks: [
    {
      label: "CV",
      url: "assets/Chenjie-Li-CV.pdf",
      description: "Resume/CV with education, publications, research, professional experience, service, teaching, and skills."
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=dNoImMQAAAAJ&hl=en&oi=ao",
      description: "Publication list, citations, and research profile."
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/chenjieli/",
      description: "Professional profile and job-search contact point."
    },
    {
      label: "GitHub",
      url: "https://github.com/JayLi2018",
      description: "Github profile with research code, projects, and contributions."
    },
    {
      label: "DBGroup Profile",
      url: "https://www.cs.uic.edu/~bglavic/dbgroup/members/cli.html",
      description: "UIC Database Group profile with publications, collaborators, and project links."
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0009-0007-6849-3146",
      description: "Persistent researcher identifier."
    }
  ],

  service: [
    {
      label: "Academic service",
      items: [
        "External reviewer: EDBT 2022, TKDE 2022, DEBS 2022, SIGMOD 2023, TKDE 2023, KDD 2025, KDD 2025 Artifacts, KDD 2026.",
        "Outstanding Reviewer, KDD 2025.",
        "Student volunteer, VLDB 2019."
      ]
    },
    {
      label: "Teaching",
      items: [
        "Teaching Assistant, Database Organization, IIT, Fall 2019.",
        "Teaching Assistant, Advanced Database Organization, IIT, Spring 2020, Fall 2021, Fall 2022.",
        "Teaching Assistant, Data Integration, Warehousing, and Provenance, IIT, Spring 2020, Fall 2023."
      ]
    }
  ],

  galleryIntro:
    "Selected moments from conferences, travel, and life outside the lab.",
  gallery: [
    {
      title: "Conference",
      caption: "Add a photo from a talk, poster, conference trip, or research presentation.",
      image: "",
      alt: "Photo placeholder for a conference moment"
    },
    {
      title: "Chicago",
      caption: "Add a Chicago or UIC photo to ground the site in your current chapter.",
      image: "",
      alt: "Photo placeholder for Chicago or UIC life"
    },
    {
      title: "Outside the Lab",
      caption: "Add a personal photo that gives visitors a warmer sense of you.",
      image: "",
      alt: "Photo placeholder for personal life"
    }
  ]
};
