export interface Service {
  id: number;
  title: string;
  description: string;
  includes: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "End-to-End Product Development",
    description:
      "From idea to production-ready product — I lead design, development, deployment, and scaling.",
    includes: [
      "Requirement analysis & technical planning",
      "UI/UX collaboration & validation",
      "Frontend & backend development",
      "DevOps, deployment, and monitoring",
      "Post-launch support & optimization",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/web.png",
  },
  {
    id: 2,
    title: "Technical Leadership & Team Management",
    description:
      "I lead cross-functional teams to deliver high-quality software aligned with business goals.",
    includes: [
      "Sprint planning & task breakdown",
      "Code reviews & architecture decisions",
      "Mentoring developers",
      "Stakeholder & client communication",
      "Ensuring delivery quality & timelines",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/leadership.png",
  },
  {
    id: 3,
    title: "Backend & API Development",
    description:
      "Scalable, secure, and high-performance backend systems built for long-term growth.",
    includes: [
      "REST & GraphQL API development",
      "Authentication & authorization",
      "Database design & optimization",
      "Performance & scalability planning",
      "Third-party service integrations",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/database.png",
  },
  {
    id: 4,
    title: "Frontend Engineering",
    description:
      "User-focused, responsive, and high-performance interfaces that deliver great experiences.",
    includes: [
      "Modern frontend frameworks",
      "Responsive & accessible UI",
      "UX-driven implementation",
      "State management & API integration",
      "Performance optimization",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/source-code.png",
  },
  {
    id: 5,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Reliable infrastructure and automation to keep your product fast, secure, and always online.",
    includes: [
      "CI/CD pipeline setup",
      "Cloud infrastructure (AWS, GCP, Azure)",
      "Docker & containerization",
      "Monitoring, logging & alerting",
      "Security & scalability best practices",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/cloud.png",
  },
  {
    id: 6,
    title: "MVP Development for Startups",
    description:
      "Rapid MVP development to validate ideas, attract users, and secure investor interest.",
    includes: [
      "MVP planning & scope definition",
      "Rapid development cycles",
      "Cost-efficient architecture",
      "Launch-ready deployment",
      "Iterative improvements post-launch",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/rocket.png",
  },
  {
    id: 7,
    title: "System Audit & Performance Optimization",
    description:
      "In-depth review and optimization of existing systems to improve stability and performance.",
    includes: [
      "Codebase & architecture audit",
      "Performance bottleneck analysis",
      "Security assessment",
      "Scalability recommendations",
      "Actionable improvement roadmap",
    ],
    icon: "https://img.icons8.com/ios-filled/50/000000/inspection.png",
  },
];
