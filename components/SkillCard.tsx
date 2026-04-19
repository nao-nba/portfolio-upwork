import { type SkillCategory } from "@/data/content";

type Props = {
  category: SkillCategory;
};

const variantStyles = {
  core: {
    card: "p-5 rounded-xl bg-slate-50 border border-slate-100",
    heading: "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3",
    skill: "text-sm bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg shadow-sm",
  },
  focusing: {
    card: "p-5 rounded-xl border border-amber-100 bg-amber-50/50",
    heading: "text-sm font-semibold text-slate-600 mb-3",
    skill: "text-sm border border-amber-200 text-amber-800 bg-white px-3 py-1 rounded-lg",
  },
} as const;

export const SkillCard = ({ category }: Props) => {
  const styles = variantStyles[category.type];
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
