import { createServer } from 'vite'
import { openDatabase } from './database.ts'
import { createOrdersServer } from './http.ts'
const db = openDatabase()
const api = createOrdersServer(db)
api.listen(49304, '127.0.0.1')
const vite = await createServer()
await vite.listen()
vite.printUrls()
for (const signal of ['SIGINT', 'SIGTERM'] as const)
  process.on(signal, async () => {
    await vite.close()
    api.close(() => {
      db.close()
      process.exit(0)
    })
  })
