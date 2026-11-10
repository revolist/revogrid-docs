import { openDatabase } from './database.ts'
const db = openDatabase()
db.reset()
db.close()
console.log('Seeded 1,000 synthetic orders: 980 in demo-a, 20 in demo-b.')
