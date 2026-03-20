import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Web and Android game developer portfolio — projects, skills, and contact information for Ramil L. Kaharian.",
};

export default function Page() {
  return <Home />;
}
