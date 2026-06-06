import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rajakone",
  lastName: "Christan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about infrastructure, system design, and the craft of
      shipping production software.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/christancone",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/christancone/",
  },
  {
    name: "X.com",
    icon: "x",
    link: "https://x.com/christancone",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:christanthedev@gmail.com",
  },
  {
    name: "Fiverr",
    icon: "fiverr",
    link: "https://www.fiverr.com/s/zW6z7Nz",
  },
];

const home = {
  label: "Home",
  title: `${person.name} — Software Engineer`,
  description: `Software engineer specialising in infrastructure, system design, and solution engineering. Founder of Kirk (kirkreservations.lk).`,
  headline: <>Infrastructure, systems & solution engineering</>,
  subline: (
    <>
      I'm Christan — a software engineer who architects and ships production
      systems end to end, across <strong>cloud infrastructure</strong>,{" "}
      <strong>full-stack web</strong>, and <strong>AI/ML</strong>. I'm currently
      building <strong>Kirk</strong>, a reservations platform for Sri Lanka,
      from idea to launch.
    </>
  ),
};

// Flagship venture — owned end to end (idea → development → marketing).
const kirk = {
  display: true,
  name: "Kirk",
  tagline: "Reservations, reimagined for Sri Lanka",
  url: "https://kirkreservations.lk",
  status: "In active development",
  logo: "/images/kirk-logo.png", // horizontal wordmark (white) — for dark surfaces
  icon: "/images/kirk-icon.png", // app icon mark
  description: (
    <>
      <strong>Kirk</strong> is my own venture —{" "}
      <strong>mine end to end, from the idea to development to marketing.</strong>{" "}
      It's a reservations platform for Sri Lanka: customers book on web and
      mobile, businesses manage availability, and the whole thing runs on a
      deliberately lean, serverless stack with no dedicated backend server. I own
      the product design, the architecture, the infrastructure, and the
      go-to-market.
    </>
  ),
  // Stack drawn directly from Kirk's hosting & infrastructure reference.
  stack: [
    "Expo / EAS",
    "React Native",
    "Supabase",
    "Edge Functions",
    "Vercel",
    "Cloudflare",
    "Resend",
    "AWS SES",
    "Text.lk",
  ],
};

