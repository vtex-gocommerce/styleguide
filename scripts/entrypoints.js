const path = require('path')
const fs = require('fs')

const componentsFolder = path.join(__dirname, '../react/components')
const iconsFolder = path.join(__dirname, '../react/icons')
const entrypointsFolder = path.join(__dirname, '../react')

const isComponentFolder = s => s.charAt(0).toUpperCase() === s.charAt(0) && path.extname(s) === ''

const entrypointTemplate = (name, filePath, isIcon) => `import ${name} from './${
  isIcon ? `icons/${filePath}` : `components/${filePath}`
}/index'

export default ${name}
`

fs.readdir(componentsFolder, (err, files) => {
  if (err) {
    throw err
  }

  files.filter(isComponentFolder).forEach(file => {
    fs.readdir(componentsFolder + '/' + file, (err2, files2) => {
      if (files2) {
        files2.filter(isComponentFolder).forEach(file2 => {
          const entrypointPath = path.join(entrypointsFolder, `${file2}.js`)
          console.log(`Writing ${entrypointPath}`)
          fs.writeFileSync(entrypointPath, entrypointTemplate(file2, file + '/' + file2, false))
        })
      }
    })
  })
})

fs.readdir(iconsFolder, (err, files) => {
  if (err) {
    throw err
  }

  files.filter(isComponentFolder).forEach(file => {
    const entrypointPath = path.join(entrypointsFolder, `Icon${file}.js`)
    console.log(`Writing ${entrypointPath}`)
    fs.writeFileSync(entrypointPath, entrypointTemplate(file, file, true))
  })
})
