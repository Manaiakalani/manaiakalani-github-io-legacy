export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  stars: number;
  isPrivate: boolean;
  updatedAt: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "pulse-wa",
    description:
      "Washington State public health dashboard — 15+ live data sources, interactive charts, multilingual support",
    url: "https://github.com/Manaiakalani/pulse-wa",
    language: "TypeScript",
    topics: ["nextjs", "dashboard", "public-health", "data-visualization"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-21",
  },
  {
    name: "nenebytes-docs",
    description:
      "Infrastructure docs for the Nenebytes homelab — Fumadocs + Next.js, auto-deployed via GitHub Actions & Cloudflare Tunnel",
    url: "https://github.com/Manaiakalani/nenebytes-docs",
    language: "MDX",
    topics: ["docker", "documentation", "fumadocs", "homelab", "nextjs"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-21",
  },
  {
    name: "vestaflap-studio",
    description:
      "Local-first dashboard for Vestaboard Note — compose, paint, and send messages with split-flap animations",
    url: "https://github.com/Manaiakalani/vestaflap-studio",
    language: "TypeScript",
    topics: ["vestaboard", "dashboard", "animations", "local-first"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-21",
  },
  {
    name: "Cards",
    description:
      "The party game for digital natives where memes meet mayhem! A modern Cards Against Humanity clone with tech humor, built with Next.js, TypeScript & Framer Motion.",
    url: "https://github.com/Manaiakalani/Cards",
    language: "TypeScript",
    topics: ["nextjs", "typescript", "framer-motion", "game"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-21",
  },
  {
    name: "story-weaver-ai",
    description:
      "Quill — AI-powered interactive storytelling app. React 18 + TypeScript + Vite, with Ollama and cloud AI providers, Supabase auth/storage, branching narratives.",
    url: "https://github.com/Manaiakalani/story-weaver-ai",
    language: "TypeScript",
    topics: [
      "ai",
      "creative-writing",
      "ollama",
      "react",
      "storytelling",
      "supabase",
    ],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-16",
  },
  {
    name: "image-weaver",
    description:
      "AI-powered character generation — describe any character and watch it come to life. Built with React, TypeScript, Vite, Tailwind CSS, and Google Gemini 2.5 Flash.",
    url: "https://github.com/Manaiakalani/image-weaver",
    language: "TypeScript",
    topics: [
      "ai",
      "character-generator",
      "gemini",
      "image-generation",
      "react",
    ],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-16",
  },
  {
    name: "pretty-pocketbook",
    description:
      "A minimal, privacy-first personal finance journal. Track income & expenses, plan debt payoff with avalanche/snowball strategies — all in your browser.",
    url: "https://github.com/Manaiakalani/pretty-pocketbook",
    language: "TypeScript",
    topics: [
      "budgeting",
      "dark-mode",
      "personal-finance",
      "react",
      "shadcn-ui",
      "tailwindcss",
    ],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-16",
  },
  {
    name: "MemeChu",
    description:
      "The meme generator that understood the assignment. Browse 100+ templates, add GIFs, drag text overlays, export as PNG or animated GIF. React 19 + Vite 7 PWA.",
    url: "https://github.com/Manaiakalani/MemeChu",
    language: "TypeScript",
    topics: ["meme-generator", "pwa", "react", "tailwindcss", "vite"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-16",
  },
  {
    name: "supabase-dashboard",
    description:
      "Unified dashboard for managing multiple Supabase projects",
    url: "https://github.com/Manaiakalani/supabase-dashboard",
    language: "TypeScript",
    topics: ["supabase", "dashboard", "typescript"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-21",
  },
  {
    name: "borderlands-loot-hub",
    description:
      "Borderlands SHiFT Vault — A sleek, Borderlands-themed SHiFT code aggregator for Vault Hunters. Find and copy Golden Key codes for BL1–BL4 & Wonderlands.",
    url: "https://github.com/Manaiakalani/borderlands-loot-hub",
    language: "TypeScript",
    topics: [
      "borderlands",
      "game-codes",
      "golden-keys",
      "react",
      "shift-codes",
      "vite",
    ],
    stars: 0,
    isPrivate: false,
    updatedAt: "2026-03-16",
  },
  {
    name: "destiny-code-finder",
    description:
      "Destiny 2 emblem code finder — aggregates codes from Reddit, Blueberries.gg & more. Privacy-first, no tracking.",
    url: "https://github.com/Manaiakalani/destiny-code-finder",
    language: "TypeScript",
    topics: [
      "destiny-2",
      "emblem-codes",
      "github-pages",
      "react",
      "typescript",
      "vite",
    ],
    stars: 0,
    isPrivate: false,
    updatedAt: "2026-03-16",
  },
  {
    name: "Manaiakalani.com",
    description:
      "Portfolio for Manaiakalani — vanilla HTML, CSS, and JavaScript with dark mode, GeoCities easter egg, and 3D ASCII cube.",
    url: "https://github.com/Manaiakalani/Manaiakalani.com",
    language: "JavaScript",
    topics: ["portfolio", "vanilla-js", "html-css"],
    stars: 1,
    isPrivate: false,
    updatedAt: "2026-03-21",
  },
  {
    name: "yeshello.lol",
    description:
      "The Gen Z communication power move — just say \u2018Hello\u2019 and make them wait. \ud83d\udc4b",
    url: "https://github.com/Manaiakalani/yeshello.lol",
    language: "HTML",
    topics: [
      "dark-mode",
      "gen-z",
      "html-css-javascript",
      "humor",
      "vanilla-js",
    ],
    stars: 0,
    isPrivate: false,
    updatedAt: "2026-03-21",
  },
  {
    name: "OnlyArchitects.art",
    description: "OnlyArchitects.art — a creative platform for architecture.",
    url: "https://github.com/Manaiakalani/OnlyArchitects.art",
    language: "HTML",
    topics: ["architecture", "creative"],
    stars: 0,
    isPrivate: false,
    updatedAt: "2026-03-21",
  },
  {
    name: "awair-home-monitor",
    description:
      "Awair Home Element — Local Air Quality Monitor with Liquid Glass UI",
    url: "https://github.com/Manaiakalani/awair-home-monitor",
    language: "JavaScript",
    topics: ["iot", "air-quality", "dashboard", "liquid-glass"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-15",
  },
  {
    name: "tot-trek-parks",
    description:
      "Tot Trek Parks — discover and explore parks for families with young children.",
    url: "https://github.com/Manaiakalani/tot-trek-parks",
    language: "TypeScript",
    topics: ["parks", "family", "maps", "react", "typescript"],
    stars: 0,
    isPrivate: true,
    updatedAt: "2026-03-16",
  },
];

export const ALL_LANGUAGES = [
  ...new Set(FEATURED_PROJECTS.map((p) => p.language)),
].sort();

export const ALL_TOPICS = [
  ...new Set(FEATURED_PROJECTS.flatMap((p) => p.topics)),
].sort();

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  MDX: "#fcb32c",
  Python: "#3572A5",
};
