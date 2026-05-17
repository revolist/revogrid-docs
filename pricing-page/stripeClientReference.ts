const STRIPE_CLIENT_REFERENCE_PARAM = 'client_reference_id';
const STRIPE_CLIENT_REFERENCE_MAX_LENGTH = 200;

const formatStripeClientReferenceId = (clientReferenceId: string) => clientReferenceId
  .replace(/[^a-zA-Z0-9_-]/g, '_')
  .slice(0, STRIPE_CLIENT_REFERENCE_MAX_LENGTH);

const getGtagClientIdFromCookie = () => {
  if (typeof document === 'undefined') {
    return '';
  }

  const gaCookie = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith('_ga='));

  if (!gaCookie) {
    return '';
  }

  const [, , clientIdPart1, clientIdPart2] = decodeURIComponent(gaCookie.slice('_ga='.length)).split('.');

  return clientIdPart1 && clientIdPart2 ? `${clientIdPart1}.${clientIdPart2}` : '';
};

export const stripeLinkWithClientReferenceId = (link: string, clientReferenceId = '') => {
  if (!clientReferenceId) {
    return link;
  }

  const url = new URL(link);
  url.searchParams.set(STRIPE_CLIENT_REFERENCE_PARAM, formatStripeClientReferenceId(clientReferenceId));
  return url.toString();
};

export const handleStripeClientReferenceClick = async (event: MouseEvent) => {
  const link = event.currentTarget as HTMLAnchorElement;

  event.preventDefault();

  const clientReferenceId = getGtagClientIdFromCookie();
  window.location.href = stripeLinkWithClientReferenceId(link.href, clientReferenceId);
};
