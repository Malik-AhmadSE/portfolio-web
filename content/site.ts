/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to make the portfolio yours.
 *  Everything on the site reads from this single config.
 *
 *  image / mobileImage are the screenshots shown inside the
 *  laptop / phone frames on the site. Replace them with real
 *  16:10 (web) and 9:19.5 (mobile) screenshots of each project.
 *  liveUrl is only used for the chrome-bar link and the
 *  "visit live site" buttons — the frames do not embed iframes.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Ahmad Ali",
  initials: "AA",
  role: "Software Engineer",
  location: "Remote · Worldwide",
  // TODO: replace with your real domain before deploying — used for
  // metadataBase, sitemap, robots and Open Graph URLs.
  url: "https://your-domain.com",
  email: "maliahmadse@gmail.com",
  // TODO: replace with your real WhatsApp number — international format,
  // digits only (no +, spaces or dashes). "Get in touch" / "Start a
  // conversation" buttons open a chat with this number.
  whatsapp: "+923098553906",
  githubUrl: "https://github.com/Malik-AhmadSE",
  linkedinUrl: "https://www.linkedin.com/in/ahmad-ali-malik",
  availability: "Available for new projects",
  heroTagline: ["I build Web Apps", "that feel alive."],
  heroIntro:
    "I'm a full-stack engineer who goes toward the mess: the vague requirements, the system that's quietly falling apart, the idea nobody knows how to build yet. When I get stuck, I don't reach for a shortcut. I push on the problem, try again, and keep going until I understand it well enough to solve it myself. In 4 years, that habit has taken products across web, AI, and data from a rough conversation to production, and I don't walk away at launch. I stay until it's fast, stable, and trusted. I'd rather delete complexity than add it, and I judge my work by one thing: whether people can depend on it.",
  heroNote: "// everything is a component",
  aboutStatement:
    "Most websites fail on feel, not features. A layout that jumps as it loads. A button with no hover, no feedback, no soul. An API that takes three seconds to admit it. My job is to hunt those moments down and fix them — then wire the whole thing to a backend that's boring in the best way: typed, tested, and fast.",
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "30+", label: "Projects shipped" },
    { value: "98+", label: "Avg. Lighthouse score" },
    { value: "100%", label: "Job success on Upwork" },
  ],
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl: string; // deployed site — rendered inside the device frames
  repoUrl: string;
  image: string; // 16:10 desktop screenshot shown in the laptop frame
  mobileImage: string; // 9:19.5 phone screenshot for the overlapping phone frame
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
  {
    slug: "ledgerly",
    name: "Ledgerly",
    category: "SaaS · FinTech",
    tagline: "Financial clarity, one glance at a time",
    description:
      "An analytics dashboard for small businesses: real-time revenue charts, invoice automation, and Stripe reconciliation. Server components for the heavy tables, optimistic updates everywhere a user can click.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "https://ledgerly-demo.vercel.app",
    repoUrl: "https://github.com/yourhandle/ledgerly",
    image: "/images/apps/web-ledgerly.webp",
    mobileImage: "/images/apps/app-fintech.webp",
    accent: "124 92 255",
    year: "2025",
    role: "Full-stack developer · solo",
    timeline: "4 months · 2025",
    platform: "Web · Responsive",
    problem:
      "The client's customers had data but no answers. Their existing dashboard took six seconds to load a page of charts, and every filter click re-rendered the world. Users exported to spreadsheets — the product had become a middleman.",
    approach: [
      "Rebuilt the data layer on React Server Components with streaming — the shell paints in under 200ms while heavy aggregates load in place, skeletons exactly where the numbers land.",
      "Designed an optimistic-update pattern for every mutation: the UI commits instantly and reconciles with the server, so the app feels local even on hotel Wi-Fi.",
      "Replaced the chart library with lightweight, hand-tuned SVG charts — 180KB of JavaScript gone, and tooltips that finally track the cursor at 60fps.",
    ],
    outcome:
      "Time-to-first-insight dropped from six seconds to under one. Spreadsheet exports fell by two-thirds in the first quarter — customers stayed in the product because the product finally kept up.",
    metrics: [
      { value: "0.9s", label: "LCP" },
      { value: "97", label: "Lighthouse" },
      { value: "-66%", label: "Spreadsheet exports" },
      { value: "40ms", label: "API p95" },
    ],
    quote: {
      text: "He took our Figma file and returned a product — fast, responsive, and already converting better than the old dashboard. Easiest hire we've made.",
      author: "Founder, SaaS startup · US",
    },
  },
  {
    slug: "atelier",
    name: "Atelier",
    category: "E-commerce",
    tagline: "A storefront that loads before the thought finishes",
    description:
      "A headless commerce storefront for an independent furniture brand: editorial product pages, instant search, and a checkout that doesn't blink. Static where possible, dynamic only where it earns it.",
    tags: ["Next.js", "Shopify", "Tailwind", "Framer Motion"],
    liveUrl: "https://atelier-storefront-demo.vercel.app",
    repoUrl: "https://github.com/yourhandle/atelier",
    image: "/images/apps/web-atelier.webp",
    mobileImage: "/images/apps/app-food.webp",
    accent: "255 138 101",
    year: "2024",
    role: "Lead frontend developer",
    timeline: "3 months · 2024",
    platform: "Web · Responsive",
    problem:
      "Beautiful brand, slow store. The previous build scored 34 on Lighthouse mobile, product pages shifted layout for two seconds after load, and 71% of traffic — all mobile — bounced before the hero image finished.",
    approach: [
      "Moved to a headless architecture with the Next.js App Router: product pages statically generated and regenerated on demand, cart and checkout as client islands.",
      "Built a page-transition system with Framer Motion that masks navigation latency — the site feels instant even on a slow connection.",
      "Wrote an image pipeline that crops art-directed variants per breakpoint from Shopify's CDN, cutting image weight by 74% without touching source assets.",
    ],
    outcome:
      "Mobile LCP went from 4.1s to 0.8s. Conversion rose 19% in the first month, and the store was shortlisted in an e-commerce design showcase — performance and taste stopped being a trade-off.",
    metrics: [
      { value: "0.8s", label: "Mobile LCP" },
      { value: "+19%", label: "Conversion" },
      { value: "100", label: "SEO score" },
      { value: "-74%", label: "Image weight" },
    ],
    quote: {
      text: "The rare developer who pushes back on designs with data. Our mobile experience went from an apology to an argument for the brand.",
      author: "Creative director, furniture brand · UK",
    },
  },
  {
    slug: "cadence",
    name: "Cadence",
    category: "Productivity · Real-time",
    tagline: "A team workspace that keeps up with the conversation",
    description:
      "A real-time project workspace: shared boards, live cursors, and presence indicators over WebSockets, with an offline queue that replays edits when the connection returns.",
    tags: ["React", "Node.js", "WebSockets", "Redis", "Postgres"],
    liveUrl: "https://cadence-app-demo.vercel.app",
    repoUrl: "https://github.com/yourhandle/cadence",
    image: "/images/apps/web-cadence.webp",
    mobileImage: "/images/apps/app-social.webp",
    accent: "84 197 248",
    year: "2024",
    role: "Full-stack engineer · founding team",
    timeline: "6 months · 2023 — 2024",
    platform: "Web · Responsive",
    problem:
      "The prototype updated on a five-second poll. Two people editing the same card overwrote each other, presence was a green dot that lied, and every refresh lost the scroll position — collaboration software that made people work alone.",
    approach: [
      "Replaced polling with a WebSocket layer backed by Redis pub/sub and an operation-log data model, so edits merge by intent instead of last-write-wins.",
      "Built an offline action queue in the client: edits, drags and comments queue locally and replay in order on reconnect, with a visible sync state so trust is never guessing.",
      "Designed presence as a first-class feature — live cursors, avatars in the header, and a subtle 'X is typing' — all under 100ms end-to-end.",
    ],
    outcome:
      "Median edit-to-screen latency fell from 5,000ms to 80ms. Support tickets about 'lost changes' went to zero, and the live-cursor demo became the sales team's opening move.",
    metrics: [
      { value: "80ms", label: "Edit-to-screen" },
      { value: "12k", label: "Concurrent users" },
      { value: "0", label: "Lost-change tickets" },
      { value: "99.98%", label: "Uptime" },
    ],
    quote: {
      text: "It's the first internal tool our team actually opens on purpose. The real-time layer he built has been rock solid through every growth spike.",
      author: "CTO, productivity startup · Canada",
    },
  },
  {
    slug: "fernbrook",
    name: "Fernbrook",
    category: "Travel · Booking",
    tagline: "From wanderlust to booked in three screens",
    description:
      "A booking platform for boutique stays: map-first discovery, instant availability search, and a checkout flow tuned like a checkout flow should be — three screens, no surprises.",
    tags: ["Next.js", "Mapbox", "PostgreSQL", "Auth.js", "Stripe"],
    liveUrl: "https://fernbrook-stays-demo.vercel.app",
    repoUrl: "https://github.com/yourhandle/fernbrook",
    image: "/images/apps/web-fernbrook.webp",
    mobileImage: "/images/apps/app-fitness.webp",
    accent: "214 244 74",
    year: "2023",
    role: "Full-stack developer",
    timeline: "5 months · 2023",
    platform: "Web · Responsive",
    problem:
      "The client's old flow took nine taps and three page reloads to book a room, and the map view — where every journey started — took four seconds to become interactive. On mobile, the exact device people browse stays on, the funnel leaked.",
    approach: [
      "Collapsed the funnel to three screens: search, room, pay. Dates and guests live in an inline sheet, never a page navigation.",
      "Made the map the homepage — Mapbox with marker clustering and viewport-based search that queries as you pan, debounced and cached at the edge.",
      "Moved availability to a single SQL function with row-level locking, ending the double-booking race condition that refunds had made expensive.",
    ],
    outcome:
      "Booking completion rose 27% in the first month. Support tickets asking 'where is my confirmation' fell by half, and the average session finally ended in a reservation instead of a tab closed in frustration.",
    metrics: [
      { value: "+27%", label: "Booking completion" },
      { value: "3", label: "Screens to book" },
      { value: "-50%", label: "Support tickets" },
      { value: "95+", label: "Lighthouse mobile" },
    ],
    quote: {
      text: "Shipped ahead of schedule, communicated daily, and the handover docs made our internal review painless. Hiring him again.",
      author: "Product lead, hospitality group · UAE",
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
    body: "Core Web Vitals in the green, Lighthouse in the nineties, a site Google can read. Inherited a codebase that scares you? I profile, refactor, and ship.",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "Full-Stack Developer · Freelance",
    company: "Upwork · Top Rated",
    body: "Designing, building, and shipping complete web products for founders and agencies — from Figma handoff to deployed, monitored production. 100% job success, every contract five stars.",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Software House",
    body: "Led Next.js delivery for client platforms in fintech and e-commerce. Introduced a shared component library that cut project delivery time by 30%.",
  },
  {
    period: "2022 — 2023",
    role: "Web Developer",
    company: "Product Company",
    body: "Shipped features across a React + Node codebase, then led its migration to Next.js — halving LCP and lifting organic traffic 40%.",
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
