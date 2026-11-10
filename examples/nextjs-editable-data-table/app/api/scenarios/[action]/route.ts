import { store } from '../../../../server/store.ts'
import { sameOrigin } from '../../../../server/request-origin.ts'
export async function POST(request: Request, context: { params: Promise<{ action: string }> }) {
  const host = request.headers.get('host')?.split(':')[0]
  if (
    process.env.DEMO_ACTIONS !== '1' ||
    !host ||
    !['127.0.0.1', 'localhost'].includes(host) ||
    !request.headers.get('origin') ||
    !sameOrigin(request)
  )
    return Response.json({ code: 'NOT_FOUND' }, { status: 404 })
  const { action } = await context.params
  return store().serialize(() => {
    try {
      if (action === 'reset') return Response.json({ rows: store().reset() })
      if (action === 'conflict') {
        const current = store().read('OL-0003')!
        const result = store().save(current.id, {
          expectedVersion: current.version,
          changes: {
            sku: current.sku,
            quantity: 9,
            unitPriceCents: current.unitPriceCents,
            status: 'confirmed',
          },
        })
        return Response.json(result.body, { status: result.status })
      }
      return Response.json({ code: 'NOT_FOUND' }, { status: 404 })
    } catch {
      return Response.json(
        { code: 'SCENARIO_FAILED', message: 'The example could not be restored. Try again.' },
        { status: 500 },
      )
    }
  })
}
