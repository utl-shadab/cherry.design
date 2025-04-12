// pages/projects/[slug].tsx
import { useParams } from "next/navigation";
import WorkDetails from "./WorkDetails";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/WorkData";

export default function ProjectPage() {
  const { slug } = useParams() as { slug: string };
  const project = projects.find((p) => p.link === `/projects/${slug}`);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <>
      <Navbar />
      <WorkDetails project={project} />
      <ContactSection />
    </>
  );
}