import { RevoGrid } from '@revolist/react-datagrid'
import { useState } from 'react'

const columns = [{ prop: 'name' }]
function App() {
  const [source] = useState([
    { name: '1' }, { name: '2' }, { name: '3' }
  ])
  return (
    <>
      <RevoGrid columns={columns} source={source} />
    </>
  )
}

export default App
