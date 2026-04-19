import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// [locale] の中身をそのまま表示する
export default function RootLayout({ children }: Props) {
  return children;
}