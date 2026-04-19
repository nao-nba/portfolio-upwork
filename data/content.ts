// -------------------------------------------------------
// Project
// -------------------------------------------------------

export type ProjectType = 'personal' | 'hackathon';

/** messages ではなく content.ts で多言語テキストを管理するための型 */
export type LocaleKey = 'en' | 'ja';
export type LocalizedText = Record<LocaleKey, string>;

export type ProjectSection = {
  key: string;
  heading: LocalizedText;
  content: LocalizedText;
};

export type Project = {
  id: string;
  title: string;
  tags: readonly string[];
  github?: string;
  videoUrl?: string;
  projectType: ProjectType;
  sections?: readonly ProjectSection[];
};

export const projects: Project[] = [
  {
    id: 'geo-hedger',
    title: 'geo-hedger',
    tags: ['Go', 'CLI'],
    github: 'https://github.com/nao-nba/geo-hedger/tree/main',
    projectType: 'personal',
  },
  {
    id: 'menkatsu-dojo',
    title: 'Menkatsu Dojo',
    tags: ['React', 'FastAPI', 'AI', 'AWS', 'Terraform'],
    projectType: 'hackathon',
    github: 'https://github.com/Winter-Hackathon-2026-A-Team/menkatudojo-app',
    videoUrl: 'https://youtu.be/TrQIpkEiUig',
    sections: [
      {
        key: 'overview',
        heading: {
          en: 'App Overview',
          ja: 'アプリの概要',
        },
        content: {
          en: 'An AI-powered interview practice application that provides feedback not only on the content of answers, but also on two dimensions: "logical consistency" and "emotional expression (passion)", aiming to create a practice environment as close to the real thing as possible.',
          ja: 'AIを活用した面接練習アプリケーション。単なる回答内容の添削だけでなく、「論理的整合性」と「感情の表出（情熱）」の両面からフィードバックを行い、本番に近い練習環境を目指しました。',
        },
      },
      {
        key: 'role',
        heading: {
          en: 'Role & Focus',
          ja: '担当と注力点',
        },
        content: {
          en: 'Responsible for frontend development. Implemented the MVP as a single Q&A flow. Paid particular attention to error handling and loading state management to ensure a smooth user experience even in an unstable backend environment.',
          ja: 'フロントエンド開発を担当。MVPとして1問1答のフローを実装。特に不安定なバックエンド環境下でもユーザー体験を損なわないよう、エラーハンドリングとローディング状態の管理に注視しました。',
        },
      },
      {
        key: 'lessons',
        heading: {
          en: 'Technical Lessons',
          ja: '技術的教訓',
        },
        content: {
          en: 'Experienced delays in backend and infrastructure integration during team development. This reinforced the critical importance of strict API definition (schema-first design) and establishing CI/CD pipelines early in the development process.',
          ja: 'チーム開発におけるバックエンド・インフラ統合の遅延を経験し、開発初期における「厳格なAPI定義（スキーマファースト）」と「早期のCI/CD構築」がいかに重要かを痛感しました。',
        },
      },
      {
        key: 'future',
        heading: {
          en: 'Future Outlook',
          ja: '今後の展望',
        },
        content: {
          en: 'Implementation of continuous multi-turn dialogue, and analysis of non-verbal communication through Gaze Detection on the frontend.',
          ja: '連続した対話（マルチターン）の実装、およびフロントエンドでの視線検知（Gaze Detection）による非言語コミュニケーションの解析。',
        },
      },
    ],
  },
];

// -------------------------------------------------------
// Skills
// -------------------------------------------------------

export type SkillType = 'core' | 'focusing';

export type SkillCategory = {
  type: SkillType;
  category: string;
  skills: readonly string[];
};

export const skillCategories: SkillCategory[] = [
  {
    type: 'core',
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    type: 'core',
    category: 'Backend',
    skills: ['Go', 'Python (FastAPI, Django)'],
  },
  {
    type: 'core',
    category: 'Infra',
    skills: ['AWS', 'Terraform', 'Docker', 'Linux'],
  },
  {
    type: 'focusing',
    category: 'Cybersecurity & Logic',
    skills: ['TryHackMe', 'Go Internal', 'System Design'],
  },
];
