// All content below comes from Mahmudul's resume (resume.html) and his previous
// website (mahmudulhaque.vercel.app). Nothing is invented.

export const profile = {
  name: "Mahmudul Haque",
  tagline: "Full-Stack Software & AI Engineer",
  location: "Dhaka, Bangladesh",
  email: "mahmudulhaqshaown@gmail.com",
  phone: "+880 1716-714733",
  phoneHref: "+8801716714733",
  website: "https://mahmudulhaque.vercel.app",
  github: "https://github.com/mdhshaown69",
  githubAlt: "https://github.com/mdhshawon69",
  linkedin: "https://linkedin.com/in/mahmudul-haque-b1486a252",
  facebook: "https://www.facebook.com/profile.php?id=100004614645933",
  resumePdf: "/assets/mahmudul_haque.pdf",
  intro:
    "Hey, I'm Mahmudul. I build scalable, high-performance web and mobile applications — and ship LLM-powered products. Sometimes for the teams I work with, always with production quality in mind.",
  // Definition-list facts (resume + previous site)
  facts: [
    {
      term: "Role",
      value:
        "Full-Stack Software & AI Engineer. I take products from idea to production, across web, mobile and AI.",
    },
    {
      term: "Focus",
      value:
        "React Native mobile development for logistics ecosystems, with strong full-stack capabilities in React.js, Next.js, NestJS and Node.js — now specialising in LLM-powered products.",
    },
    {
      term: "Stack",
      value:
        "React, Next.js, React Native, TypeScript, Node.js, NestJS, LangChain, LangGraph, PostgreSQL, MongoDB, and more.",
    },
    {
      term: "Experience",
      value:
        "5+ years building & shipping scalable web and mobile applications, including apps serving 100,000+ monthly active users.",
    },
    { term: "Location", value: "Dhaka, Bangladesh." },
  ],
  highlights: [
    { value: "5+", label: "Years building software" },
    { value: "100K+", label: "Monthly active users served" },
    { value: "90+", label: "Lighthouse scores achieved" },
    { value: "35%", label: "Faster cold-starts shipped" },
  ],
};

export const aboutParagraphs = [
  "Full-Stack Software & AI Engineer with 5+ years of experience building scalable, high-performance web and mobile applications, now specialising in LLM-powered products. Strong expertise in React.js, Next.js, React Native, Node.js and NestJS, combined with hands-on AI engineering skills in NLP, LangChain, LangGraph, Retrieval-Augmented Generation (RAG), vector databases and prompt optimization.",
  "Experienced in shipping production-ready systems, designing AI agents and RAG pipelines, optimizing performance and translating business needs into reliable, maintainable software.",
];

