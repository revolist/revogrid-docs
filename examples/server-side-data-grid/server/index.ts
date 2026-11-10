import { openDatabase } from './database.ts'
import { createOrdersServer } from './http.ts'
const db = openDatabase()
const server = createOrdersServer(db)
server.listen(Number(process.env.PORT ?? 49303), '127.0.0.1', () =>
  console.log(`SQL-backed grid: http://127.0.0.1:${process.env.PORT ?? 49303}`),
)
for (const signal of ['SIGINT', 'SIGTERM'] as const)
  process.on(signal, () =>
    server.close(() => {
      db.close()
      process.exit(0)
    }),
  )
