import type { Metadata } from "next";
import SkillsPage from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and proficiency levels for Ramil L. Kaharian — web and game development.",
};

export default function SkillsRoutePage() {
  return <SkillsPage />;
}
