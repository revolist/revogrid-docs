import { parse } from 'csv-parse/sync'
import { readFile } from 'node:fs/promises'

const csvUrl = import.meta.resolve(
    '@revolist/revogrid-examples/components/sys-data/ai-prompts.csv'
)

export default {
    async load() {
        try {
            const csvText = await readFile(new URL(csvUrl), 'utf-8')
            return parse(csvText, {
                columns: true,
                relax_quotes: true,
                relax_column_count: true,
            })
        } catch (error) {
            console.error(error)
            return []
        }
    },
}
