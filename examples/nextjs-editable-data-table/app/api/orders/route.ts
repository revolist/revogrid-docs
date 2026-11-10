import { store } from '../../../server/store.ts'
export const dynamic = 'force-dynamic'
export function GET() {
  try {
    return Response.json({ rows: store().list() }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return Response.json(
      { code: 'READ_FAILED', message: 'Order lines could not be loaded. Try again.' },
      { status: 500 },
    )
  }
}
