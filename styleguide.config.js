const path = require('path')

module.exports = {
  require: ['@gocommerce/tachyons'],
  showUsage: true,
  title: 'GoCommerce Styleguide',
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const pathArray = path.dirname(componentPath).split(path.sep)
    const componentName = pathArray[pathArray.length - 1]
    const dir = path.relative(path.join('src', 'components'), path.dirname(componentPath))
    return `import ${componentName} from '@gocommerce/styleguide/lib/${dir}';`
  },
}
