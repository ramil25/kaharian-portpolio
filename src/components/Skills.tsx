"use client";

import { motion } from "framer-motion";
import { useMotionTransition } from "@/lib/motion";

interface Skill {
  name: string;
  level: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Laravel/PHP", level: "Intermediate" },
  { name: "Kotlin", level: "Intermediate" },
  { name: "Game Dev - ActionScript", level: "Intermediate" },
  { name: "Nest.js / Express.js", level: "Intermediate" },
];

function getProgressWidth(level: string) {
  switch (level) {
    case "Advanced":
      return "100%";
    case "Intermediate":
      return "70%";
    case "Beginner":
      return "40%";
    default:
      return "0";
  }
}

export default function SkillsPage() {
  const m = useMotionTransition();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={m({ duration: 0.45 })}
        className="mb-12 rounded-2xl border border-white/10 bg-brand-surface/50 p-8 text-center shadow-glow backdrop-blur-sm md:p-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Skills
        </h1>
        <div
          className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-300"
          aria-hidden
        />
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-indigo-100/85">
          Technical strengths and how comfortable I am with each stack.
        </p>
      </motion.header>

      <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={m({ duration: 0.4, delay: index * 0.06 })}
            className="rounded-2xl border border-white/10 bg-brand-surface/40 p-6 shadow-md backdrop-blur-sm transition-shadow hover:border-indigo-400/30 hover:shadow-glow"
          >
            <h2 className="text-lg font-semibold text-white">{skill.name}</h2>
            <p className="mt-1 text-sm text-indigo-100/75">
              Level: {skill.level}
            </p>
            <div
              className="mt-4 h-3 w-full overflow-hidden rounded-full bg-black/25"
              role="presentation"
            >
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  skill.level === "Advanced"
                    ? "bg-emerald-400"
                    : skill.level === "Intermediate"
                      ? "bg-amber-400"
                      : "bg-rose-400"
                }`}
                style={{ width: getProgressWidth(skill.level) }}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
