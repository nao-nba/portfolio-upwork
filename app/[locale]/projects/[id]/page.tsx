import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { projects, type LocaleKey } from "@/data/content";
import { type Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { Tag } from "@/components/ui/Tag";
import { GitHubButton } from "@/components/ui/GitHubButton";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  const tProjects = await getTranslations({ locale, namespace: "Projects" });
  return {
    title: project.title,
    description: tProjects(id as keyof IntlMessages["Projects"]),
  };
}

function toEmbedUrl(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default async function ProjectPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const localeKey = locale as LocaleKey;

  const tCommon = await getTranslations("Common");
  const tProjects = await getTranslations("Projects");
  const tDescriptions = await getTranslations("ProjectDescriptions");

  const summary = tProjects(id as keyof IntlMessages["Projects"]);
  const description = tDescriptions(id as keyof IntlMessages["ProjectDescriptions"]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 transition mb-10"
      >
        {tCommon("backToHome")}
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tighter mb-4">
          {project.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Summary */}
        <p className="text-slate-500 text-sm mb-6">{summary}</p>

        {/* GitHub link */}
        {project.github && (
          <GitHubButton href={project.github} label={tCommon("viewOnGitHub")} />
        )}
      </div>

      {/* Video embed */}
      {project.videoUrl && (
        <div className="mb-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100">
            <iframe
              src={toEmbedUrl(project.videoUrl)}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}

      <hr className="border-slate-100 mb-10" />

      {/* Sections (structured content per project) */}
      {project.sections && project.sections.length > 0 ? (
        <div className="space-y-10">
          {project.sections.map((section) => (
            <section key={section.key} aria-labelledby={`section-${section.key}`}>
              <h2
                id={`section-${section.key}`}
                className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3 mb-3"
              >
                {section.heading[localeKey]}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {section.content[localeKey]}
              </p>
            </section>
          ))}
        </div>
      ) : (
        description && (
          <p className="text-slate-700 leading-relaxed">{description}</p>
        )
      )}

    </div>
  );
}
