import {getRequestConfig} from 'next-intl/server';
import {routing, type Locale} from './routing';

function isLocale(value: string): value is Locale {
  return (routing.locales as ReadonlyArray<string>).includes(value);
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale: Locale =
    requested && isLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});