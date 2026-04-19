import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  label: string;
};

export const GitHubButton = ({ href, label }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${label} (opens in new tab)`}
    className="inline-flex items-center gap-1.5 text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
  >
    {label}
    <ArrowUpRight size={15} aria-hidden="true" />
  </a>
);
