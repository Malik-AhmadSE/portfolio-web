/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to make the portfolio yours.
 *  Everything on the site reads from this single config.
 *
 *  liveUrl, when set, is embedded live inside the laptop frame and
 *  linked from the chrome bar — it must be a site you control that
 *  allows framing (Vercel deployments allow it by default). Without
 *  liveUrl the frame shows the screenshot with a "demo on request"
 *  pill. image is the 16:10 desktop screenshot shown in the laptop
 *  frame; mobileImage is the 9:19.5 screenshot in the phone frame.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Ahmad Ali",
  initials: "AA",
  role: "Software Engineer",
  location: "Lahore, Pakistan · Remote",
  // TODO: replace with your real domain before deploying — used for
  // metadataBase, sitemap, robots and Open Graph URLs.
  url: "https://your-domain.com",
  email: "malikahmadse@gmail.com",
  // TODO: replace with your real WhatsApp number — international format,
  // digits only (no +, spaces or dashes). "Get in touch" / "Start a
  // conversation" buttons open a chat with this number.
  whatsapp: "923098553906",
  githubUrl: "https://github.com/Malik-AhmadSE",
  linkedinUrl: "https://www.linkedin.com/in/ahmad-ali-malik",
  cvUrl: "/Ahmad-Ali-Resume.pdf",
  availability: "Open to full-time opportunities",
  heroTagline: ["I build Web Apps", "that feel alive."],
  heroIntro:
    "I'm a full-stack engineer who goes toward the mess: the vague requirements, the system that's quietly falling apart, the idea nobody knows how to build yet. When I get stuck, I don't reach for a shortcut. I push on the problem, try again, and keep going until I understand it well enough to solve it myself. In 3 years, that habit has taken products across web, AI, and data from a rough conversation to production, and I don't walk away at launch. I stay until it's fast, stable, and trusted. I'd rather delete complexity than add it, and I judge my work by one thing: whether people can depend on it.",
  heroNote: "// everything is a component",
  aboutStatement:
    "Most websites fail on feel, not features. A layout that jumps as it loads. A button with no hover, no feedback, no soul. An API that takes three seconds to admit it. My job is to hunt those moments down and fix them — then wire the whole thing to a backend that's boring in the best way: typed, tested, and fast.",
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "21+", label: "Projects shipped" },
    { value: "98+", label: "Avg. Lighthouse score" },
     { value: "100%", label: "On-time delivery" },
  ],
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  // Deployed site — embedded live inside the laptop frame. Omit for
  // screenshot-only showcases: the frame shows the screenshot and the
  // chrome bar reads "demo on request".
  liveUrl?: string;
  repoUrl: string;
  image: string; // 16:10 desktop screenshot shown in the laptop frame
  mobileImage?: string; // 9:19.5 phone screenshot for the overlapping phone frame; omit when no real mobile capture exists
  accent: string; // rgb triplet, e.g. "84 197 248"
  year: string;
  // case study
  role: string;
  timeline: string;
  platform: string;
  problem: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  quote: { text: string; author: string };
};

