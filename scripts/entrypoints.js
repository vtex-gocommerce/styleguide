const path = require('path')
const fs = require('fs')

const componentsFolder = path.join(__dirname, '../react/components')
const iconsFolder = path.join(__dirname, '../react/icons')
const advancedComponentsFolder = path.join(__dirname, '../react/advancedComponents')
const entrypointsFolder = path.join(__dirname, '../react')

const isComponentFolder = s => s.charAt(0).toUpperCase() === s.charAt(0) && path.extname(s) === '' && s !== '.DS_Store'

const entrypointTemplate = (name, filePath, folder) => `import ${name} from './${`${folder}/${filePath}`}/index'

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
          fs.writeFileSync(entrypointPath, entrypointTemplate(file2, file + '/' + file2, 'components'))
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
    const entrypointPath = path.join(entrypointsFolder, `${file}.js`)
    console.log(`Writing ${entrypointPath}`)
    fs.writeFileSync(entrypointPath, entrypointTemplate(file, file, 'icons'))
  })
})

fs.readdir(advancedComponentsFolder, (err, files) => {
  if (err) {
    throw err
  }

  files.filter(isComponentFolder).forEach(file => {
    const entrypointPath = path.join(entrypointsFolder, `${file}.js`)
    console.log(`Writing ${entrypointPath}`)
    fs.writeFileSync(entrypointPath, entrypointTemplate(file, file, 'advancedComponents'))
  })
})
