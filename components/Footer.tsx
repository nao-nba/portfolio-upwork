import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="border-t bg-slate-50">
      <p className="py-4 text-center text-slate-400 text-xs">
        © {siteConfig.copyrightYear} {siteConfig.author}. Built with Next.js
      </p>
    </footer>
  );
};
