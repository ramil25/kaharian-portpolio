import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects by Ramil L. Kaharian — web applications and game development work.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-indigo-100/85">
          A few highlights — swap in your own demos, repos, and screenshots in{" "}
          <code className="rounded bg-black/20 px-1.5 py-0.5 font-mono text-sm">
            src/data/projects.ts
          </code>
          .
        </p>
      </header>

      <ul className="grid list-none gap-8 p-0 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/50 shadow-glow backdrop-blur-sm"
          >
            {project.imageSrc ? (
              <div className="relative aspect-video w-full bg-black/20">
                <Image
                  src={project.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div
                className="flex aspect-video items-center justify-center bg-gradient-to-br from-indigo-900/80 to-violet-900/60 text-4xl font-bold text-white/30"
                aria-hidden
              >
                {project.title.slice(0, 1)}
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-indigo-100/80">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-100"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.demoUrl ? (
                  <Link
                    href={project.demoUrl}
                    className="inline-flex min-h-10 items-center justify-center rounded-full bg-indigo-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </Link>
                ) : null}
                {project.repoUrl ? (
                  <Link
                    href={project.repoUrl}
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </Link>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
