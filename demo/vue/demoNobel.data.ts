const url = 'https://api.nobelprize.org/v1/prize.json'

function mapCategory(category: string) {
    const emoji =
        {
            physics: '🔍',
            chemistry: '🧪',
            medicine: '🏥',
            literature: '📚',
            peace: '🕊️',
            economics: '💸',
        }[category] || '🏆'
    const label = category[0].toUpperCase() + category.slice(1);
    return {
        label: `${emoji} ${label}`,
        labelPure: label,
        value: category,
    }
}
export default {
    async load() {
        try {
            // Fetch the CSV file from the URL
            const response = await fetch(url)

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch JSON file: ${response.statusText}`
                )
            }

            // Get the JSON text
            const json = JSON.parse(await response.text())
            const categories: Record<string, any> = {}

            let prevGroup = 0
            const prizes = json.prizes.reduce((prev, prize) => {
                // generate a random motivation text
                prize.motivation = `${Math.random()}`
                const category = mapCategory(prize.category)
                prize.description = `${category.labelPure} prize for ${prize.laureates?.[0]?.firstname} ${prize.laureates?.[0]?.surname}`

                categories[category.value] = category

                prize.share = Math.floor(Math.random() * 100)
                prize.date = `${prize.year}-12-01`
                prize.amount = Math.floor(Math.random() * 1000)

                if (prize.year !== prev[prev.length - 1]?.year) {
                    prevGroup++
                }

                prize.group = prevGroup % 3
                prev.push(prize)
                return prev
            }, [])

            return { categories, prizes }
        } catch (error) {
            console.error(error)
            return []
        }
    },
}
