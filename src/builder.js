import fs from 'fs'

const path = './src/lib'
let impComponents = []
let expComponents = []

const walk = function(dir, done) {
  fs.readdir(dir, function(error, list) {
    if (error) {
      return done(error)
    }

    let i = 0
    ;(function next() {
      let child = list[i++]
      let full_path = dir + '/' + child

      if (!child) {
        return done(null)
      }

      fs.stat(full_path, function(error, stat) {
        if (stat && stat.isDirectory()) {
          walk(full_path, error => next())
        } else {
          const fileParams = child.split('.')
          let componentName = dir.split('/')
          componentName = componentName[componentName.length - 1]
          if (!componentName.startsWith('_'))
            if (fileParams.length > 0 && fileParams[fileParams.length - 1] == 'js') {
              let finalPath = dir.split('/')
              finalPath.splice(1, 1)
              finalPath = finalPath.join('/')

              // const finalPath = dir.splice(1, 1, dir.split('/'));
              // console.log(`Importing & Exporting: ${dir}`)
              impComponents.push(`import ${componentName} from '${finalPath}'`)
              expComponents.push(`exports.${componentName} = ${componentName}`)
            }
          next()
        }
      })
    })()
  })
}

// process.argv.forEach((val, index, array) => {
//   if (val.indexOf('source') !== -1) {
//     path = val.split('=')[1]
//   }
//   console.log(val)
// })

walk(path, error => {
  if (error) {
    throw error
  } else {
    let content = ''

    impComponents.forEach(function(el) {
      content += `${el}\n`
    })

    content += '\n'

    expComponents.forEach(function(el) {
      content += `${el}\n`
    })

    fs.writeFile('./src/index.js', content, err => {
      if (err) {
        console.log(err)
      }
    })
    console.info('Finished...')
  }
})
