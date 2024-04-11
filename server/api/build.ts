import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import queryString from 'query-string'

export const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineEventHandler((event) => {
  return 1
})
