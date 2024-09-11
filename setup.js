import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function createEnvFile() {
	if (fs.existsSync(envPath)) {
    console.log('.env file already exists. Skipping creation.')
    return
  }

  const examplePath = path.join(__dirname, '.env.example')
  const exampleContent = fs.readFileSync(examplePath, 'utf8')

  const questions = exampleContent.split('\n').filter(line => line && !line.startsWith('#')).map(line => {
    const [key] = line.split('=')
    return {
      type: 'input',
      name: key,
      message: `${key}:`
    }
  })

  const responses = await inquirer.prompt(questions)
  const envContent = Object.entries(responses).map(([key, value]) => `${key}=${value}`).join('\n')
  fs.writeFileSync('.env', envContent)
}
