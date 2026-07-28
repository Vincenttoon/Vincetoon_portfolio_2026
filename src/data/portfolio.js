export const profile = {
  name: "Vincent Toon",
  title: "Director of Data & Technology",
  location: "Greater St. Louis",
  profileImage: `${import.meta.env.BASE_URL}images/vincent-toon-profile.jpeg`,
  summary:
    "Data infrastructure, cloud operations, internal platforms, compliance-focused automation, data analysis, and technical delivery for a large production environment is what I do every day.",
  valueStatement:
    "A hands-on technical leader known for solving difficult problems, supporting the people around me, explaining complicated data clearly, and building teams that can move comfortably between analysis, development, and emerging technology.",
  consoleLines: [
    {
      key: "career_path",
      value:
        "restaurant management + craft beer sales + service-industry problem solving → data & technology leadership",
    },
    {
      key: "working_style",
      value:
        "hands-on • analytical • collaborative • dependable • develops people • usually making the joke",
    },
    {
      key: "profile",
      value: "male • blue eyes • midwest • relationship oriented • curious",
    },
  ],
  contextCards: [
    {
      key: "history",
      title: "How I got here",
      body: "Before technology, I spent years in restaurant management, craft beer sales, brewery operations, and just about every service-industry role in between. That background taught me how to lead people, stay calm when things break, communicate with anyone, and solve the problem directly in front of me. I eventually turned that same mindset toward data and technology.",
    },
    {
      key: "analysis",
      title: "How I use data",
      body: "Data analysis is a regular part of my work—not a side task. I validate external requests, analyze client and internal datasets, investigate anomalies, work with publicly available sources, and translate findings into decisions that technical and nontechnical teams can use. I also review and guide analytical work produced by my team.",
    },
    {
      key: "outside_work",
      title: "Outside the database",
      body: "I spend as much time as possible with family and friends, especially my niece and nephew, plus one dog and two cats. Music, video games, golf, bowling, volleyball, St. Louis sports, the Minnesota Vikings, breweries, concerts, wrestling, festivals, and farmers markets fill the rest of the calendar.",
    },
  ],
  links: {
    github: "https://github.com/Vincenttoon",
    linkedin: "https://www.linkedin.com/in/vincent-toon-4954b6162/",
    email: "mailto:vincenttoon22@gmail.com",
    resumePdf: `${import.meta.env.BASE_URL}resume/Vincent_Toon_Resume_2026.pdf`,
    resumeDocx: `${import.meta.env.BASE_URL}resume/Vincent_Toon_Resume_2026.docx`,
  },
};

export const metrics = [
  {
    value: "110M+",
    label: "core consumer profiles",
    detail:
      "Enriched through a broad network of licensed, behavioral, demographic, geographic, automotive, timing, and custom-modeled attributes",
  },
  {
    value: "2",
    label: "analyst-developers",
    detail:
      "Direct reports contributing across analysis, front-end development, automation, and AI implementation",
  },
  {
    value: "4",
    label: "department leaders",
    detail:
      "Member of a four-person management team responsible for the company’s major operational departments",
  },
  {
    value: "CCPA + ISO",
    label: "compliance leadership",
    detail: "Removal operations, controls, documentation, evidence, and audits",
  },
];

