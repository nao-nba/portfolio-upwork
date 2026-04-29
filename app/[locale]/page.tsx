import { getTranslations, setRequestLocale } from "next-intl/server";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { siteConfig } from "@/config/site";
import { projects, skillCategories } from "@/data/content";
import { type Locale } from "@/i18n/routing";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations("Home");
  const tProjects = await getTranslations("Projects");
  const tProjectTypes = await getTranslations("ProjectTypes");

  const coreSkills = skillCategories.filter((s) => s.type === "core");
  const focusingSkills = skillCategories.filter((s) => s.type === "focusing");

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

      {/* Hero */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          <h1 className="text-5xl font-extrabold tracking-tighter">
            {t("title")}
          </h1>
          <div className="flex gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="hover:text-blue-600 transition"
            >
              <GithubIcon size={28} />
            </a>
          </div>
        </div>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          {t("projectsHeading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              summary={tProjects(project.id as keyof IntlMessages["Projects"])}
              typeLabel={tProjectTypes(project.projectType)}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          {t("skillsHeading")}
        </h2>

        {/* Core skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {coreSkills.map((cat) => (
            <SkillCard key={cat.category} category={cat} />
          ))}
        </div>

        {/* Focusing skills */}
        <div>
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
            {t("focusingLabel")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusingSkills.map((cat) => (
              <SkillCard key={cat.category} category={cat} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
