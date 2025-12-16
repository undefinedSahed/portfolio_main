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
    title: "Royal House Check - Security Service",
    description:
      "House Security Service provider's website containing services, booking for service, add-on, user dashboard and admin dashboard",
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
    ],
    liveLink: "https://royalhousecheck.com",
    githubLink: "https://github.com/royalhousecheck",
  },
  {
    id: 2,
    title: "Royal House Check - Security Service",
    description:
      "House Security Service provider's website containing services, booking for service, add-on, user dashboard and admin dashboard",
    thumbnail: "/projects/royalhouse.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://royalhousecheck.com",
    githubLink: "https://github.com/royalhousecheck",
  },
  {
    id: 3,
    title: "Royal House Check - Security Service",
    description:
      "House Security Service provider's website containing services, booking for service, add-on, user dashboard and admin dashboard",
    thumbnail: "/projects/royalhouse.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://royalhousecheck.com",
    githubLink: "https://github.com/royalhousecheck",
  },
  {
    id: 4,
    title: "Royal House Check - Security Service",
    description:
      "House Security Service provider's website containing services, booking for service, add-on, user dashboard and admin dashboard",
    thumbnail: "/projects/royalhouse.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://royalhousecheck.com",
    githubLink: "https://github.com/royalhousecheck",
  },
  {
    id: 5,
    title: "Royal House Check - Security Service",
    description:
      "To amplify the voices of millions of jobseekers globally and enable everyone to pitch themselves into their desired role",
    thumbnail: "/projects/royalhouse.png",
    features: [
      "User Authentication",
      "Payment Integration",
      "User Dashboard",
      "Admin Dashboard",
      "Role Based Access Control",
      "Schedule Booking for House Visit",
    ],
    techStacks: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://evpitch.com",
    githubLink: "https://github.com/evpitch",
  },
];
