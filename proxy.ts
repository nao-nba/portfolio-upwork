import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // すべてのパスを対象にしつつ、静的ファイルを除外
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(ja|en)/:path*']
};