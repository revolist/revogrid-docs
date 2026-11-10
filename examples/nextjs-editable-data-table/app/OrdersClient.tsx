'use client'
import { Button } from '@revolist/ui/react'
import dynamic from 'next/dynamic'
import { Component, type ReactNode } from 'react'
import type { OrderLine } from '../shared/order-model.ts'
const OrdersGrid = dynamic(() => import('./OrdersGrid'), {
  ssr: false,
  loading: () => (
    <p role="status" className="loading">
      Loading order editor…
    </p>
  ),
})
class EditorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean; attempt: number }
> {
  state = { failed: false, attempt: 0 }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? (
      <section role="alert">
        The order editor could not load.{' '}
        <Button onClick={() => this.setState(s => ({ failed: false, attempt: s.attempt + 1 }))}>
          Retry loading
        </Button>
      </section>
    ) : (
      <div key={this.state.attempt}>{this.props.children}</div>
    )
  }
}
export default function OrdersClient(props: { initialRows: OrderLine[]; demoActions: boolean }) {
  return (
    <EditorBoundary>
      <OrdersGrid {...props} />
    </EditorBoundary>
  )
}
