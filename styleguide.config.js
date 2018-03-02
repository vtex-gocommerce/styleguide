const path = require('path')

module.exports = {
  require: [
    '@gocommerce/tachyons',
    '@fortawesome/fontawesome',
    '@fortawesome/fontawesome-free-brands',
    '@fortawesome/fontawesome-pro-light',
    '@fortawesome/fontawesome-pro-regular',
    '@fortawesome/fontawesome-pro-solid',
    '@fortawesome/react-fontawesome'
  ],
  showUsage: true,
  title: 'GoCommerce Styleguide',
  sections: [
    {
      name: 'Components',
      components: 'src/lib/components/**/*.js',
    },
    {
      name: 'Icons',
      components: 'src/lib/icons/**/*.js',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /.*style.css/,
          loader: 'style-loader!css-loader'
        },
        {
          // VAI DAR MERDA! Se qualquer componente externo usar css style.css!
          test: /.*style.css/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  },
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const pathArray = path.dirname(componentPath).split(path.sep)
    const componentName = pathArray[pathArray.length - 1]
    const dir = path.relative(path.join('src'), path.dirname(componentPath))
    return `import { ${componentName} } from '@gocommerce/styleguide';`
  },
}
