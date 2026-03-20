"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionTransition } from "@/lib/motion";

export default function Home() {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1BAu7dO97H_XXq_l5_ga_Th6bSkpE83SJ";

  const [dimmed, setDimmed] = useState(false);
  const m = useMotionTransition();

  useEffect(() => {
    const timer = window.setTimeout(() => setDimmed(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          dimmed ? "opacity-70" : "opacity-100"
        }`}
        style={{ filter: "blur(5px)" }}
        aria-hidden
      />

      <main className="relative mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={m({ duration: 0.5 })}
          className="text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Welcome to my portfolio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={m({ duration: 0.5, delay: 0.15 })}
          className="mt-8"
        >
          <Image
            src="/assets/1.jpg"
            alt="Ramil L. Kaharian"
            width={200}
            height={200}
            priority
            className="mx-auto rounded-full border-4 border-indigo-300/80 shadow-lg shadow-indigo-900/40"
            sizes="200px"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={m({ duration: 0.5, delay: 0.25 })}
          className="mt-8 text-2xl font-semibold text-indigo-100 md:text-3xl"
        >
          Ramil L. Kaharian
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={m({ duration: 0.5, delay: 0.35 })}
          className="mt-2 text-lg text-indigo-100/90 md:text-xl"
        >
          Web and Android game developer
        </motion.p>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={m({ duration: 0.5, delay: 0.45 })}
          className="mt-10 rounded-2xl border border-white/10 bg-brand-surface/60 p-6 text-left shadow-glow backdrop-blur-md md:p-8"
        >
          <blockquote className="italic text-base leading-relaxed text-indigo-50 md:text-lg">
            &ldquo;Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm font-medium text-indigo-200">
            — Martin Fowler
          </figcaption>
        </motion.figure>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={m({ duration: 0.5, delay: 0.55 })}
          className="mt-10 text-indigo-100/85"
        >
          Download my latest resume below. Thank you and God bless!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={m({ duration: 0.5, delay: 0.65 })}
          className="mt-6"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            My resume
          </a>
        </motion.div>
      </main>
    </div>
  );
}
