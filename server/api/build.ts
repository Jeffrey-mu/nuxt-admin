import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import queryString from 'query-string'

export const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineEventHandler((event) => {
  const query = event.req.url
  if (query) {
    const { record } = queryString.parse(query.split('?')[1])
    const { body = '', header = '', footer = '' } = JSON.parse(record as any)
    console.log(record, 'record')
    fs.writeFileSync(path.join(__dirname, '../../db/preview.json'), record as string, 'utf8')
    const indexPath = path.join(__dirname, '../../pages/template/index.vue')
    const index = fs.readFileSync(indexPath).toString()
    const reg = /\/\*\*\/\s*(.*?)\s*\/\*\*\//
    const IndexCode = index.split('\n').map((item) => {
      if (reg.test(item))
        return `/**/ const Body = resolveComponent('${body}') /**/`
      console.log(item)
      return item
    }).join('\n')

    fs.writeFileSync(indexPath, IndexCode)
    const layoutPath = path.join(__dirname, '../../components/Template/Layout/index.vue')
    const layout = fs.readFileSync(layoutPath).toString()
    let startindex = 0
    const layoutCode = layout.split('\n').map((item) => {
      if (reg.test(item)) {
        if (startindex === 0) {
          startindex += 1
          return `/**/ const Header = resolveComponent('${header}') /**/`
        }
        else { return `/**/ const Footer = resolveComponent('${footer}') /**/` }
      }
      return item
    }).join('\n')
    fs.writeFileSync(layoutPath, layoutCode)
    return true
  }
  return false
})
