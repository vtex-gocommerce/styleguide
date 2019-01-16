const path = require('path')
const fs = require('fs')
var DomParser = require('dom-parser')

const iconsFolder = path.join(__dirname, './../icons-svg')
const componentFolder = path.join(__dirname, './../react/icons')
const componentLayout = path.join(__dirname, './utils/iconComponentLayout.js')

const isSvg = file => {
  return file.includes('.svg')
}

const getComponentName = fileName => {
  let componentName = fileName.replace('-', ' ')
  componentName = capitalize(componentName)
    .replace(' ', '')
    .replace('.svg', '')

  return 'Icon' + componentName
}

const capitalize = name => {
  return name.replace(/(^|\s)\S/g, l => l.toUpperCase())
}

fs.readdir(iconsFolder, (err, files) => {
  if (err) {
    throw err
  }

  files.filter(isSvg).forEach(file => {
    const componentName = getComponentName(file)
    const componentFolderPath = componentFolder + '/' + componentName
    const componentJsFilePath = componentFolderPath + '/index.js'
    const componentReadmeFilePath = componentFolderPath + '/README.md'

    let svgContent = fs.readFileSync(iconsFolder + '/' + file, 'utf8')

    const parser = new DomParser()
    let doc = parser.parseFromString(svgContent)
    let svgMainContent = doc.getElementById('Icons').innerHTML
    svgMainContent = svgMainContent.replace(/\/>/g, ' fill={svgColor} />')

    let componentContent = fs.readFileSync(componentLayout, 'utf8')
    componentContent = componentContent.replace(/ComponentName/g, componentName)
    componentContent = componentContent.replace('content_replace', svgMainContent)

    let readmeFile = '```js \n'
    readmeFile += `<${componentName} /> \n`
    readmeFile += '```'

    if (!fs.existsSync(componentFolderPath)) {
      fs.mkdirSync(componentFolderPath)
    }

    fs.writeFileSync(componentJsFilePath, componentContent)
    fs.writeFileSync(componentReadmeFilePath, readmeFile)
  })
})
