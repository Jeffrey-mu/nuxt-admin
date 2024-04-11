import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fse from 'fs-extra'
import queryString from 'query-string'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineEventHandler((event) => {
  const query = event.req.url
  if (query) {
    const { record } = queryString.parse(query.split('?')[1])
    const { body = '', header = '', footer = '', id } = JSON.parse(record as any)
    const templateFolderPath = path.join(__dirname, '../../pages/template/')
    const newPath = copyTemplateFolderWithVariations(templateFolderPath, id)

    updateTemplateFile(path.join(newPath, 'index.vue'), { body })
    updateTemplateFile(path.join(newPath, 'Layout.vue'), { header, footer })

    return {
      code: 200,
      data: true,
    }
  }
  return {
    code: 400,
    data: false,
  }
})

function copyTemplateFolderWithVariations(src: string, id: string) {
  const dest = src.replace('/template/', `/template_${id}/`)
  fse.copySync(src, dest)
  return dest
}

function updateTemplateFile(filePath: string, { body = '', header = '', footer = '' }) {
  const fileContent = fs.readFileSync(filePath).toString()
  const updatedContent = fileContent.split('\n').map((line) => {
    const match = line.match(/\/\*\*\/\s*(.*?)\s*\/\*\*\//)
    if (match) {
      const componentName = match[1]
      console.log(componentName)
      if (componentName.includes('Body'))
        return `/**/ const Body = resolveComponent('${body}') /**/`
      else if (componentName.includes('Header'))
        return `/**/ const Header = resolveComponent('${header}') /**/`
      else if (componentName.includes('Footer'))
        return `/**/ const Footer = resolveComponent('${footer}') /**/`
    }
    return line
  }).join('\n')
  fs.writeFileSync(filePath, updatedContent)
}
