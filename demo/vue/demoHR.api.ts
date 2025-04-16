import ColumnGeneratorWorker from './columnGenerator.worker.ts?worker'

export async function getHRData(mode: number) {
    let count = 100
    let colsNumber = 100
    if (mode === 1) {
        count = 1000
    } else if (mode === 2) {
        count = 10000
    } else if (mode === 3) {
        count = 100000
    } else if (mode === 4) {
        count = 200000
    } else if (mode === 5) {
        count = 400000
    }
    try {
        return new Promise((resolve, reject) => {
            // Initialize the worker
            const worker = new ColumnGeneratorWorker()

            worker.onmessage = (event) => {
                resolve(event.data)
                worker.terminate() // Cleanup
            }

            worker.onerror = (error) => {
                console.error('Worker error:', error)
                reject(error)
            }

            // Send data to the worker
            worker.postMessage({ rowsNumber: count, colsNumber })
        })
    } catch (error) {
        console.error(error)
        return []
    }
}
