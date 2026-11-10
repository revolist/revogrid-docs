'use client'
import { Button } from '@revolist/ui/react'
export default function DataError({ reset }: { reset: () => void }) {
  return (
    <section role="alert">
      <h2>Order lines could not be loaded. Try again.</h2>
      <Button onClick={reset}>Retry loading orders</Button>
    </section>
  )
}
