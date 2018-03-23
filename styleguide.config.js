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
  title: 'GoCommerce Styleguide',
  sections: [
    {
      name: 'Components',
      sections: [
        {
          name: 'Buttons',
          components: 'src/lib/components/Buttons/**/*.js'
        },
        {
          name: 'Cards',
          components: 'src/lib/components/Cards/**/*.js'
        },
        {
          name: 'Data',
          components: 'src/lib/components/Data/**/*.js'
        },
        {
          name: 'Form',
          components: 'src/lib/components/Form/**/*.js'
        },
        {
          name: 'General',
          components: 'src/lib/components/General/**/*.js'
        },
        {
          name: 'Indicators',
          components: 'src/lib/components/Indicators/**/*.js'
        },
        {
          name: 'Navigation',
          components: 'src/lib/components/Navigation/**/*.js'
        },
        {
          name: 'Notifications',
          components: 'src/lib/components/Notifications/**/*.js'
        },
        {
          name: 'Profile',
          components: 'src/lib/components/Profile/**/*.js'
        }
      ]
    },
    {
      name: 'Icons',
      content: 'src/lib/icons/icons.md',
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
          // Deu merda! Não use para css modules.
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
