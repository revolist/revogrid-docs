const STRIPE_CLIENT_REFERENCE_PARAM = 'client_reference_id'
const STRIPE_CLIENT_REFERENCE_MAX_LENGTH = 200

const formatStripeClientReferenceId = (clientReferenceId: string) =>
  clientReferenceId.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, STRIPE_CLIENT_REFERENCE_MAX_LENGTH)

export const stripeLinkWithClientReferenceId = (link: string, clientReferenceId = '') => {
  if (!clientReferenceId) {
    return link
  }

  const url = new URL(link)
  url.searchParams.set(
    STRIPE_CLIENT_REFERENCE_PARAM,
    formatStripeClientReferenceId(clientReferenceId),
  )
  return url.toString()
}

// The shared site observer decorates links before activation, including new tabs and copies.
// Leave navigation to the browser so modifier keys, targets and downloads retain their behavior.
export const handleStripeClientReferenceClick = (_event: MouseEvent) => undefined
