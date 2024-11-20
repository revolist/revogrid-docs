import { faker } from '@faker-js/faker'
import colors from '../../json/colors.json'
import companies from '../../json/companies.json'

function generateFakeData(rows: number) {
    const eyeColors = colors
    const data = []

    for (let i = 0; i < rows; i++) {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const userData = {
            date: faker.date
                .between({ from: '1960-01-01', to: '2020-12-31' })
                .toISOString()
                .slice(0, 10),
            isActive: faker.datatype.boolean(),
            age: faker.number.int(40),
            eyeColor: faker.helpers.arrayElement(eyeColors),
            name: `${firstName} ${lastName}`,
            company: faker.helpers.arrayElement(companies),
            // company: faker.company.name(),
            email: faker.internet.email(),
            // avatar: faker.image.avatar(),
            avatar: `https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) ? 'men' : 'women'}/${Math.floor(Math.random() * 20) + 1}.jpg`,
        }
        data.push(userData)
    }

    return data
}

// columnGenerator.worker.ts
function getRandomArbitrary(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

self.onmessage = (event) => {
    const { rowsNumber, colsNumber } = event.data
    const rows = generateFakeData(rowsNumber)
    const updatedRows = rows.map((row: Record<string, any>) => {
        const newRow = { ...row }
        for (let j = 0; j < colsNumber; j++) {
            newRow[j] = getRandomArbitrary(0, 10000)
        }
        return newRow
    })

    // Send the updated rows back to the main thread
    self.postMessage(updatedRows)
}
