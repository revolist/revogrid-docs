declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GTAG_MEASUREMENT_ID = 'G-894M8FYLZF';
const STRIPE_CLIENT_REFERENCE_PARAM = 'client_reference_id';

const getGtagClientId = () => new Promise<string>(resolve => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    resolve('');
    return;
  }

  window.gtag('get', GTAG_MEASUREMENT_ID, 'client_id', clientId => {
    resolve(typeof clientId === 'string' ? clientId : '');
  });
});

export const stripeLinkWithClientReferenceId = (link: string, clientReferenceId = '') => {
  if (!clientReferenceId) {
    return link;
  }

  const url = new URL(link);
  url.searchParams.set(STRIPE_CLIENT_REFERENCE_PARAM, clientReferenceId);
  return url.toString();
};

export const handleStripeClientReferenceClick = async (event: MouseEvent) => {
  const link = event.currentTarget as HTMLAnchorElement;

  event.preventDefault();

  const clientReferenceId = await getGtagClientId();
  window.location.href = stripeLinkWithClientReferenceId(link.href, clientReferenceId);
};
