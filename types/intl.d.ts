import messages from '../messages/en.json';

type Messages = typeof messages;

declare global {
  // Augment next-intl's IntlMessages so that t() is typed against en.json
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
