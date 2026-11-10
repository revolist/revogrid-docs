import { store } from '../../../../server/store.ts'
import { sameOrigin } from '../../../../server/request-origin.ts'
export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!sameOrigin(request))
    return Response.json(
      { code: 'FORBIDDEN', message: 'Use the local application origin.' },
      { status: 403 },
    )
  return store().serialize(async () => {
    let input: unknown
    try {
      const text = await request.text()
      if (Buffer.byteLength(text) > 8192) throw new Error('Body too large')
      input = JSON.parse(text)
    } catch {
      return Response.json(
        { code: 'INVALID_REQUEST', message: 'Invalid JSON request.' },
        { status: 400 },
      )
    }
    try {
      const result = store().save((await context.params).id, input)
      return Response.json(result.body, {
        status: result.status,
        headers: { 'Cache-Control': 'no-store' },
      })
    } catch {
      return Response.json(
        { code: 'SAVE_FAILED', message: 'Could not confirm the save. Your draft is preserved.' },
        { status: 500 },
      )
    }
  })
}