export const projects: Project[] = [
  // Real, live project — case-study copy drafted from the deployed site;
  // confirm role, timeline and repo link when ready.
  {
    slug: "kinetic",
    name: "Kinetic Rehab",
    category: "HealthTech · AI",
    tagline: "Personalized recovery powered by movement intelligence",
    description:
      "An AI-guided rehabilitation platform: computer vision checks every exercise rep for therapeutic effectiveness, therapy plans adapt to recovery indicators, and shared analytics keep patients and clinicians honest about progress.",
    tags: ["Next.js", "TypeScript", "Computer Vision", "Tailwind CSS", "Analytics"],
    liveUrl: "https://kinetic-final-delivery.vercel.app",
    repoUrl: "https://github.com/yourhandle/kinetic",
    image: "/images/apps/web-kinetic.png",
    mobileImage: "/images/apps/app-kinetic.png",
    accent: "30 64 175",
    year: "2025",
    role: "Full-stack developer · solo",
    timeline: "Final delivery · 2025",
    platform: "Web · Responsive",
    problem:
      "Rehabilitation falls apart between the clinic and the living room: patients do prescribed exercises with no feedback on form, therapists can't see adherence between visits, and programs stay static whether the patient is improving or stalling.",
    approach: [
      "Shipped the full platform surface on Next.js — assessment funnel, patient auth, consultation booking and a resources hub — so the product story and the signup path live in one fast, coherent site.",
      "Structured the recovery journey as three honest steps — initial assessment, personalized plan, tracked progress — mirroring how clinicians actually run a program instead of inventing a new one.",
      "Put movement intelligence at the center: computer-vision analysis verifies each rep, therapy protocols evolve with recovery indicators, and everything stays inside clinical-grade privacy boundaries.",
    ],
    outcome:
      "Delivered as a complete rehabilitation ecosystem — marketing, onboarding and product in one deployment — presenting AI-guided recovery that patients trust and clinicians can stand behind.",
    metrics: [
      { value: "3", label: "Steps to start" },
      { value: "4", label: "Core modules" },
      { value: "100%", label: "Reps form-checked" },
      { value: "Clinical-grade", label: "Privacy" },
    ],
    quote: {
      text: "The AI-guided exercises and real-time feedback helped me recover faster than expected. I'm back to my active lifestyle.",
      author: "Patient story · Kinetic Rehab",
    },
  },
  // Real, live project — AI customer-support & automation platform (multi-
  // channel inbox + AI agent + workflows across every major store platform);
  // copy drafted from the product's own site content; confirm repo link when ready.
  {
    slug: "servia",
    name: "Servia",
    category: "SaaS · AI Customer Support",
    tagline: "One inbox for every channel — with an AI agent that answers, and acts",
    description:
      "An AI customer-support and automation platform for online stores: email, chat, WhatsApp, Instagram, Facebook and web forms land in one shared inbox, an AI agent replies in the merchant's own tone using their policies and FAQs — and takes real action: refunds, order lookups, address updates, bookings. A visual workflow builder decides what AI handles and when humans step in, and it works across Shopify, WooCommerce, BigCommerce, Magento and PrestaShop.",
    tags: ["AI Agent", "Workflow Automation", "Multi-channel Inbox", "Store Integrations"],
    liveUrl: "https://dev.csautomaition.com/login",
    repoUrl: "https://github.com/yourhandle/servia",
    image: "/images/apps/web-servia.png",
    mobileImage: "/images/apps/app-servia.png",
    accent: "52 199 145",
    year: "2026",
    role: "Full-stack developer · solo",
    timeline: "In development · 2026",
    platform: "Web dashboard · Mobile app",
    problem:
      "Support grows faster than the team: messages arrive from five places, customers repeat the same questions about orders, returns and prices, replies slow down, and nobody can tell who answered what. Generic helpdesks don't speak commerce, and channel-specific tools bury agents in tab-hopping.",
    approach: [
      "Built the shared inbox around commerce context — email, chat, WhatsApp, Instagram, Facebook, SMS and web forms in one thread view, with each customer's orders, shipping status and payments in the side panel — on the web dashboard and a mobile app merchants can run from their pocket.",
      "Shipped the AI agent in two layers: replies grounded in the merchant's own policies, FAQs and product data in their tone — and actions that do the work behind the answer: check an order, issue a refund, update an address, book an appointment, create a lead.",
      "Made automation governable: a visual workflow builder with ready-made templates decides when AI replies, when it acts and when it hands over — with smart routing, CSAT reporting and full conversation review, so a human is always one click away.",
    ],
    outcome:
      "A production platform where merchants connect their channels, teach the AI once, and let it resolve the routine around the clock — live on their own domain, with the same order-aware AI working across every major store platform.",
    metrics: [
      { value: "6+", label: "Channels · one inbox" },
      { value: "5", label: "Store platforms" },
      { value: "24/7", label: "Instant first response" },
      { value: "Answers + acts", label: "AI agent" },
    ],
    quote: {
      text: "AI handles the routine — where is my order, how do I return this — and hands anything it's unsure about to the team with full context.",
      author: "Product framing · Servia",
    },
  },
  // Real, live project — plug-and-play corporate platform, everything
  // managed from the built-in admin dashboard; confirm repo and delivery details.
  {
    slug: "nexvora",
    name: "Nexvora",
    category: "Corporate Platform · Admin CMS",
    tagline: "An infrastructure company's entire web presence, managed from one dashboard",
    description:
      "The digital platform for a Saudi infrastructure & technology contractor: services, industries, projects, team, careers and quote requests all live as editable modules behind a built-in admin dashboard — bilingual English/Arabic with full RTL, deployable plug-and-play for any company in the space.",
    tags: ["Next.js", "TypeScript", "Admin Dashboard", "i18n · EN/AR", "Tailwind CSS"],
    liveUrl: "https://www.nexvora.sa/en",
    repoUrl: "https://github.com/yourhandle/nexvora",
    image: "/images/apps/web-nexvora.png",
    mobileImage: "/images/apps/app-nexvora.png",
    accent: "37 99 235",
    year: "2026",
    role: "Full-stack developer · solo",
    timeline: "Delivered · 2026",
    platform: "Web · Bilingual EN/AR",
    problem:
      "An infrastructure contractor's site is never static — new services, finished projects, open roles and quote requests change weekly. Hand-edited pages mean every update waits on a developer, and a bilingual audience needs Arabic RTL treated as a first-class layout, not an afterthought.",
    approach: [
      "Modeled the whole company — services, industries, projects, team, careers, FAQs, quotes — as discrete content modules, so the platform is plug-and-play: the same codebase serves any contractor with different content.",
      "Built an admin dashboard that owns every entity end to end: marketing staff publish projects, edit service pages and answer quote requests without a single line of code or a deploy.",
      "Shipped bilingual EN/AR with proper RTL mirroring across every layout, so Arabic visitors get a native-feeling site instead of a translated imitation.",
    ],
    outcome:
      "Live at nexvora.sa as the company's single source of truth — a self-serve platform where the business runs its own web presence and engineering only touches code when the product itself changes.",
    metrics: [
      { value: "2", label: "Languages · EN/AR" },
      { value: "100%", label: "Content admin-editable" },
      { value: "10+", label: "Managed modules" },
      { value: "0", label: "Deploys to update content" },
    ],
    quote: {
      text: "Everything on the site — services, projects, careers, quotes — is managed from the dashboard. Engineering never touches content.",
      author: "Product framing · Nexvora",
    },
  },
  // Real, live project — solar mounting BOM configurator wired to Odoo;
  // currently on staging — swap liveUrl when production ships.
  {
    slug: "promount",
    name: "ProMount Solar Calculator",
    category: "Engineering Tool · Solar",
    tagline: "From roof layout to purchase-ready bill of materials",
    description:
      "A solar mounting configurator for a Dutch mounting-systems manufacturer: pick a roof system — pitched, corrugated, steel-deck, flat or ground mount — set rows, columns, orientation, profiles and clamps, and it computes real system geometry and a complete bill of materials with article codes, packaging units and order quantities, exportable to XLSX/PDF or straight into an Odoo-backed cart. Trilingual NL/EN/FR.",
    tags: ["Next.js", "React", "Odoo Integration", "i18n · NL/EN/FR", "XLSX/PDF Export"],
    liveUrl: "https://stagingcalculator.promountsolar.com",
    repoUrl: "https://github.com/yourhandle/promount-calculator",
    image: "/images/apps/web-promount.png",
    mobileImage: "/images/apps/app-promount.png",
    accent: "124 58 237",
    year: "2026",
    role: "Full-stack developer · solo",
    timeline: "Staging · 2026",
    platform: "Web · NL/EN/FR",
    problem:
      "Quoting a solar mounting system meant hand-computing rails, hooks and clamps from a roof layout in spreadsheets. Every order risked a wrong part or a missing pack — and every revision restarted the math.",
    approach: [
      "Encoded eight mounting systems as one typed configuration model — rows, columns, orientation, roof covering, profile type, colors — so the geometry engine stays a single code path instead of eight special cases.",
      "Made the math live: panel dimensions, system width/depth and the full parts list recalculate on every input, with article codes and packaging units resolved from the product catalog.",
      "Closed the loop to commerce — one-click XLSX/PDF export and a direct hand-off into the Odoo-powered cart, so a configuration becomes a purchase order without retyping a thing.",
    ],
    outcome:
      "A quoting tool that turns minutes of spreadsheet math into a verified, order-ready BOM — live on staging and headed for production across three languages.",
    metrics: [
      { value: "8", label: "Mounting systems" },
      { value: "3", label: "Languages · NL/EN/FR" },
      { value: "Live", label: "Geometry + BOM math" },
      { value: "XLSX · PDF", label: "One-click export" },
    ],
    quote: {
      text: "Configure the roof once — the calculator resolves every article code, pack size and order quantity, then hands the whole BOM to the cart.",
      author: "Product framing · ProMount",
    },
  },
  // Real, live project — ontology-based enterprise AI agent platform; the
  // product behind the Synoptix engagement on the resume (Jun 2025 — Sep 2026).
  {
    slug: "synoptix",
    name: "Synoptix AI",
    category: "AI Platform · Enterprise",
    tagline: "Enterprise AI agents, grounded in the data you already have",
    description:
      "An ontology-based platform for building enterprise AI agents on top of existing company data: conversational search across the organization's knowledge, 100+ connectors, and SynoGuard security controls — with the MCP integrations and pipeline builder I engineered turning complex business processes into reusable automated flows.",
    tags: ["AI Agents", "MCP Servers", "Knowledge Graphs", "SharePoint", "Teradata", "Pipeline Builder"],
    liveUrl: "https://synoptix.ai/",
    repoUrl: "https://github.com/yourhandle/synoptix",
    image: "/images/apps/web-synoptix.png",
    mobileImage: "/images/apps/app-synoptix.png",
    accent: "99 102 241",
    year: "2025–26",
    role: "Software Engineer · AI",
    timeline: "Jun 2025 — Sep 2026",
    platform: "Web · Enterprise SaaS",
    problem:
      "Enterprise knowledge is scattered across SharePoint, data warehouses and CRMs — and most AI pilots die on the same rocks: models that can't see the company's actual data, security teams that can't allow-list what a model touches, and integrations hand-built for every single use case.",
    approach: [
      "Engineered MCP servers connecting SharePoint, Teradata and the company knowledge graph, so agents answer from governed enterprise data instead of guesses — with security controls deciding what each agent can reach.",
      "Built an n8n-style pipeline builder that turns complex business processes into reusable automated flows: decision-making and process automation assembled visually, not re-engineered per workflow.",
      "Worked inside the platform's ontology-based core, where agents, conversational search and the SynoGuard security layer all operate over one connected model of the company's data.",
    ],
    outcome:
      "A production enterprise platform — live at synoptix.ai — where AI agents operate on live company data under explicit security controls, replacing per-team AI pilots with one governed system.",
    metrics: [
      { value: "100+", label: "Data connectors" },
      { value: "MCP", label: "Server integrations" },
      { value: "1", label: "Governed data ontology" },
      { value: "SynoGuard", label: "Security layer" },
    ],
    quote: {
      text: "Agents that answer from the company's actual data — connected, governed, and safe to deploy.",
      author: "Product framing · Synoptix AI",
    },
  },
  // Real engagement — internal AI platform built for Forbes Burton (UK
  // business-advisory firm) via Veda AI. The live embed is the client's
  // public site; the case study covers the internal product behind it.
  {
    slug: "forbesburton",
    name: "Forbes Burton",
    category: "AI Platform · Business Advisory",
    tagline: "The AI case platform behind a UK business-advisory firm",
    description:
      "The internal platform built for Forbes Burton — a UK firm advising small and medium businesses on Performance & Growth, Exit Strategy and Rescue & Recovery: LLM document-analysis pipelines that read company filings automatically, a Kanban case-management system with AI woven into its CRM workflows, OAuth across the Microsoft ecosystem, and Puppeteer scrapers turning UK company data into business intelligence.",
    tags: ["LLM Pipelines", "Document AI", "Kanban System", "Puppeteer Scraping", "Microsoft OAuth"],
    liveUrl: "https://www.forbesburton.com/",
    repoUrl: "https://github.com/yourhandle/forbesburton",
    image: "/images/apps/web-forbesburton.png",
    mobileImage: "/images/apps/app-forbesburton.png",
    accent: "142 26 88",
    year: "2024–25",
    role: "Software Engineer · AI (via Veda AI)",
    timeline: "Dec 2024 — May 2025",
    platform: "Web · Internal product",
    problem:
      "A business-advisory firm lives on case files: every engagement arrives as a stack of filings, correspondence and deadlines. Advisers read documents by hand, case context sat scattered across inboxes, the CRM and spreadsheets, and nothing systematically watched the UK company data that signals when a business is in trouble — or recovering.",
    approach: [
      "Took LLMs to production on the firm's document flow: analysis pipelines that extract and process filings automatically, so a case opens pre-read instead of opening as a pile of documents.",
      "Built the Kanban case-management system advisers run the firm from, with AI assistance woven into its CRM workflows — drafting case notes, surfacing next actions — secured by OAuth integrations across the Microsoft ecosystem for identity, mail and files.",
      "Wrote Puppeteer scrapers that watch UK company data and turn it into business intelligence feeding the same case room: signals on directors, filings and company status reaching advisers before clients do.",
    ],
    outcome:
      "One internal platform where the firm's cases run as a kanban board and the AI does the reading — filings extracted, records updated, advisers walking into every meeting already briefed. The site embedded here is the client's public front door; the product behind it is shown by walkthrough.",
    metrics: [
      { value: "LLM", label: "Document pipelines" },
      { value: "Kanban", label: "Case management" },
      { value: "CRM", label: "AI-woven workflows" },
      { value: "OAuth", label: "Microsoft ecosystem" },
    ],
    quote: {
      text: "The AI does the reading — filings extracted, cases updated, advisers walking into every meeting already briefed.",
      author: "Product framing · Veda AI for Forbes Burton",
    },
  },
];

