import { badgeClassName } from '@revolist/ui'
import { store } from '../server/store.ts'
import OrdersClient from './OrdersClient'
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export default function Page() {
  return (
    <>
      <header>
        <p className="eyebrow">RE V O G R I D / NEXT.JS</p>
        <h1>Order line editor</h1>
        <p>Edit one row, review the changes, and save it to the demo database.</p>
        <p className={badgeClassName({ variant: 'neutral' })}>
          Local demo database · 20 synthetic records · USD cents
        </p>
      </header>
      <OrdersClient initialRows={store().list()} demoActions={process.env.DEMO_ACTIONS === '1'} />
      <footer>
        This local tutorial has no login. Its server selects an isolated workspace. Production
        applications must derive access from authenticated context.
      </footer>
    </>
  )
}
