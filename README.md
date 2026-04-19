# Naoki Ishiguro — Portfolio

Personal portfolio site built with Next.js 16, showcasing projects and skills with full English/Japanese i18n support.

**Live:** [https://portfolio-upwork.vercel.app](https://portfolio-upwork.vercel.app) <!-- update when deployed -->

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| i18n | next-intl 4 |
| Icons | Lucide React |
| Font | Geist (next/font) |

---

## Features

- **Bilingual (EN / JA)** — Full i18n via `next-intl`. Language is embedded in the URL (`/en`, `/ja`). The locale switcher preserves the current path on switch.
- **Static Site Generation** — All pages pre-rendered at build time via `generateStaticParams`. Zero server-side runtime required.
- **Project detail pages** — Dynamic route `/[locale]/projects/[id]` with per-project sections, YouTube embed, and GitHub links.
- **Accessible** — ARIA labels on all interactive elements, `aria-current` on active locale, semantic landmarks.
- **SEO** — Per-page `generateMetadata` with locale-aware titles and descriptions.

---

## Project Structure

```
app/
├─ layout.tsx                  # Pass-through root layout (Next.js requirement)
└─ [locale]/
   ├─ layout.tsx               # Locale-aware root: <html lang>, fonts, NextIntlClientProvider
   ├─ page.tsx                 # Home — hero, project cards, skill cards
   └─ projects/[id]/
      └─ page.tsx              # Project detail — video, sections, GitHub link

components/
├─ Header.tsx                  # Sticky header with locale switcher (Client Component)
├─ Footer.tsx
├─ ProjectCard.tsx
├─ SkillCard.tsx
├─ icons/GithubIcon.tsx
└─ ui/
   ├─ Tag.tsx                  # Reusable tech tag pill
   └─ GitHubButton.tsx         # Reusable GitHub CTA button

data/
└─ content.ts                  # All project & skill data with bilingual text (LocalizedText type)

config/
└─ site.ts                     # Author name, email, GitHub URL, copyright year

i18n/
├─ routing.ts                  # Locale list, navigation helpers (defineRouting)
└─ request.ts                  # getRequestConfig — loads messages per locale

messages/
├─ en.json
└─ ja.json

types/
└─ intl.d.ts                   # Augments IntlMessages from en.json for type-safe t() calls
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root `/` redirects to `/en` automatically via the next-intl middleware (`proxy.ts`).

```bash
npm run build   # static export
npm run start   # serve production build
npm run lint
```

---

## i18n Notes

- Locale is determined from the URL segment: `/en/...` or `/ja/...`.
- Default locale is `en`. Unknown locales return 404 (guarded in `[locale]/layout.tsx`).
- Short UI strings (headings, button labels) live in `messages/*.json`.
- Rich project content (section headings + body text) lives directly in `data/content.ts` as `LocalizedText` (`Record<'en' | 'ja', string>`), keeping all project data in one place.
- To add a new locale: update `routing.ts` → add a `messages/xx.json` → done.

---

## Adding a New Project

1. Add an entry to `projects` array in `data/content.ts` (fill `id`, `title`, `tags`, `projectType`, optionally `github`, `videoUrl`, `sections`).
2. Add a summary line to `messages/en.json` and `messages/ja.json` under `"Projects"`.
3. `generateStaticParams` picks up the new `id` automatically — no routing changes needed.

---

*Built by Naoki Ishiguro · 2026*

---

# Naoki Ishiguro — ポートフォリオ

Next.js 16 で構築した個人ポートフォリオサイト。英語・日本語の多言語対応、SSG による完全静的生成を実装しています。

---

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フレームワーク | Next.js 16（App Router、SSG） |
| 言語 | TypeScript 5 |
| スタイリング | Tailwind CSS 4 |
| 多言語対応 | next-intl 4 |
| アイコン | Lucide React |
| フォント | Geist（next/font） |

---

## 主な特徴

- **英語・日本語対応** — `next-intl` による完全 i18n。言語は URL に埋め込まれ（`/en`、`/ja`）、言語切り替え時に現在のパスを保持します。
- **静的サイト生成（SSG）** — `generateStaticParams` によりビルド時に全ページを事前生成。サーバーランタイム不要。
- **プロジェクト詳細ページ** — 動的ルーティング `/[locale]/projects/[id]` で、セクション構成・YouTube 埋め込み・GitHub リンクを表示。
- **アクセシビリティ** — インタラクティブ要素への ARIA ラベル付与、アクティブロケールへの `aria-current`、セマンティックなランドマーク構造。
- **SEO** — `generateMetadata` によるページ別・ロケール別のタイトル・説明文を設定。

---

## ローカル起動

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) にアクセスすると、next-intl ミドルウェア（`proxy.ts`）により `/en` へ自動リダイレクトされます。

---

## i18n の設計方針

- ロケールは URL セグメント（`/en/...` または `/ja/...`）で決定。
- デフォルトは `en`。未定義のロケールは `[locale]/layout.tsx` のガードで 404 を返す。
- ボタンラベル・見出しなど短い文言 → `messages/*.json` で管理。
- プロジェクトの本文・セクション内容など長いテキスト → `data/content.ts` の `LocalizedText`（`Record<'en' | 'ja', string>`）で管理し、データを一箇所に集約。
- **ロケール追加手順:** `routing.ts` を更新 → `messages/xx.json` を追加 → 完了。

---

## プロジェクトの追加方法

1. `data/content.ts` の `projects` 配列にエントリを追加（`id`、`title`、`tags`、`projectType` は必須。`github`、`videoUrl`、`sections` は任意）。
2. `messages/en.json` と `messages/ja.json` の `"Projects"` キーに概要文を追加。
3. `generateStaticParams` が新しい `id` を自動的に検出するため、ルーティングの変更は不要。

---

*Built by Naoki Ishiguro · 2026*
