export const hasAnalyticsConsent = (cookies: string) => {
  const consent = cookies.split(';').find(c => c.trim().startsWith('cookieyes-consent=')) || ''
  try {
    return /(?:^|[,=])analytics:yes(?:,|$)/.test(decodeURIComponent(consent.trim()))
  } catch {
    return false
  }
}
