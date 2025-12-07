import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";
import { Particles } from "@/components/ui/shadcn-io/particles";
import {
  WorkExperience,
  type ExperienceItemType,
} from "@/components/work-experience";
import { headers } from "next/headers";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "pjgjm40j3bcxb1sw4v2rttty",
    companyName: "Checktudo",
    companyLogo:
      "https://46g41g612x.ufs.sh/f/nRNuYSh7ziMI9GFWChjlFOYzd29bELsBputcDwUQS3f6HMGy",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Senior Software Engineer (Frontend)",
        employmentPeriod: "07.2025 — present",
        employmentType: "Part-time",
        icon: "code",
        description:
          "- Develop and maintain the Checktudo systems with Next.js, Tailwind CSS, and TypeScript.",
        skills: [
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "React",
          "Vercel",
          "PostgreSQL",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "m1i2qbfyht93ycga6hr6yre8",
    companyName: "Foozi",
    companyLogo:
      "https://46g41g612x.ufs.sh/f/nRNuYSh7ziMIvaAghKmJrqf0Su95PjMXek1pKbmR3CGAZncO",
    positions: [
      {
        id: "9a90cac3-a507-4e8a-94e1-876fdd22777b",
        title: "Staff Software Engineer",
        employmentPeriod: "12.2024 — present",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Develop and maintain the Dashboard used by the Foozi team and clients.",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Vercel",
          "Project Management",
          "Research",
          "PostgreSQL",
          "Docker",
          "Drizzle",
          "Zod",
          "React Query",
          "React Hook Form",
          "Lucide React",
          "NestJS",
          "PostHog",
          "Redis",
          "Shadcn UI",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "vanlb95ohggmq2jk678in06y",
    companyName: "Growth Venture",
    companyLogo:
      "https://46g41g612x.ufs.sh/f/nRNuYSh7ziMI3lleSj46F5VlIkhxOeH0GNTYLAMXaitSzn8f",
    positions: [
      {
        id: "81da36fe-21f7-440a-b593-8029310ca2c7",
        title: "Senior Software Engineer",
        employmentPeriod: "12.2022 — 12.2024",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Develop and maintain the Growth Venture systems with React, TypeScript, Tailwind CSS, and Next.js.",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Vercel",
          "PostgreSQL",
          "Docker",
          "Zod",
          "React Query",
          "React Hook Form",
          "Font Awesome",
          "Redis",
          "Shadcn UI",
          "Medusa.js",
          "Stripe",
          "Strapi",
          "AWS S3",
          "AWS IVS",
        ],
      },
      {
        id: "9d7a249f-4857-44a9-a5b4-a34f4e085bb9",
        title: "Mid-Level Software Engineer",
        employmentPeriod: "07.2022 — 12.2022",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Develop and maintain the Growth Venture systems with React, TypeScript, Tailwind CSS, and Next.js.",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Vercel",
          "PostgreSQL",
          "Docker",
          "Zod",
          "React Query",
          "React Hook Form",
          "Font Awesome",
          "Strapi",
          "AWS S3",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "tlfmghp3c4apnyue7kemlo6s",
    companyName: "Coopers Digital Production",
    companyLogo:
      "https://46g41g612x.ufs.sh/f/nRNuYSh7ziMIHrevdEs89QPRFU6mvnscaLijqr4SD3lbyXoM",
    positions: [
      {
        id: "9d7a249f-4857-44a9-a5b4-a34f4e085bb9",
        title: "Mid-Level Software Engineer",
        employmentPeriod: "07.2022 — 12.2022",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Develop and maintain the Coopers Digital Production client's websites with WordPress, PHP, and MySQL.",
        skills: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Vercel",
          "Zod",
          "React Query",
          "React Hook Form",
          "WordPress",
          "Headless WordPress",
          "PHP",
          "MySQL",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];

const linkedins = {
  pt: "https://www.linkedin.com/in/ylyra/",
  default: "https://www.linkedin.com/in/ylyra/?locale=en_US",
};

export default async function Page() {
  const h = await headers();
  const lang = (h.get("accept-language")?.split(",")[0] || "en")
    .toLocaleLowerCase()
    .split("-")[0];
  const linkedin =
    linkedins[lang as keyof typeof linkedins] || linkedins.default;

  return (
    <>
      <Particles
        className="-z-1 absolute inset-0"
        color="#ffffff"
        ease={80}
        quantity={260}
        refresh
      />
      <main className="flex min-h-dvh flex-col items-center justify-center p-4">
        <AppleHelloEnglishEffect className="mb-3 h-16" speed={1.1} />

        <p className="mb-8 text-sm">
          Contact me on{" "}
          <a
            className="inline-flex items-center gap-1 text-white/60 underline-offset-3 transition-colors duration-200 ease-linear hover:text-primary hover:underline"
            href={linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>

        <section className="w-full max-w-lg">
          <h2 className="mb-1 text-center font-bold text-muted-foreground text-xl">
            Work Experience
          </h2>

          <WorkExperience
            className="w-full rounded-lg border"
            experiences={WORK_EXPERIENCE}
          />
        </section>
      </main>
    </>
  );
}
