import type { Metadata } from "next";
import ProjectStudy from "../../components/ProjectStudy";
import { projectStudies } from "../../data/project-studies";

const study = projectStudies["dff"];

export const metadata: Metadata = {
  title: `${study.title} | Henry Yoon`,
  description: study.summary,
};

export default function Page() {
  return <ProjectStudy study={study} />;
}
