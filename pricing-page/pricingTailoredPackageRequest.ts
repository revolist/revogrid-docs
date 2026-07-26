export type TailoredCapabilitySelection = {
  id: string
  name: string
}

export type TailoredPackageRequestInput = {
  email: string
  message: string
  selectedCapabilities: TailoredCapabilitySelection[]
  describeItMyself: boolean
  pageUrl: string
}

const SOURCE = 'pricing-tailored-package'

export const createTailoredPackageRequestPayload = (
  input: TailoredPackageRequestInput,
) => {
  const selectedCapabilities = input.selectedCapabilities.map(({ id }) => id)
  const selectedCapabilityNames = input.selectedCapabilities.map(({ name }) => name)
  const capabilitySummary = selectedCapabilityNames.length
    ? selectedCapabilityNames.map((name) => `- ${name}`).join('\n')
    : 'None — described in own words'
  const message = [
    'Request details:',
    input.message,
    '',
    'Selected capabilities:',
    capabilitySummary,
    '',
    `Describe it myself: ${input.describeItMyself ? 'Yes' : 'No'}`,
    `Source: ${SOURCE}`,
    `Page URL: ${input.pageUrl}`,
  ].join('\n')

  return {
    // The existing Cloudflare email template renders these four field names.
    name: 'Pricing tailored package request',
    company: 'Not collected',
    email: input.email,
    message,
    // Preserve both human-readable and stable structured values for downstream use.
    requestMessage: input.message,
    selectedCapabilities,
    selectedCapabilityNames,
    describeItMyself: input.describeItMyself,
    source: SOURCE,
    pageUrl: input.pageUrl,
    // Existing lead-form aliases retained for compatibility with the shared endpoint.
    businessEmail: input.email,
    applicationInfo: message,
    requestType: 'contact' as const,
    requestLabel: 'Tailored package request',
  }
}
