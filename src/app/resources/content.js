import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rajakone",
  lastName: "Christan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Freelance Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil", "Sinhala", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
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
    link: "christanthedev@gmail.com",
  },
  {
    name: "Fiverr",
    icon: "fiverr",
    link: "https://www.fiverr.com/s/zW6z7Nz",
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer</>,
  subline: (
    <>
      I'm Christan, a software developer with a passion for building reliable, scalable, and
      <br /> user friendly applications.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        a software developer with a passion for building reliable, scalable, and
        user-friendly applications. I enjoy solving real-world problems through
        clean code, thoughtful architecture, and modern development practices.
        From backend systems to interactive frontends, I thrive on learning new
        technologies and continuously improving as a developer.
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
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed <a href="http://simpleemailsignature.com" target="_blank" rel="noopener noreferrer">simpleemailsignature.com</a>, 
            a fully responsive web app that enables users to generate and customize professional email signatures with ease. 
            Built using <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, the platform supports dynamic template rendering, real-time previews, and export features — all optimized for performance and user experience.
          </>,
          <>
            Engineered <a href="https://photos-ventouxsummit.fr" target="_blank" rel="noopener noreferrer">photos-ventouxsummit.fr</a>, 
            an automated photo delivery platform for cyclists reaching the summit of Mont Ventoux. 
            Integrated with <strong>PrestaShop</strong> to manage user purchases and downloads, and used <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong> for the backend. 
            Combined timestamp and license plate logic to automate photo distribution, reducing manual effort by 90%.
          </>,
        ]
        ,
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Project Screenshots/Simple Mail Signature/Screenshot 2025-03-16 050701.png",
            alt: "http://simpleemailsignature.com",
            width: 16,
            height: 9,
          },
          {
            src: "/images/Project Screenshots/photos-ventouxsummit.fr/Screenshot 2025-04-04 230908.png",
            alt: "https://photos-ventouxsummit.fr",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Uva Wellassa University",
        description: <>Reading Computer Science and Technology</>,
      },
      
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React & Next.js",
        description: (
          <>
            Built modern SPAs and server-rendered apps using <strong>React</strong> and <strong>Next.js</strong>. 
            Used in: 
            <a href="https://www.simpleemailsignature.com" target="_blank" rel="noopener noreferrer"> Simple Email Signature</a>,{" "}
            <a href="https://github.com/christancone/project1" target="_blank" rel="noopener noreferrer">TinyToes</a>,{" "}
            <a href="https://github.com/christancone/AuctionSite" target="_blank" rel="noopener noreferrer">BestBid</a>,{" "}
            <a href="https://github.com/christancone/domainTest" target="_blank" rel="noopener noreferrer">DomainLK</a>.
            <br />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react" />
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js" />
          </>
        ),
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>
            Used <strong>Tailwind CSS</strong> to build responsive, mobile-first UIs quickly. 
            Applied in: 
            <a href="https://www.simpleemailsignature.com" target="_blank" rel="noopener noreferrer"> Simple Email Signature</a>,{" "}
            <a href="https://github.com/christancone/project1" target="_blank" rel="noopener noreferrer">TinyToes</a>,{" "}
            <a href="https://github.com/christancone/AuctionSite" target="_blank" rel="noopener noreferrer">BestBid</a>,{" "}
            <a href="https://github.com/christancone/domainTest" target="_blank" rel="noopener noreferrer">DomainLK</a>.
            <br />
            <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css" />
          </>
        ),
        images: [],
      },
      {
        title: "Supabase",
        description: (
          <>
            Integrated <strong>Supabase</strong> into 
            <a href="https://www.simpleemailsignature.com" target="_blank" rel="noopener noreferrer"> Simple Email Signature </a> 
            for real-time user data storage and profile image uploads.
            <br />
            <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase" />
          </>
        ),
        images: [],
      },
      {
        title: "PrestaShop Webservice API",
        description: (
          <>
            Used the <strong>PrestaShop API</strong> to authenticate users and manage cart/customer data in 
            <a href="https://photos-ventouxsummit.fr" target="_blank" rel="noopener noreferrer"> Ventoux Photo Delivery Platform</a>.
            <br />
            <img src="https://img.shields.io/badge/PrestaShop-DF0067?style=for-the-badge&logo=prestashop" />
            <img src="https://img.shields.io/badge/API-005571?style=for-the-badge&logo=api" />
          </>
        ),
        images: [],
      },
      {
        title: "Django & PostgreSQL",
        description: (
          <>
            Developed full-stack web apps with <strong>Django</strong> and <strong>PostgreSQL</strong> in 
            <a href="https://github.com/christancone/AuctionSite" target="_blank" rel="noopener noreferrer"> BestBid</a>.
            <br />
            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django" />
            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql" />
          </>
        ),
        images: [],
      },
      {
        title: "Java, JSP & MySQL",
        description: (
          <>
            Built backend and UI logic using <strong>Java</strong>, <strong>JSP</strong>, and <strong>MySQL</strong> in 
            <a href="https://github.com/christancone/EpicReads" target="_blank" rel="noopener noreferrer"> EpicReads </a> 
            and <a href="https://github.com/christancone/Renew" target="_blank" rel="noopener noreferrer"> Renew</a>.
            <br />
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java" />
            <img src="https://img.shields.io/badge/JSP-FF1709?style=for-the-badge" />
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql" />
          </>
        ),
        images: [],
      },
      {
        title: "HTML, CSS & JavaScript",
        description: (
          <>
            Core technologies for UI development in 
            <a href="https://github.com/christancone/EpicReads" target="_blank" rel="noopener noreferrer"> EpicReads </a>,{" "}
            <a href="https://github.com/christancone/Renew" target="_blank" rel="noopener noreferrer"> Renew</a>, and{" "}
            <a href="https://github.com/christancone/domainTest" target="_blank" rel="noopener noreferrer">DomainLK</a>.
            <br />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript" />
          </>
        ),
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>
            Designed wireframes and UX flows in <strong>Figma</strong> during planning of 
            <a href="https://github.com/christancone/domainTest" target="_blank" rel="noopener noreferrer"> DomainLK </a> 
            and <a href="https://www.simpleemailsignature.com" target="_blank" rel="noopener noreferrer"> Simple Email Signature</a>.
            <br />
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma" />
          </>
        ),
        images: [],
      },
    ],
  }
  
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
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
