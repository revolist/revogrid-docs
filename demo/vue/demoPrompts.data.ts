import { parse } from 'csv-parse/sync'

const url =
    'https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv'
export default {
    async load() {
        try {
            // Fetch the CSV file from the URL
            const response = await fetch(url)

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch CSV file: ${response.statusText}`
                )
            }

            // Get the CSV text
            const csvText = await response.text()
            return parse(csvText, {
                columns: true,
                relax_quotes: true, // Relax the parsing of quotes
                relax_column_count: true, // Allow for different column counts
            })
        } catch (error) {
            console.error(error)
            return []
        }
    },
}