export const skillGroups = [
  {
    title: "AI & LLM Engineering",
    description:
      "LangChain, LangGraph, RAG pipelines, prompt engineering & optimization, AI agents & multi-agent workflows, tool/function calling, NLP, embeddings & semantic search, LLM evaluation & guardrails, fine-tuning.",
    skills: [
      { name: "LangChain", slug: "langchain" },
      { name: "LangGraph", slug: null },
      { name: "OpenAI", slug: "openai" },
      { name: "Pinecone", slug: "pinecone" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "React Native, Expo, and Native Modules for building high-performance cross-platform mobile applications with native-level performance across iOS and Android.",
    skills: [
      { name: "React Native", slug: "react" },
      { name: "Expo", slug: "expo" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    title: "Frontend Development",
    description:
      "React.js, Next.js, TypeScript, and JavaScript for building dynamic, responsive, and scalable web applications with modern UI/UX patterns and server-side rendering.",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Node.js, NestJS, Express.js, RESTful APIs, and Redis for building robust, scalable server-side applications with efficient data handling and caching strategies.",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Express", slug: "express" },
      { name: "Python", slug: "python" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Databases & Vector Stores",
    description:
      "MongoDB, PostgreSQL, MySQL, Redis, and vector & embedding stores such as Pinecone, ChromaDB and FAISS.",
    skills: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "State Management & Validation",
    description:
      "Redux Toolkit, TanStack Query, React Hook Form, Zod, JWT, Role-Based Access Control (RBAC), and API security & rate limiting for managing complex application state and building performant, type-safe apps.",
    skills: [
      { name: "Redux", slug: "redux" },
      { name: "React Hook Form", slug: "reacthookform" },
      { name: "Zod", slug: "zod" },
    ],
  },
  {
    title: "Styling & UI",
    description:
      "Tailwind CSS, SCSS/SASS, Styled Components, HTML5 and CSS3 for creating beautiful, responsive, and maintainable user interfaces.",
    skills: [
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Sass", slug: "sass" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS", slug: "css" },
    ],
  },
  {
    title: "Tools & Deployment",
    description:
      "Git, GitHub, Docker, CI/CD, Vercel, Netlify, DigitalOcean, Nginx, Cloudflare — plus Lighthouse optimization and scalable, component-based architecture.",
    skills: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "Nginx", slug: "nginx" },
      { name: "Cloudflare", slug: "cloudflare" },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Al Aqsa Express",
    location: "Dhaka, Bangladesh",
    period: "Nov 2025 – Jun 2026",
    current: true,
    points: [
      "Lead React Native mobile app development for logistics ecosystem serving thousands of users across iOS and Android.",
      "Architect real-time tracking, delivery workflows, and route optimization with Redux Toolkit and native modules.",
      "Optimize performance achieving 60 FPS animations, 40% reduced bundle size, and 35% faster cold start times.",
      "Mentored junior developers, fostering professional growth and enhancing team productivity.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "YY Ventures",
    location: "Dhaka, Bangladesh",
    period: "Dec 2022 – Dec 2024",
    points: [
      "Architected full-stack applications with Next.js and NestJS handling 100,000+ monthly active users.",
      "Built responsive UIs with advanced search, filtering, and data visualization using Redux Toolkit and React Hook Form.",
      "Achieved 90+ Lighthouse scores through code splitting, lazy loading, and optimization techniques.",
      "Designed scalable architecture for applications to easily accommodate future growth in user base or functionality expansion.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Make Real",
    location: "Rajshahi, Bangladesh",
    period: "Aug 2022 – Nov 2022",
    points: [
      "Developed React applications with Redux Toolkit, React Hook Form, and Zod schema validation.",
      "Optimized performance using memoization techniques reducing re-renders by 70%.",
      "Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Global Digital Solutions",
    location: "Dhaka, Bangladesh",
    period: "Feb 2020 – Jun 2022",
    points: [
      "Converted design mockups into responsive React components with modern JavaScript ES6+ and semantic HTML/CSS.",
      "Integrated RESTful APIs with comprehensive error handling and implemented WCAG accessibility guidelines.",
      "Collaborated with the design team to convert mockups into fully functional web pages, ensuring seamless user interfaces.",
    ],
  },
];

export const projects = [
  {
    title: "AAEX Merchant App",
    link: "https://play.google.com/store/apps/details?id=com.alaqsaexpress.aaexmerchant&hl=en",
    type: "React Native",
    stack: ["React Native", "Redux Toolkit"],
    description:
      "React Native mobile application for Al-Aqsa Express merchants to manage shipments, schedule pickups, track parcels in real time, and handle cash-on-delivery workflows. Built as part of Bangladesh's logistics ecosystem with nationwide delivery coverage, SMS tracking updates, and dedicated merchant account management.",
  },
  {
    title: "AAEX Rider App",
    link: null,
    type: "React Native",
    stack: ["React Native", "Redux Toolkit"],
    description:
      "React Native mobile application for Al-Aqsa Express delivery riders, enabling real-time route management, parcel pickup and drop-off workflows, delivery status updates, and seamless coordination with the merchant platform across the nationwide courier network.",
  },
  {
    title: "Al Aqsa Express",
    link: "https://al-aqsa.express",
    type: "Next.js · shadcn/ui",
    stack: ["Next.js", "shadcn/ui"],
    description:
      "Corporate website for Bangladesh's Al-Aqsa Express courier service. Showcases nationwide logistics coverage, merchant services, parcel tracking, and company offerings with a modern, responsive design.",
  },
  {
    title: "Imporo",
    link: "https://imporo.global",
    type: "Next.js · NestJS · PostgreSQL",
    stack: ["Next.js", "NestJS", "PostgreSQL", "shadcn/ui"],
    description:
      "Dropshipping platform. Full-stack e-commerce solution for managing product catalogs, orders, and supplier integrations with a modern, responsive admin and storefront experience.",
  },
  {
    title: "YY Ventures",
    link: "https://yy.ventures",
    type: "Next.js · SCSS",
    stack: ["Next.js", "NestJS", "MongoDB", "SCSS"],
    description:
      "Crafted with Next.js 13 and SCSS. Leveraging Next.js for server-side rendering and seamless navigation, coupled with SCSS styling, delivering a smooth and engaging user experience.",
  },
  {
    title: "Grameen Trust",
    link: "https://grameentrust.org",
    type: "Next.js · SCSS",
    stack: ["Next.js", "NestJS", "MongoDB", "Mongoose", "SCSS"],
    description:
      "Meticulously crafted with Next.js and SCSS. The seamless integration of Next.js ensures a fast, dynamic, and user-friendly experience with a sleek, modern online presence.",
  },
  {
    title: "Grameen Kalyan",
    link: "https://grameenkalyan.com",
    type: "Next.js · SCSS",
    stack: ["Next.js", "SCSS"],
    description:
      "A dynamic and user-centric platform built with Next.js 13 and SCSS, providing a seamless and performant user experience with modern technology and functionality.",
  },
  {
    title: "Impact Hub Dhaka",
    link: "https://dhaka.impacthub.net",
    type: "Next.js 15 · TailwindCSS",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Built using Next.js 15 and TailwindCSS. Leveraging Next.js for server-side rendering, coupled with the flexibility of TailwindCSS, combining performance with aesthetics.",
  },
  {
    title: "3Zero Club",
    link: "https://3zero.club",
    type: "Angular · NestJS",
    stack: ["Angular", "NestJS", "Next.js", "MongoDB", "TypeORM"],
    description:
      "Stewardship of the 3Zero Club website: ongoing maintenance involves optimizing performance, updating content, and implementing enhancements to uphold a dynamic online presence.",
  },
  {
    title: "Grameen Telecom",
    link: "https://grameentelecom.net.bd",
    type: "Website · Social Enterprise",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Website for a social enterprise focused on leveraging telecommunications technology to empower rural communities, expand mobile phone access to underserved populations, and facilitate digital inclusion.",
  },
  {
    title: "Grameen Distribution E-commerce",
    link: "https://grameendistribution.com/shop",
    type: "Next.js · E-commerce",
    stack: ["Next.js", "NestJS", "MongoDB", "Mongoose"],
    description:
      "Comprehensive online marketplace connecting rural communities with essential products — health supplies, energy solutions, and consumer goods — with real-time inventory tracking, order management, and delivery status updates.",
  },
  {
    title: "Grameen Distribution Limited",
    link: "https://grameendistribution.com",
    type: "Website",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Showcases the company's mission to enhance access to essential products and services in rural and underserved areas of Bangladesh — health, energy, and consumer products for low-income communities.",
  },
  {
    title: "Ooroh",
    link: "https://ooroh.com",
    type: "Next.js · GSAP",
    stack: ["Next.js", "GSAP", "Tailwind CSS"],
    description:
      "A sleek and interactive website with advanced animations and seamless navigation, focusing on fast performance, smooth transitions, and responsive layouts.",
  },
  {
    title: "Grameen Telecom Trust",
    link: "https://gtctrust.com",
    type: "MERN Stack",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    description:
      "A dynamic and user-friendly website showcasing GTT's mission of implementing and facilitating Social Business ideas to drive societal transformation. Designed for scalability and seamless user experience.",
  },
  {
    title: "Social Business Youth Summit",
    link: "https://summit.yy.ventures",
    type: "Event Platform",
    stack: ["Next.js", "Tailwind CSS"],
    description:
      "Platform for an annual gathering of young changemakers, entrepreneurs, and social innovators — featuring workshops, keynote speeches, networking, and panel discussions on social business.",
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science — BUBT",
    detail:
      "Currently pursuing a B.Sc. in Computer Science and Engineering at Bangladesh University of Business and Technology, Dhaka. The curriculum delves into advanced topics, building upon foundational knowledge.",
    period: "2023 – Present (Expected Jun 2027)",
  },
  {
    degree:
      "Diploma in Engineering — Engineering and Survey Institute, Rajshahi",
    detail:
      "Completed Diploma in Engineering (Computer Technology) with a CGPA of 3.54/4.00. Comprehensive understanding of fundamental engineering principles including mathematics, physics, and specialized areas in computer engineering.",
    period: "2022",
  },
];

// Simple Icons slugs for tech names used in project stacks
export const techSlugMap: Record<string, string> = {
  "React Native": "react",
  React: "react",
  "Next.js": "nextdotjs",
  "Redux Toolkit": "redux",
  "shadcn/ui": "shadcnui",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  SCSS: "sass",
  "Tailwind CSS": "tailwindcss",
  Angular: "angular",
  MongoDB: "mongodb",
  Mongoose: "mongoose",
  GSAP: "gsap",
  TypeORM: "typeorm",
  "Express.js": "express",
  "Node.js": "nodedotjs",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
