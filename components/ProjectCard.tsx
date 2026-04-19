import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { type Project } from "@/data/content";
import { Tag } from "@/components/ui/Tag";

type Props = {
  project: Project;
  summary: string;
  typeLabel: string;
};

export const ProjectCard = ({ project, summary, typeLabel }: Props) => (
  <Link
    href={`/projects/${project.id}`}
    className="group flex flex-col gap-3 p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            project.projectType === "hackathon"
              ? "bg-violet-50 text-violet-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {typeLabel}
        </span>
      </div>
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="text-slate-400 group-hover:text-blue-500 transition shrink-0 mt-1"
      />
    </div>
    <p className="text-sm text-slate-500 leading-relaxed">{summary}</p>
    <div className="flex flex-wrap gap-2 mt-auto pt-2">
      {project.tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>
  </Link>
);