export const services = [
  {
    num: "01",
    title: "Full-Stack Web Apps",
    body: "From Figma to deployed product — React and Next.js on the front, Node and PostgreSQL on the back, auth, payments, and CI/CD in between. One engineer, whole stack.",
  },
  {
    num: "02",
    title: "Frontend & Interaction",
    body: "Pixel-perfect, motion-rich interfaces that stay fast. Design systems, accessibility, and responsive layouts that feel considered on every screen they land on.",
  },
  {
    num: "03",
    title: "APIs & Integrations",
    body: "REST and GraphQL APIs designed to be boring — typed, documented, cached. Stripe, maps, email, AI: third-party services wired in without the duct tape.",
  },
  {
    num: "04",
    title: "Performance, SEO & Rescue",
    body: "Core Web Vitals in the green, Lighthouse in the nineties, a site Google can read. Slow dashboards and janky lists get profiled, refactored, and shipped before anyone notices they were slow.",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  note?: string;
  url?: string; // company/product site, linked from the company line
  body: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2026 — Present",
    role: "Software Engineer",
    company: "Axiom World",
    note: "Deployed to Intellilake · USA",
    body: "Embedded with Intellilake — the enterprise data OS whose fintech customers include Millennium and KKR. I build on the core agent side: an AI agent layer that drives the product's UI and backend services end to end, orchestrating high-volume financial data across Snowflake, Airflow and AWS Lambda pipelines behind OAuth-secured, multi-tenant access. Shipped under NDA — the dossier lives in the work section.",
  },
  {
    period: "Jun 2025 — Sep 2026",
    role: "Software Engineer · AI",
    company: "Synoptix · Australia",
    url: "https://synoptix.ai/",
    body: "Engineered LLM-driven workflows for decision-making and process automation: MCP servers connecting SharePoint, Teradata, and knowledge graphs, plus an n8n-style pipeline builder that turned complex business processes into reusable flows.",
  },
  {
    period: "Dec 2024 — May 2025",
    role: "Software Engineer · AI",
    company: "Veda AI · UK",
    note: "Product for Forbes Burton",
    url: "https://www.forbesburton.com/",
    body: "Took LLMs to production — document-analysis pipelines that extract and process filings automatically, a Kanban case-management system with AI woven into its CRM workflows, secure OAuth integrations across the Microsoft ecosystem, and Puppeteer scrapers turning UK company data into business intelligence.",
  },
  {
    period: "Sep 2023 — Nov 2024",
    role: "Full-Stack Developer · MERN",
    company: "Prime Genesis of Technology · Lahore",
    body: "Built and maintained MERN platforms, including algorithmic trading bots and dynamic trading dashboards with AI-assisted decisions — REST APIs, tuned database queries, and code reviews holding the quality line.",
  },
];