export const schemas = [
  {
    id: "projects",
    label: "projects",
    table: "portfolio_projects",
    description:
      "Selected professional systems, portfolio generations, and personal applications",
    columns: ["record_id", "name", "domain", "status", "summary"],
    records: [
      {
        id: "PRJ-001",
        name: "Consumer Interest Recommendation Engine",
        domain: "Predictive Data Modeling",
        status: "PROFESSIONAL",
        summary:
          "A database-driven scoring system that combines multiple data signals to produce ranked product-interest recommendations at scale.",
        details:
          "I designed the general flow for preparing eligible candidates, applying explainable scoring rules, ranking outputs, and validating results through repeatable batch processing. Proprietary inputs, weighting logic, and production architecture are intentionally omitted. Inquire for more details.",
        stack: [
          "MySQL",
          "Stored Procedures",
          "Python",
          "Cloud Infrastructure",
          "Data Modeling",
        ],
        highlights: [
          "Transforms multiple behavioral and contextual signals into ranked recommendations.",
          "Uses repeatable batch processing with coverage, quality, and distribution checks.",
          "Balances practical model performance with outputs that can be explained to stakeholders.",
        ],
      },
      {
        id: "PRJ-002",
        name: "Rapid Audience Estimation Platform",
        domain: "Data Product / Full Stack",
        status: "PROFESSIONAL",
        summary:
          "A full-stack data product that uses precomputed data structures to return complex audience estimates quickly.",
        details:
          "I helped lead the data preparation, service integration, automation, and operational support behind a user-facing estimation platform. The public description is limited to the overall flow and technologies rather than internal data structures or business logic. Inquire for more details.",
        stack: [
          "React",
          "JavaScript",
          "PHP",
          "MySQL",
          "Python",
          "Linux",
          "Precomputed Data",
        ],
        highlights: [
          "Supports fast exploration across a large catalog of selectable attributes.",
          "Connects a responsive interface to backend data services and prepared datasets.",
          "Includes automated refresh, validation, deployment, logging, and failure handling.",
        ],
      },
      {
        id: "PRJ-003",
        name: "Distributed Database Workload Orchestration",
        domain: "Performance Engineering",
        status: "PROFESSIONAL",
        summary:
          "Reusable Python tooling that divides large database jobs into controlled concurrent batches.",
        details:
          "I created an asynchronous processing framework that coordinates database workloads, tracks each batch, and uses configurable concurrency to improve throughput without sacrificing control or visibility. Specific workloads and infrastructure settings are confidential. Inquire for more details.",
        stack: ["Python", "Async Processing", "MySQL", "Linux", "AWS"],
        highlights: [
          "Breaks large operations into independently tracked ranges or work units.",
          "Captures execution state, timing, failures, and completion information.",
          "Allows concurrency to be adjusted around workload and infrastructure constraints.",
        ],
      },
      {
        id: "PRJ-004",
        name: "Cloud Data Lifecycle & Recovery",
        domain: "Cloud Infrastructure",
        status: "PROFESSIONAL",
        summary:
          "Cloud-based retention, archiving, backup, and recovery workflows for database and application systems.",
        details:
          "I support the lifecycle of cloud-hosted data by coordinating storage, archival movement, alternate infrastructure, and recovery procedures. Exact topology, retention rules, and operational runbooks are intentionally excluded. Inquire for more details.",
        stack: ["AWS EC2", "Amazon S3", "MySQL", "Linux", "Backup & Recovery"],
        highlights: [
          "Supports production database and application infrastructure in AWS.",
          "Moves appropriate historical data into lower-cost archival storage.",
          "Maintains documented recovery and continuity processes.",
        ],
      },
      {
        id: "PRJ-005",
        name: "Consumer Privacy Request Automation",
        domain: "Compliance Automation",
        status: "PROFESSIONAL",
        summary:
          "Automated workflows supporting the intake, validation, removal, suppression, and tracking of consumer privacy requests.",
        details:
          "I lead the technical side of a privacy-request workflow that combines automation with controlled exception handling and evidence retention. The portfolio intentionally excludes matching rules, data locations, response templates, and control specifics. Inquire for more details.",
        stack: [
          "Python",
          "MySQL",
          "Workflow Automation",
          "Privacy Operations",
          "Audit Support",
        ],
        highlights: [
          "Reduces repetitive work across intake, validation, processing, and tracking.",
          "Preserves manual review paths when requests cannot be safely automated.",
          "Improves repeatability, reporting, and audit readiness.",
        ],
      },
      {
        id: "PRJ-006",
        name: "Audience Scoring & Segmentation Framework",
        domain: "Audience Intelligence",
        status: "PROFESSIONAL",
        summary:
          "An explainable framework that combines licensed reference data and internal attributes to create audience scores and segments.",
        details:
          "I developed a versioned scoring flow that prepares source attributes, applies bounded adjustments, records model context, and produces queryable outputs for planning and analysis. Source-specific formulas and client use cases are not included publicly. Inquire for more details.",
        stack: [
          "MySQL",
          "Python",
          "Scoring Models",
          "Demographic Data",
          "Data QA",
        ],
        highlights: [
          "Produces interpretable scores and audience classifications.",
          "Supports repeatable national or geographic batch processing.",
          "Includes model versioning, missing-data diagnostics, and output validation.",
        ],
      },
      {
        id: "PRJ-007",
        name: "Internal AI Enablement Program",
        domain: "AI Strategy & Delivery",
        status: "PROFESSIONAL",
        summary:
          "A company-wide initiative focused on practical AI-assisted workflows, knowledge access, and operational efficiency.",
        details:
          "I help lead technical direction, integrations, governance considerations, and delivery planning for internal AI tools. Individual agents, connected systems, prompts, and company information are intentionally not described. Inquire for more details.",
        stack: [
          "Agentic AI",
          "APIs",
          "Data Integration",
          "Governance",
          "Program Leadership",
        ],
        highlights: [
          "Translates real business workflows into practical AI-assisted experiences.",
          "Coordinates technical and nontechnical stakeholders around shared use cases.",
          "Prioritizes reusable patterns, responsible access, and measurable value.",
        ],
      },
      {
        id: "PRJ-008",
        name: "Internal Operations Platform",
        domain: "Full Stack / Low Code",
        status: "PROFESSIONAL",
        summary:
          "A database-backed internal platform that centralizes operational workflows for nontechnical users.",
        details:
          "I lead the technical roadmap for an internal application that combines low-code delivery, custom front-end elements, backend services, and database integrations. Business workflows, access patterns, and hosted endpoints are confidential. Inquire for more details.",
        stack: ["Retool", "React", "JavaScript", "PHP", "MySQL"],
        highlights: [
          "Turns complex data and operational tasks into guided user workflows.",
          "Combines rapid low-code development with custom application functionality.",
          "Supports ongoing integration, maintenance, prioritization, and user feedback.",
        ],
      },
      {
        id: "PRJ-009",
        name: "Data Analysis & Decision Support",
        domain: "Data Analysis",
        status: "PROFESSIONAL",
        summary:
          "Recurring analysis work that validates requests, investigates client and internal data, and uses public sources to answer practical business questions.",
        details:
          "My general workflow is to define the question, validate the source data, build a repeatable analysis, QA the result, identify meaningful patterns or exceptions, and communicate the implications clearly. Client-specific questions, datasets, and conclusions are intentionally excluded. Inquire for more details.",
        stack: [
          "MySQL",
          "Python",
          "R",
          "Excel",
          "Power BI",
          "Public Data",
          "Data QA",
        ],
        highlights: [
          "Performs QA and feasibility analysis for external data requests.",
          "Investigates client and internal datasets for patterns, anomalies, and actionable findings.",
          "Combines database, spreadsheet, scripting, BI, and public-source research as appropriate.",
          "Translates technical results into clear explanations for decision-makers.",
        ],
      },
      {
        id: "PRJ-010",
        name: "Vincent Portfolio V3",
        domain: "Portfolio Development",
        status: "PORTFOLIO",
        summary:
          "A Next.js portfolio created to present my development background, accomplishments, projects, and professional growth.",
        details:
          "This was my third major portfolio generation and my first project built with Next.js. It expanded my use of reusable JSX, responsive layouts, Tailwind CSS, animation libraries, dynamic navigation, and client-side contact functionality.",
        stack: [
          "Next.js",
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Framer Motion",
          "EmailJS",
          "Vercel",
        ],
        highlights: [
          "Rebuilt the portfolio around Next.js and reusable React components.",
          "Used motion, typing, and animated-number libraries to add interactive presentation.",
          "Served as the direct predecessor to this new data-and-technology-focused portfolio.",
          "Repository: github.com/Vincenttoon/vincent-portfolio-v3",
        ],
      },
      {
        id: "PRJ-011",
        name: "Vincent Toon React Portfolio",
        domain: "Portfolio Development",
        status: "PORTFOLIO",
        summary:
          "An earlier React portfolio focused on cleaner structure, responsive presentation, project navigation, and direct contact functionality.",
        details:
          "This application was a substantial rebuild of my original bootcamp portfolio. It helped me improve component organization, responsive navigation, deployment, UI-library integration, and the overall presentation of a growing project collection.",
        stack: [
          "React",
          "JavaScript",
          "React Router",
          "Material UI",
          "Ant Design",
          "EmailJS",
          "Vercel",
        ],
        highlights: [
          "Reworked an earlier portfolio into a cleaner and more maintainable React application.",
          "Added responsive navigation, project displays, technology sections, and email contact.",
          "Represents an earlier stage of my transition from bootcamp work into independent development.",
          "Repository: github.com/Vincenttoon/vincent-toon-portfolio",
        ],
      },
      {
        id: "PRJ-012",
        name: "Ruscoob",
        domain: "Personal / Front End",
        status: "SECONDARY",
        summary:
          "A small, intentionally goofy web application created for one purpose: making my partner smile.",
        details:
          "Ruscoob is a lightweight React and Vite project built around an inside joke. It is less about solving a business problem and more about using a quick creative idea to make something personal and fun.",
        stack: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
        highlights: [
          "Built as a personal surprise rather than a traditional portfolio assignment.",
          "Uses a modern React and Vite project structure.",
          "A reminder that not every worthwhile application needs to be serious.",
          "Repository: github.com/Vincenttoon/ruscoob",
        ],
      },
      {
        id: "PRJ-013",
        name: "Dice Roller",
        domain: "Game Utility",
        status: "SECONDARY",
        summary:
          "A React dice-rolling application inspired by Dungeons & Dragons sessions and playing Baldur’s Gate 3.",
        details:
          "The application supports classic dice and common tabletop dice types, including options to roll one or two dice. It gave me additional practice with React state, effects, references, randomization, animation timing, responsive design, and Sass.",
        stack: ["React", "JavaScript", "Sass", "React Router", "Vercel"],
        highlights: [
          "Supports traditional rolls and common four- through twenty-sided dice.",
          "Uses animated results and responsive layouts.",
          "Built from a real personal use case while spending time with tabletop and role-playing games.",
          "Repository: github.com/Vincenttoon/dice-roller",
        ],
      },
      {
        id: "PRJ-014",
        name: "Lights Out",
        domain: "Game Development",
        status: "SECONDARY",
        summary:
          "A React interpretation of the classic Lights Out puzzle, built after completing my development certificate.",
        details:
          "I created this game to keep practicing after the structured certificate program ended. The 5x5 board uses component state and conditional logic to toggle each selected cell and its adjacent cells. It also became one of the projects my friends enjoyed playing most.",
        stack: ["React", "JavaScript", "CSS", "SCSS", "State Management"],
        highlights: [
          "Implements the core Lights Out neighbor-toggling rules.",
          "Strengthened my understanding of state, conditionals, board logic, and interactive CSS.",
          "Turned post-certificate practice into a small game people actually enjoyed.",
          "Repository: github.com/Vincenttoon/lights-out",
        ],
      },
      {
        id: "PRJ-015",
        name: "Beer to SQL",
        domain: "Database Application",
        status: "SECONDARY",
        summary:
          "An early backend project for tracking beers, breweries, styles, ratings, and dates in a relational database.",
        details:
          "Inspired by beer-tracking applications, this command-line project lets a user view, add, edit, and delete beer-related records. It was an important early step in connecting my craft-beer background with JavaScript and MySQL.",
        stack: ["JavaScript", "Node.js", "MySQL", "mysql2", "Inquirer"],
        highlights: [
          "Models beers, breweries, styles, ratings, and drinking history.",
          "Provides interactive command-line CRUD workflows.",
          "Helped establish the database interests that later became central to my career.",
          "Repository: github.com/Vincenttoon/beer_to_sql",
        ],
      },
      {
        id: "PRJ-016",
        name: "Brewery Finder",
        domain: "API Application",
        status: "SECONDARY",
        summary:
          "An early collaborative web application that searches for breweries by city and displays results through an interactive map.",
        details:
          "This bootcamp group project combined an external brewery data source with Google Maps. Users could search a city, review brewery information, view locations, and save selections locally for later reference.",
        stack: [
          "JavaScript",
          "HTML",
          "CSS",
          "Bulma",
          "Open Brewery DB",
          "Google Maps API",
          "Local Storage",
        ],
        highlights: [
          "Integrated multiple external APIs into one user workflow.",
          "Used asynchronous requests, mapped results, modals, and local persistence.",
          "Provided early experience collaborating through a shared application repository.",
          "Repository: github.com/Vincenttoon/brewery-finder",
        ],
      },
    ],
  },
  {
    id: "capabilities",
    label: "capabilities",
    table: "technical_capabilities",
    description:
      "Core disciplines, analytical strengths, frameworks, platforms, and supporting tools",
    columns: ["record_id", "name", "domain", "status", "summary"],
    records: [
      {
        id: "CAP-001",
        name: "MySQL Engineering",
        domain: "Database",
        status: "PRIMARY",
        summary:
          "Schema design, complex SQL, stored procedures, indexing, query tuning, batch processing, data QA, analysis, and production administration.",
        details:
          "My strongest technical discipline. I design and operate large relational workflows, diagnose long-running processes, improve access paths, build reusable procedures, and create validation that makes outputs understandable and trustworthy.",
        stack: [
          "MySQL",
          "Stored Procedures",
          "Indexes",
          "Transactions",
          "Query Optimization",
          "Data Analysis",
        ],
        highlights: [
          "Production database management on AWS-hosted Linux infrastructure.",
          "Large-scale procedures, transformations, analytical queries, and recurring data workflows.",
          "Execution-plan review, index strategy, lock analysis, runtime diagnostics, and QA.",
          "Data modeling for PII, geography, interests, audience intelligence, and business operations.",
        ],
      },
      {
        id: "CAP-002",
        name: "AWS & Cloud Operations",
        domain: "Cloud",
        status: "PRIMARY",
        summary:
          "EC2 administration, S3 archiving, CloudWatch monitoring, instance strategy, backup and recovery planning, and cloud operations.",
        details:
          "I manage database and application infrastructure in AWS, with direct responsibility for EC2-hosted systems and supporting storage, monitoring, access, and recovery workflows.",
        stack: [
          "AWS",
          "EC2",
          "S3",
          "CloudWatch",
          "IAM",
          "CloudTrail",
          "Backup & Recovery",
        ],
        highlights: [
          "Operate production database and application instances.",
          "Plan storage, archiving, recovery, and alternate-instance workflows.",
          "Review access, automation, event history, resource behavior, and operational health.",
          "Coordinate infrastructure changes with application, data, and business requirements.",
        ],
      },
      {
        id: "CAP-003",
        name: "Python Automation",
        domain: "Automation",
        status: "PRIMARY",
        summary:
          "Asynchronous processing, database automation, analysis, file generation, deployment workflows, APIs, logging, and compliance operations.",
        details:
          "I use Python as the automation and analytical layer around high-volume database and operational work, prioritizing repeatability, visibility, validation, and safe failure behavior.",
        stack: [
          "Python",
          "asyncio",
          "MySQL Connectors",
          "boto3",
          "Data Analysis",
          "Automation",
        ],
        highlights: [
          "Parallel batch orchestration for database workloads.",
          "Automated data preparation, file generation, validation, and deployment.",
          "Compliance-request parsing and database processing.",
          "Reusable analysis, logging, lock-file, retry, and operational control patterns.",
        ],
      },
      {
        id: "CAP-004",
        name: "Linux & Systems Operations",
        domain: "Systems",
        status: "PRIMARY",
        summary:
          "Ubuntu administration, remote access, cron scheduling, process management, permissions, deployment, logs, storage, and troubleshooting.",
        details:
          "I use Linux daily to operate databases, web services, scheduled workloads, and file pipelines through Termius and direct shell access.",
        stack: [
          "Linux",
          "Ubuntu",
          "Bash",
          "cron",
          "systemd",
          "Termius",
          "Process Management",
        ],
        highlights: [
          "Schedule recurring production jobs and capture useful operational logs.",
          "Inspect running processes, storage, locks, permissions, and system behavior.",
          "Deploy and maintain Python, PHP, database, and data-processing services.",
          "Use safe locking, cleanup, and monitoring patterns for unattended automation.",
        ],
      },
      {
        id: "CAP-005",
        name: "Data Analysis & Business Intelligence",
        domain: "Analytics",
        status: "PRIMARY",
        summary:
          "Client analysis, internal analysis, external-request QA, public-data research, visualization, and decision support.",
        details:
          "I regularly move from an open-ended question to a validated analytical result. That includes reviewing source quality, writing SQL, using Python or R where appropriate, working in Excel or Power BI, investigating anomalies, and explaining the outcome in plain language.",
        stack: [
          "MySQL",
          "Python",
          "R",
          "Power BI",
          "Excel",
          "Public Data",
          "Data Visualization",
        ],
        highlights: [
          "Validate and scope external data requests before production work begins.",
          "Analyze client datasets and communicate findings, limitations, and opportunities.",
          "Support internal operational, quality, performance, and strategy questions.",
          "Combine public sources with internal context when outside evidence strengthens an analysis.",
        ],
      },
      {
        id: "CAP-006",
        name: "Data Modeling, Research & QA",
        domain: "Analytics Engineering",
        status: "PRIMARY",
        summary:
          "Scoring systems, geographic models, predictive heuristics, audience enrichment, validation, research, and explainability.",
        details:
          "I create practical models that combine domain rules, large data assets, analytical research, and measurable outputs without hiding the logic from users or stakeholders.",
        stack: [
          "SQL",
          "Python",
          "Scoring Models",
          "Demographics",
          "Geospatial Data",
          "Research",
          "QA",
        ],
        highlights: [
          "Predictive recommendation and audience-scoring systems.",
          "PII, interest, postal, ZIP, radius, and geographic models.",
          "Research-driven validation of assumptions, sources, categories, and outputs.",
          "QA frameworks that expose coverage, outliers, concentration, missing data, and unexpected results.",
        ],
      },
      {
        id: "CAP-007",
        name: "Front-End Development",
        domain: "Application Development",
        status: "STRONG",
        summary:
          "Responsive web interfaces built with modern JavaScript, React, Vue, Next.js, HTML, CSS, Tailwind, and Sass.",
        details:
          "Although my current work is primarily data and infrastructure, I still build and maintain front-end experiences—especially when a usable interface is necessary to make complex data or operational functionality accessible.",
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "React.js",
          "Vue.js",
          "Next.js",
          "Tailwind CSS",
          "Sass",
        ],
        highlights: [
          "Build responsive, component-based interfaces.",
          "Create data-heavy screens for internal and external users.",
          "Translate complex backend capabilities into understandable workflows.",
          "Maintain earlier applications while continuing to learn modern front-end patterns.",
        ],
      },
      {
        id: "CAP-008",
        name: "Full-Stack & Low-Code Delivery",
        domain: "Application Architecture",
        status: "STRONG",
        summary:
          "Database-backed applications using JavaScript, PHP, MERN patterns, APIs, Retool, and custom service integrations.",
        details:
          "I work across the application stack when a project requires it, connecting user interfaces to backend services, APIs, databases, authentication, hosted environments, and operational workflows.",
        stack: [
          "MERN Stack",
          "Retool",
          "React",
          "Node.js",
          "PHP",
          "MySQL",
          "REST APIs",
        ],
        highlights: [
          "Connect React, Vue, Next.js, and Retool interfaces to backend services.",
          "Build and maintain PHP and JavaScript application logic.",
          "Design database-backed workflows for technical and nontechnical users.",
          "Balance rapid delivery with maintainability, access control, and operational support.",
        ],
      },
      {
        id: "CAP-009",
        name: "Statistical & Analytical Programming",
        domain: "Analysis",
        status: "SUPPORTING",
        summary:
          "Supporting experience with R, statistical exploration, scripting, data transformation, and reproducible analysis.",
        details:
          "Python and SQL are my primary analytical tools, but I also have experience using R and related analytical approaches when the problem benefits from statistical exploration or a different workflow.",
        stack: ["R", "Python", "SQL", "Statistics", "Data Transformation"],
        highlights: [
          "Use the tool that best fits the question rather than forcing one language into every workflow.",
          "Comfortable reading, adapting, and extending analytical scripts.",
          "Apply analytical programming alongside domain knowledge and QA.",
        ],
      },
      {
        id: "CAP-010",
        name: "Developer Tools & Environments",
        domain: "Tooling",
        status: "TOOLKIT",
        summary:
          "The everyday tools used to write, test, inspect, connect, deploy, and troubleshoot applications and data workflows.",
        details:
          "These tools support my development and operations work across local environments, remote servers, version control, API testing, temporary tunnels, and application troubleshooting.",
        stack: [
          "VS Code",
          "GitHub",
          "Postman",
          "Insomnia",
          "ngrok",
          "XAMPP",
          "Termius",
        ],
        highlights: [
          "GitHub for source control, collaboration, and project history.",
          "Postman and Insomnia for API inspection and testing.",
          "VS Code and XAMPP for development and local application work.",
          "Termius and ngrok for remote access, testing, and temporary connectivity.",
        ],
      },
    ],
  },
  {
    id: "leadership",
    label: "leadership_compliance",
    table: "leadership_and_compliance",
    description: "People, programs, risk, and audit readiness",
    columns: ["record_id", "name", "domain", "status", "summary"],
    records: [
      {
        id: "LDR-001",
        name: "Data & Technology Leadership",
        domain: "People Leadership",
        status: "CURRENT",
        summary:
          "Lead two analyst-developers who contribute across data analysis, front-end development, automation, AI implementation, QA, and delivery.",
        details:
          "Manage priorities, remove blockers, review analytical and technical work, teach repeatable approaches, and create an environment where analyst-developers can grow across data, application, and AI responsibilities.",
        stack: [
          "Management",
          "Mentoring",
          "Prioritization",
          "Technical Review",
        ],
        highlights: [
          "Directly manage two analyst-developers and review analytical methodology, front-end work, AI implementation, QA, and communication.",
          "Balance team development with direct technical and analytical contribution.",
          "Translate leadership goals into actionable technical plans.",
          "Known as a team player and positive morale contributor.",
        ],
      },
      {
        id: "LDR-002",
        name: "Department Leadership Team",
        domain: "Executive Collaboration",
        status: "CURRENT",
        summary:
          "Serve on a four-person management team whose members each lead a major company department.",
        details:
          "I represent data and technology within the company’s management group, contributing technical context, operational planning, risk awareness, staffing perspective, and cross-department coordination.",
        stack: [
          "Department Leadership",
          "Strategic Planning",
          "Cross-Functional Decisions",
          "Operational Management",
        ],
        highlights: [
          "Collaborate with three fellow department leaders on company-wide priorities.",
          "Represent database, technology, analysis, infrastructure, AI, and compliance considerations.",
          "Translate technical constraints and opportunities into management-level decisions.",
          "Coordinate work that crosses departmental ownership and business functions.",
        ],
      },
      {
        id: "LDR-003",
        name: "Cross-Functional Program Ownership",
        domain: "Program Leadership",
        status: "CURRENT",
        summary:
          "Own three major company initiatives spanning AI, internal operations, and an external data counts product.",
        details:
          "Drive multi-project planning across different technologies and stakeholder groups while preserving production responsibilities.",
        stack: ["Roadmaps", "Stakeholders", "Architecture", "Delivery"],
        highlights: [
          "Company-wide agentic AI tools.",
          "Internal Retool/React/PHP operations platform.",
          "External React/PHP/bitmap audience counts system.",
          "Coordinate technical decisions, dependencies, and delivery priorities.",
        ],
      },
      {
        id: "CMP-001",
        name: "CCPA Privacy Operations",
        domain: "Data Compliance",
        status: "LEAD",
        summary:
          "Lead technical processing, tracking, interpretation, and automation for consumer data-removal responsibilities.",
        details:
          "Serve as the primary technical owner for data-removal operations and a member of the broader compliance team.",
        stack: ["CCPA", "CCPA DROP", "PII", "Deletion Workflows", "Evidence"],
        highlights: [
          "Own data matching, deletion, suppression, and operational tracking.",
          "Automate repeatable request handling while preserving exception review.",
          "Support policy interpretation with concrete database knowledge.",
          "Improve readiness for reporting and regulatory scrutiny.",
        ],
      },
      {
        id: "CMP-002",
        name: "ISO Certification & Audits",
        domain: "Security & Controls",
        status: "LEAD",
        summary:
          "Led the technical controls and documentation effort supporting ISO certification and participated in internal and external audits.",
        details:
          "Converted day-to-day technical operations into documented, auditable controls and supplied evidence during certification and review cycles.",
        stack: [
          "ISO Controls",
          "Documentation",
          "Evidence",
          "Internal Audit",
          "External Audit",
        ],
        highlights: [
          "Led technical and documentation work for certification.",
          "Participated directly in internal and external audits.",
          "Documented infrastructure, access, backup, and operational processes.",
          "Connected compliance language to real technical implementation.",
        ],
      },
    ],
  },
  {
    id: "experience",
    label: "experience",
    table: "professional_experience",
    description: "Career progression and education",
    columns: ["record_id", "name", "domain", "status", "summary"],
    records: [
      {
        id: "EXP-001",
        name: "Source Path Digital",
        domain: "Data & Technology",
        status: "2024–PRESENT",
        summary:
          "Progressed from Data Manager to Director of Data and Technology, expanding from hands-on database and analytical work into infrastructure, compliance, people leadership, and program ownership.",
        details:
          "Current role covering production MySQL, AWS services, Linux operations, data products, automation, full-stack systems, recurring data analysis, compliance, technical strategy, and team leadership.",
        stack: ["MySQL", "AWS", "Python", "Linux", "Leadership", "Compliance"],
        highlights: [
          "Promoted from Data Manager to Director of Data and Technology.",
          "Manage two analyst-developers, lead three major technical programs, and serve with three other department heads on the management team.",
          "Perform recurring client, internal, external-request, and public-source data analysis.",
          "Own critical database, cloud, automation, analytical, and compliance functions.",
          "Continue to contribute directly to analysis, code, systems, troubleshooting, and delivery.",
        ],
      },
      {
        id: "EXP-002",
        name: "Independent Technical Projects",
        domain: "Software Development",
        status: "2022–PRESENT",
        summary:
          "Ongoing application, automation, database, and portfolio work across Vue, React, JavaScript, SQL, Python, and backend technologies.",
        details:
          "Continue building outside of work to explore technologies, sharpen front-end skills, and create complete applications from idea through deployment.",
        stack: ["Vue.js", "React", "JavaScript", "MySQL", "Python"],
        highlights: [
          "Multiple portfolio versions and deployed web applications.",
          "Data, game, music, and craft-beer-related projects.",
          "Continuous experimentation with new frameworks and patterns.",
          "Public code available through GitHub.",
        ],
      },
      {
        id: "EXP-003",
        name: "Global Brew Taphouse",
        domain: "Hospitality Management",
        status: "2021–2024",
        summary:
          "Management experience in a high-volume craft-beer environment requiring customer service, team coordination, product knowledge, and daily operations.",
        details:
          "Built leadership and communication skills that now carry directly into technical team management and cross-functional work.",
        stack: [
          "Management",
          "Operations",
          "Customer Experience",
          "Craft Beer",
        ],
        highlights: [
          "Managed people, priorities, customer needs, and day-to-day operations.",
          "Developed deep craft-beer knowledge.",
          "Strengthened team-building and high-pressure problem-solving skills.",
        ],
      },
      {
        id: "EXP-004",
        name: "Old Herald Brewery & Distillery",
        domain: "Brewery Operations",
        status: "2020–2021",
        summary:
          "Supported brewery operations and expanded hands-on understanding of production, service, and craft-beverage systems.",
        details:
          "A practical operations role that reinforced process discipline, teamwork, and product expertise.",
        stack: ["Operations", "Production Support", "Craft Beverage"],
        highlights: [
          "Supported brewery operations and service.",
          "Worked within repeatable production processes.",
          "Collaborated across front- and back-of-house responsibilities.",
        ],
      },
      {
        id: "EXP-005",
        name: "Wang Gang Asian",
        domain: "Bar Program Management",
        status: "2013–2020",
        summary:
          "Long-term hospitality leadership culminating in responsibility for the bar program, staff support, guest experience, and operations.",
        details:
          "This role established the people-first leadership style, resilience, and morale-building approach that remain central to my work today.",
        stack: ["Leadership", "Program Management", "Training", "Operations"],
        highlights: [
          "Managed a bar program and supported team performance.",
          "Built long-standing customer and coworker relationships.",
          "Learned to lead calmly and positively in demanding environments.",
        ],
      },
      {
        id: "EDU-001",
        name: "Education & Continuing Development",
        domain: "Learning",
        status: "ONGOING",
        summary:
          "Bachelor of Political Science, Full-Stack Web Development certificate, data-analysis training, AWS learning, and continued self-directed technical education.",
        details:
          "Formal education and continuous practical learning combine political science, communication, software development, data analysis, and cloud technology.",
        stack: [
          "SIUE",
          "Washington University",
          "AWS Skill Builder",
          "Codecademy",
          "Udemy",
        ],
        highlights: [
          "Bachelor of Political Science.",
          "Certificate in Full-Stack Web Development.",
          "Certificate in Data Analysis with Python.",
          "AWS Cloud Practitioner Essentials — Fundamentals.",
        ],
      },
    ],
  },
  {
    id: "personal",
    label: "personal_interests",
    table: "personal_interests",
    description:
      "Family, music, sports, games, events, and the person behind the systems",
    columns: ["record_id", "name", "domain", "status", "summary"],
    records: [
      {
        id: "INT-001",
        name: "Family, Friends & Pets",
        domain: "Life",
        status: "CORE",
        summary:
          "Time with family and friends—especially my niece and nephew—and life with one dog and two cats are the center of everything outside of work.",
        details:
          "The most important part of my life is the people and animals around me. I value being present, dependable, supportive, and usually the person helping keep the group laughing.",
        stack: ["1 Dog", "2 Cats", "Niece", "Nephew", "Family", "Friends"],
        highlights: [
          "One dog and two cats provide a constant mix of companionship and lack of bed space.",
          "Spending time with my niece and nephew is one of my favorite things.",
          "Family and friend take priority over almost everything else.",
          "I try to be the dependable friend, supportive family member, and comedic relief in the room.",
        ],
      },
      {
        id: "INT-002",
        name: "Instruments Played",
        domain: "Music Performance",
        status: "MULTI-INSTRUMENTALIST",
        summary:
          "From self-taught guitarist to bassist-by-need to instrumental explorer over the years",
        details:
          "Playing music is one of my longest-running hobbies. Bass and acoustic guitar are my strongest instruments, but I enjoy learning stepping in when a new instrument is needed.",
        stack: [
          "Bass Guitar",
          "Acoustic Guitar",
          "Electric Guitar",
          "Piano",
          "Drums",
          "Mandolin",
          "Ukulele",
          "Harmonica",
          "Cajón",
        ],
        highlights: [
          "Bass guitar — proficient.",
          "Acoustic guitar — proficient.",
          "Electric guitar — moderate.",
          "Piano — better than beginner.",
          "Drums — capable of filling in.",
          "Mandolin — beginner.",
          "Ukulele — beginner.",
          "Harmonica — beginner.",
          "Cajón — beginner.",
        ],
      },
      {
        id: "INT-003",
        name: "Music Taste & Record Collecting",
        domain: "Music",
        status: "ALWAYS LISTENING",
        summary:
          "Alternative, pop punk, folk, indie, classic rock, hip-hop, selective pop and country—and a steadily growing record collection.",
        details:
          "My listening habits move between guitar-driven alternative music, folk and indie songwriting, several eras of rock and rap, and whatever else earns a place in the rotation. I also collect vinyl and enjoy the ritual of finding and listening to records.",
        stack: [
          "Alternative",
          "Pop Punk",
          "Folk",
          "Indie",
          "70s Rock",
          "90s Rock",
          "90s Rap",
          "2000s Rap",
          "Pop",
          "Selective Country",
          "Vinyl Records",
        ],
        highlights: [
          "Alternative and pop punk are always playing",
          "Folk and indie had a special place in my life, but not as much as it used to",
          "I listen to a lot of 70s rock and 90s rock, especially on the golf course.",
          "90s rap and 2000s rap is my choice from that genre",
          "I enjoy some radio pop when the right song is on (see: Espresso - Sabrina Carpenter)",
          "I am selective about country, but Tyler Childers and Chris Stapleton absolutely rule.",
          "Collecting records makes music feel more intentional and gives me an excuse to keep exploring.",
        ],
      },
      {
        id: "INT-004",
        name: "Favorite Sports Teams",
        domain: "Sports Fandom",
        status: "LOUDLY INVESTED",
        summary:
          "A mix of St. Louis loyalty, inherited Minnesota football, childhood-logo logic, and teams that are simply fun to watch.",
        details:
          "Sports fandom is mostly about tradition, family, local pride, and the stories attached to each team. Some allegiances are obvious; others have much less scientific origin.",
        stack: [
          "Minnesota Vikings",
          "St. Louis Cardinals",
          "St. Louis Blues",
          "Minnesota Timberwolves",
          "St. Louis CITY SC",
        ],
        highlights: [
          "Minnesota Vikings — switched after the Rams left St. Louis and chose to honor my dad’s favorite team.",
          "St. Louis Cardinals — I mean, Im from St. Louis.",
          "St. Louis Blues — the 2019 Stanley Cup run was unforgettable.",
          "Minnesota Timberwolves — picked them because I liked the logo as a kid, completely unrelated to the Vikings.",
          "St. Louis CITY SC — not naturally a soccer guy, but I am a St. Louis guy and the matches are a great time. Been to the last 2 home openers with one of my oldest friends",
        ],
      },
      {
        id: "INT-005",
        name: "Personal sporting",
        domain: "Recreation",
        status: "ACTIVE",
        summary:
          "Golf, league bowling, longtime volleyball, pickup basketball, and any opportunity to throw a disc.",
        details:
          "I like sports most when they combine competition, improvement, and time with other people. I am rarely the best athlete involved, but I am dependable, enthusiastic, and committed to the bit.",
        stack: ["Golf", "Bowling", "Volleyball", "Basketball", "Frisbee"],
        highlights: [
          "Golf — average score in the mid-90s and play more often than I probably should.",
          "Bowling — compete in a league and am definitely more of a vibes guy.",
          "Volleyball — have played with the same team for years; never the best, but kings of the consolation bracket.",
          "Basketball — always enjoy a pickup game.",
          "Playing catch — it is the best. Frisbee? Yup. Baseball? Absolutely. Football? Go long.",
        ],
      },
      {
        id: "INT-006",
        name: "Video Games",
        domain: "Gaming",
        status: "REGULAR PLAYER",
        summary:
          "Video games are a favorite way to unwind - usually with long form RPGs, but I enjoy some casual multiplayer as well.",
        details:
          "My favorite form of storytelling and probably the best way to pass the time.",
        stack: ["RPGs", "JRPGs", "Strategy", "MMO", "Party Games", "Racing"],
        highlights: [
          "Play both independently and socially depending on the game.",
          "Enjoy systems that reward strategy, practice, exploration, or teamwork.",
          "Gaming is one of my go-to ways to decompress after technical work.",
        ],
      },
      {
        id: "INT-007",
        name: "Craft Beer & Breweries",
        domain: "Craft Beverage",
        status: "ENTHUSIAST",
        summary:
          "Years of professional and personal craft-beer experience, with IPAs, stouts, and Kölsch leading the style rankings.",
        details:
          "Craft beer has been both a career chapter and a lasting hobby. I enjoy the production process, style differences, brewery culture, and the social experience of visiting taprooms with people I care about.",
        stack: [
          "IPAs",
          "Stouts",
          "Kölsch",
          "Breweries",
          "Hospitality",
          "Beer Styles",
        ],
        highlights: [
          "IPAs — the all-time favorite.",
          "Stouts — the style that first pulled me deeply into craft beer.",
          "Kölsch — the best easy-drinking beer style.",
          "Enjoy visiting breweries and learning how different producers approach familiar styles.",
          "Professional experience in bars, taprooms, brewery operations, and beverage-program management.",
        ],
      },
      {
        id: "INT-008",
        name: "Other Media",
        domain: "TV, Film & Reading",
        status: "ALWAYS WATCHING",
        summary:
          "Outside of games and music, I enjoy television, movies, anime, manga, biographies, science fiction, and medieval-leaning fiction.",
        details:
          "I enjoy media most when it offers memorable characters, strong world-building, real history, or something funny enough to quote for years. My taste ranges from prestige drama to sitcoms, animation, reality television, biographies, and long-form fantasy storytelling.",
        stack: [
          "Television",
          "Movies",
          "Anime",
          "Manga",
          "Biographies",
          "Science Fiction",
          "Historical Fiction",
          "Fantasy",
        ],
        highlights: [
          "Television — dramas and sitcoms, including Game of Thrones, Chernobyl, Seinfeld, King of the Hill, Survivor, and an unreasonable amount of bad reality television.",
          "Movies — dramas, biopics, animation, comedy, and a fully acknowledged weakness for romantic comedies.",
          "Anime and manga — One Piece, Fullmetal Alchemist, Berserk, Hunter × Hunter, and more.",
          "Reading — biographies, science fiction, and fiction that often leans medieval or historical.",
        ],
      },
      {
        id: "INT-009",
        name: "Live Events & Local Outings",
        domain: "Experiences",
        status: "OUT AND ABOUT",
        summary:
          "Concerts, live sports, wrestling events, street festivals, farmers markets, and other reasons to explore St. Louis.",
        details:
          "I would rather have an experience on the calendar than spend every weekend at home. Live events combine music, sports, food, local culture, and time with friends and family.",
        stack: [
          "Concerts",
          "Live Sports",
          "Live Wrestling",
          "Street Festivals",
          "Farmers Markets",
          "St. Louis",
        ],
        highlights: [
          "Regularly look for concerts and live music.",
          "Enjoy attending baseball, hockey, football, basketball, and soccer games when possible.",
          "Live professional wrestling is one of the most entertaining crowds and event experiences.",
          "Street festivals and farmers markets are favorite low-pressure ways to spend time outside.",
        ],
      },
    ],
  },
];
