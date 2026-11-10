import { openStore } from './store.ts'
const db = openStore()
db.reset()
db.close()
console.log('Restored 20 synthetic rows in the local tutorial database.')
