export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  features: string[];
  techStacks: string[];
  liveLink: string;
  githubLink: string;
}

export const Projects: Project[] = [
  {
    id: 1,
    title: "Graphodio - Digital Agency",
    description:
      "At Graphodio, we are a full-service creative agency driven by innovation, passion, and a commitment to delivering exceptional design solutions.",
    thumbnail: "/projects/graphodio.png",
    features: [
      "Aesthetic UI",
      "Responsive Design",
      "SEO Optimized",
      "Marketing Tools Integration",
      "Fast Loading Speed",
      "Deployed on Nginx Server",
    ],
    techStacks: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Swiper.js",
      "Marketing Tools",
      "Ubuntu",
      "Nginx",
    ],
    liveLink: "https://graphodio.com",
    githubLink:
      "https://github.com/undefinedSahed/graphodio_agency_frontend.git",
  },
  {
    id: 2,
    title: "Elevator Pitch - Job Portal",
    description:
      "Elevator Pitch is a comprehensive job portal inspired by LinkedIn, designed to connect job seekers with potential employers seamlessly. Our platform offers a user-friendly interface, advanced search capabilities, and personalized job recommendations to enhance the job hunting experience.",
    thumbnail: "/projects/evpitch.png",
    features: [
      "User Authentication",
      "Resume Builder",
      "Job Search & Filters",
      "Personalized Job Recommendations",
      "Company Profiles",
      "Application Tracking System",
    ],
    techStacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "Tanstack Query",
      "ShadCN UI",
      "Amazon S3",
    ],
    liveLink: "https://evpitch.com",
    githubLink: "https://github.com/FSDTeam-SAA/giveanddtake-frontend.git",
  },
  {
    id: 3,
    title: "Royal House Check - Security Service",
    description:
      "A House Security Service provider's website containing services, booking for service, add-on, user dashboard and admin dashboard.",
    thumbnail: "/projects/royalhouse.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "Shadcn UI",
      "Tanstack Query",
      "ShadCN UI",
    ],
    liveLink: "https://royalhousecheck.com",
    githubLink: "https://github.com/undefinedSahed/lharris-frontend.git",
  },
  {
    id: 4,
    title: "Olive Stocks - Stock Market Researching Platform",
    description:
      "Olive Stocks is a comprehensive stock market researching platform designed to empower investors with the tools and insights needed to make informed decisions in the dynamic world of stock trading.",
    thumbnail: "/projects/olivestocks.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "Live Stock Data",
      "Real Time Charts",
      "Watchlist & Alerts",
      "Portfolio Management",
    ],
    techStacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Recharts",
      "Websockets",
      "NextAuth",
      "ShadCN UI",
    ],
    liveLink: "https://olivestocks.com",
    githubLink: "https://github.com/undefinedSahed/stock_market.git",
  },
  {
    id: 5,
    title: "Instrufix - Instrument Repairing Business Reviews Platform",
    description:
      "Instrufix is a specialized platform dedicated to connecting users with top-rated instrument repairing businesses. Our mission is to provide a reliable and user-friendly space where musicians and instrument owners can find trusted repair services, read authentic reviews, and make informed decisions about their instrument maintenance needs.",
    thumbnail: "/projects/instrufix.png",
    features: [
      "User Authentication",
      "Business Listings",
      "Review & Rating System",
      "Service Listings for Businesses",
      "Advance Review Filtering Options",
      "Admin Dashboard",
      "Businness Dashboard",
    ],
    techStacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "NextAuth",
      "MongoDB",
      "Zod",
      "ShadCN UI",
    ],
    liveLink: "https://instrufix.com",
    githubLink: "https://github.com/undefinedSahed/rayb_23_frontend.git",
  },
  {
    id: 6,
    title: "Braga Experience - Photography & Videography Service Portfolio",
    description:
      "Braga Experience is a professional photography and videography service provider specializing in capturing life's most precious moments with creativity and expertise. Our portfolio showcases a diverse range of work, from stunning wedding photography to dynamic corporate videos, all tailored to meet the unique needs of our clients.",
    thumbnail: "/projects/braga.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "Framer Motion",
    ],
    liveLink: "https://bragaexperience.com",
    githubLink: "https://github.com/undefinedSahed/braga_experience.git",
  },
];
