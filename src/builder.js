import fs from 'fs'

let path = './lib/'
let impComponents = []
let expComponents = []

const walk = function (dir, done) {
  fs.readdir(dir, function (error, list) {
    if (error) {
      return done(error)
    }

    let i = 0;

    (function next() {
      let file = list[i++]

      if (!file) {
        return done(null)
      }

      fs.stat(dir + file, function (error, stat) {
        if (stat && stat.isDirectory()) {
          walk(dir + file, (error) => next())
        } else {
          console.log(`Importing & Exporting: ${file}`)
          impComponents.push(`import ${file} from '${dir}/${file}'`)
          expComponents.push(`exports.${file} = ${file}`)
          next()
        }
      })
    })()
  })
}

process.argv.forEach((val, index, array) => {
  if (val.indexOf('source') !== -1) {
    path = val.split('=')[1]
  }
})

walk(path, (error) => {
  if (error) {
    throw error;
  } else {
    let content = ''

    impComponents.forEach(function (el) {
      content += `${el}\n`
    })

    content += '\n'

    expComponents.forEach(function (el) {
      content += `${el}\n`
    })

    fs.writeFile('./src/index.js', content, (err) => {
      if (err) {
        console.log(err)
      }
    })
    console.info('Finished...')
  }
})