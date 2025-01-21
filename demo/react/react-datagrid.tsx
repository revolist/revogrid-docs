// App.tsx
import { RevoGrid } from '@revolist/react-datagrid'
import { useState } from 'react'

/**
 * note: columns & source need a "stable" reference in order to prevent infinite re-renders
 */
const columns = [
    {
        prop: 'name',
        name: 'First',
    },
    {
        prop: 'details',
        name: 'Second',
    },
]

function App() {
    const [source] = useState([
        {
            name: '1',
            details: 'Item 1',
        },
        {
            name: '2',
            details: 'Item 2',
        },
    ])
    return (
        <>
            <RevoGrid columns={columns} source={source} />
        </>
    )
}

export default App