export type ConfidentialItem = {
  name: string;
  client: string;
  period: string;
  summary: string;
  tags: string[];
  referenceUrl?: string;
};

// Real engagements that can't be shown publicly — no screenshots, no live
// embeds. Presented as NDA dossiers instead of fake visuals.
export const confidentialWork: ConfidentialItem[] = [
  {
    name: "Intellilake — Enterprise Data OS",
    client: "Axiom World · deployed to Intellilake, USA",
    period: "2026 — Present",
    summary:
      "Core-agent engineering for a fintech SaaS platform used by Millennium and KKR: an AI agent that operates the product's UI and backend services — querying and mutating high-volume financial data across Snowflake, Airflow and AWS Lambda, under OAuth-secured multi-tenant access. Screenshots and demos are under NDA; happy to walk through the architecture in an interview.",
    tags: ["Fintech SaaS", "AI Agents", "Snowflake", "Airflow", "AWS Lambda", "Multi-tenant"],
    referenceUrl: "https://www.intellilake.com/",
  },
];

export const testimonials = [
  {
    quote:
      "He took our Figma file and returned a product — fast, responsive, and already converting better than the old site. Easiest hire we've made.",
    author: "Client via Upwork",
    meta: "SaaS founder · US",
  },
  {
    quote:
      "The rare developer who pushes back on designs with data. Our LCP went from four seconds to under one, and mobile conversion followed.",
    author: "Client via Upwork",
    meta: "E-commerce · UK",
  },
  {
    quote:
      "Shipped ahead of schedule, communicated daily, and the handover docs made our internal review painless. Hiring him again.",
    author: "Client via Upwork",
    meta: "Booking platform · UAE",
  },
];
