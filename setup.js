import fs from 'node:fs'
import path from 'node:path'
import { createInterface } from 'node:readline/promises'

const envPath = path.join(import.meta.dirname, '.env')
const examplePath = path.join(import.meta.dirname, '.env.example')

/** Creates the .env file by asking a value for each key of .env.example */
async function createEnvFile () {
	if (fs.existsSync(envPath)) {
		console.log('.env file already exists. Skipping creation.')
		return
	}

	const keys = fs.readFileSync(examplePath, 'utf8')
		.split(/\r?\n/)
		.filter(line => line.trim() && !line.startsWith('#'))
		.map(line => line.split('=')[0].trim())

	const prompt = createInterface({ input: process.stdin })
	const answers = prompt[Symbol.asyncIterator]()
	const lines = []

	for (const key of keys) {
		process.stdout.write(`${key}: `)
		const { value = '' } = await answers.next()
		lines.push(`${key}=${value}`)
	}

	prompt.close()

	fs.writeFileSync(envPath, `${lines.join('\n')}\n`)
}

await createEnvFile()
