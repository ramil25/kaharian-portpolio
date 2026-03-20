import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";

const CONTACT_EMAIL = "ramil@zkript.dev";
const CONTACT_PHONE = "+639760624830";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ramil L. Kaharian for web or game development work.",
};

export default function ContactPage() {
  const mailto = `mailto:${CONTACT_EMAIL}`;
  const tel = `tel:${CONTACT_PHONE}`;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        Contact
      </h1>
      <p className="mt-4 text-lg text-indigo-100/85">
        Prefer email? Reach out directly or open your mail app with one tap.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href={mailto}
          className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-indigo-500 px-8 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          Email me
        </Link>
        <CopyEmailButton email={CONTACT_EMAIL} />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-brand-surface/40 p-6 shadow-glow backdrop-blur-sm">
        <p className="text-sm font-medium text-indigo-200">Or call / text</p>
        <Link
          href={tel}
          className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {CONTACT_PHONE}
        </Link>
      </div>
    </div>
  );
}