// "What else they can get from me" — services / areas of expertise.
const services = {
  display: true,
  title: "What I can do for you",
  description: (
    <>
      I take on the hard, foundational parts of a product — the parts that decide
      whether it scales, stays up, and ships on time.
    </>
  ),
  items: [
    {
      icon: "cloud",
      title: "Cloud Infrastructure & DevOps",
      description: (
        <>
          AWS (Lambda, ECS, S3, Step Functions, SQS, IAM, CloudWatch), Docker,
          CI/CD pipelines, deployment automation, and infrastructure security —
          set up so teams can ship safely and often.
        </>
      ),
    },
    {
      icon: "layers",
      title: "System Design & Architecture",
      description: (
        <>
          Scalable, serverless and event-driven architectures, multi-agent
          systems, NX monorepos, and clean layered design. I architect platforms
          from scratch and keep them maintainable as they grow.
        </>
      ),
    },
    {
      icon: "rocket",
      title: "Solution Engineering",
      description: (
        <>
          Translating a business problem into a working product — idea,
          architecture, build, and launch. I've taken platforms from zero to
          production, both for clients and for my own venture, Kirk.
        </>
      ),
    },
    {
      icon: "sparkles",
      title: "AI / ML Engineering",
      description: (
        <>
          Multi-agent systems with LangGraph & LangChain, document-intelligence
          pipelines, and Gemini/OpenAI integrations — including an aviation
          platform that turns thousands of pages of records into queryable data.
        </>
      ),
    },
    {
      icon: "code",
      title: "Full-Stack Development",
      description: (
        <>
          Next.js, React, React Native, Node.js/Express, FastAPI, and Spring Boot
          — responsive, performant web and mobile apps backed by well-modelled
          data layers.
        </>
      ),
    },
    {
      icon: "database",
      title: "Data & Integrations",
      description: (
        <>
          PostgreSQL, MySQL, MongoDB, Supabase, Redis, and Prisma — plus payment
          (Stripe), messaging, and headless-CMS integrations wired into reliable
          pipelines.
        </>
      ),
    },
  ],
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Sri Lanka`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/christancone",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        a software engineer with hands-on experience architecting and shipping
        production systems across full-stack web, cloud infrastructure, and AI/ML.
        I led end-to-end development of an aviation intelligence platform that
        turns thousands of unstructured documents into structured, queryable data,
        and I care most about the foundational work — infrastructure, system
        design, and solution engineering — that decides whether a product scales
        and stays reliable. Alongside my work I'm building Kirk, my own
        reservations platform for Sri Lanka.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ascentis Technologies",
        timeframe: "2025 - Present",
        role: "Lead Engineer · Sparengine — Remote (Paris, France)",
        achievements: [
          <>
            Architected and engineered an entire <strong>aviation document
            intelligence platform</strong> from scratch, transforming thousands of
            pages of unstructured aircraft asset records into structured, queryable
            data.
          </>,
          <>
            Built <strong>multi-agent systems with LangGraph</strong>, where
            specialised agents collaborate to deeply analyse aviation asset
            documents.
          </>,
          <>
            Established <strong>CI/CD pipelines, deployment automation, and
            infrastructure security</strong> across AWS (Lambda, Step Functions,
            ECS, S3, CloudWatch).
          </>,
          <>
            As a full-cycle developer, led{" "}
            <a href="https://photos-ventouxsummit.fr" target="_blank" rel="noopener noreferrer">Photos Ventoux</a>{" "}
            (photo-commerce with Stripe and a high-throughput media pipeline) and{" "}
            <a href="http://simpleemailsignature.com" target="_blank" rel="noopener noreferrer">Email Signature Generator</a>, and published the{" "}
            <strong>notion-upstash-cms</strong> npm package.
          </>,
          <>
            Leading and mentoring a team of engineers through code reviews,
            architecture guidance, and technical decision-making.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Project Screenshots/Simple Mail Signature/Screenshot 2025-03-16 050701.png",
            alt: "Email Signature Generator",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Project Screenshots/photos-ventouxsummit.fr/Screenshot 2025-04-04 230908.png",
            alt: "Photos Ventoux",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kirk Reservations",
        timeframe: "2025 - Present",
        role: "Founder & Engineer · kirkreservations.lk",
        achievements: [
          <>
            Conceived and am building <strong>Kirk</strong> — a reservations
            platform for Sri Lanka — single-handedly across product, design,
            engineering, infrastructure, and marketing.
          </>,
          <>
            Designed a deliberately lean, <strong>serverless architecture with no
            dedicated backend server</strong>: Supabase for auth, data, storage and
            Edge Functions; Vercel for web; Cloudflare for DNS and email routing.
          </>,
          <>
            Ship the same Expo codebase to <strong>Android (via EAS / Google Play)
            and the web</strong>, with transactional email through Resend (on AWS
            SES) and SMS/OTP via Text.lk.
          </>,
        ],
        images: [],
      },
      {
        company: "SoftSora",
        timeframe: "2025",
        role: "Software Engineer Intern · Hybrid, Sri Lanka",
        achievements: [
          <>
            Developed the <strong>DGloss AI call-center platform</strong> —
            operator/admin UIs and core backend APIs for call counting and
            per-agent limit enforcement.
          </>,
          <>
            Built responsive, server-side paginated and filtered data tables in an{" "}
            <strong>NX monorepo</strong> with a clean layered architecture, and
            worked with <strong>AWS Connect</strong> and <strong>Asterisk PBX</strong>{" "}
            for contact-center and telephony orchestration.
          </>,
          <>
            Built an Insurance Event Platform for a Japanese client with Stripe
            payments and QR-code access cards, applying Japanese design principles
            of minimalism and clarity.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Uva Wellassa University",
        description: <>BSc in Computer Science & Technology — Cumulative GPA 3.72.</>,
      },
      {
        name: "Certifications",
        description: (
          <>
            Synapses, Neurons & Brains (Hebrew University of Jerusalem) ·
            Introduction to Psychology (Yale) · Introduction to Programming Using
            Python (University of Moratuwa).
          </>
        ),
      },
    ],
  },
  research: {
    display: true,
    title: "Research",
    items: [
      {
        title: "AVCCT-HCD — Harmful Content Detection in Short Videos",
        description: (
          <>
            An audio-visual transformer for multi-label classification of harmful
            content (Adult, Suicide, Violent, Neutral), with a safety-first
            constraint of <strong>Recall ≥ 90%</strong> for the Suicide and Violent
            classes. I designed a <strong>two-stage cascaded bi-directional
            cross-attention architecture</strong> for progressive audio-video fusion
            on top of frozen VideoMAE + AST feature extractors, validated with
            5-fold stratified cross-validation, Wilcoxon + Bonferroni statistical
            tests, and ablation studies — shipped as a reproducible pipeline with
            Docker, ONNX, and TorchScript export.
            <br />
            <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
            <img src="https://img.shields.io/badge/Lightning-792EE5?style=for-the-badge&logo=lightning&logoColor=white" alt="PyTorch Lightning" />
            <img src="https://img.shields.io/badge/Transformers-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" alt="Transformers" />
            <img src="https://img.shields.io/badge/ONNX-005CED?style=for-the-badge&logo=onnx&logoColor=white" alt="ONNX" />
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Cloud & DevOps",
        description: (
          <>
            Architecting and operating production infrastructure on <strong>AWS</strong>{" "}
            (Lambda, S3, ECS, EC2, Step Functions, SQS, IAM, CloudWatch) with{" "}
            <strong>Docker</strong>, <strong>GitHub Actions</strong>, and full
            CI/CD — including the deployment and security setup for the Sparengine
            platform and Kirk.
            <br />
            <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
            <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" />
          </>
        ),
        images: [],
      },
      {
        title: "AI / ML Engineering",
        description: (
          <>
            Building <strong>multi-agent systems</strong> with <strong>LangGraph</strong>{" "}
            and <strong>LangChain</strong>, integrating <strong>Gemini</strong> and{" "}
            <strong>OpenAI</strong>, and training models with <strong>PyTorch</strong>{" "}
            and <strong>Transformers</strong> — applied in the Sparengine document
            intelligence platform and my AVCCT-HCD research.
            <br />
            <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangGraph" />
            <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
            <img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" />
            <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI" />
          </>
        ),
        images: [],
      },
      {
        title: "Full-Stack Web & Mobile",
        description: (
          <>
            Production apps with <strong>Next.js</strong>, <strong>React</strong>,{" "}
            <strong>React Native</strong>, <strong>Node.js / Express</strong>,{" "}
            <strong>FastAPI</strong>, and <strong>Spring Boot</strong>. Recent work:{" "}
            <a href="https://www.simpleemailsignature.com" target="_blank" rel="noopener noreferrer">Simple Email Signature</a>,{" "}
            <a href="https://photos-ventouxsummit.fr" target="_blank" rel="noopener noreferrer">Photos Ventoux</a>, and{" "}
            <a href="https://kirkreservations.lk" target="_blank" rel="noopener noreferrer">Kirk</a>.
            <br />
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
            <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
          </>
        ),
        images: [],
      },
      {
        title: "Databases & State",
        description: (
          <>
            Modelling and operating data with <strong>PostgreSQL</strong>,{" "}
            <strong>MySQL</strong>, <strong>MongoDB</strong>, <strong>Supabase</strong>,{" "}
            <strong>Redis</strong>, and ORMs (<strong>Prisma</strong>,{" "}
            <strong>Sequelize</strong>).
            <br />
            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
            <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
            <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
            <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
          </>
        ),
        images: [],
      },
      {
        title: "Languages",
        description: (
          <>
            <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Python</strong>, <strong>Java</strong>, <strong>Kotlin</strong>,{" "}
            <strong>Rust</strong>, <strong>C</strong>, <strong>PHP</strong>, and{" "}
            <strong>SQL</strong>.
            <br />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpeg",
      alt: "Picture of me attended salesforce conference 2023",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpeg",
      alt: "Lazarus 2.0 Ideathon Finalists @SLIIT",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpeg",
      alt: "Google I/O Extended Developers Conference Colombo 2023",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpeg",
      alt: "Lazarus 2.0 Ideathon Finals @SLIIT",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpeg",
      alt: "Picture of me attended salesforce conference 2023",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-06.jpeg",
      alt: "UWU Robot Battles 2.0: Death Race 2024 Finals - Team",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpeg",
      alt: "Our Robot 'rootQuarks' on action @ UWU Robot Battles 2.0: Death Race 2024",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpeg",
      alt: "Networked with a QA in salesforce conference 2023",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpeg",
      alt: "The Team of salesforce conference 2023",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpeg",
      alt: "MazeMaster - MazeSolving Robot Challenge - Runners Up",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpeg",
      alt: "MazeMaster - MazeSolving Robot Challenge - Team",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, kirk, services, about, blog, work, gallery };
