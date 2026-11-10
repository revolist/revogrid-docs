export function sameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  // Next's internal request URL can use localhost while the browser uses 127.0.0.1.
  // Compare with the incoming Host header, retaining the request protocol.
  return !origin || origin === `${new URL(request.url).protocol}//${request.headers.get('host')}`
}
