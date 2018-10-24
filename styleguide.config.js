const path = require('path')

module.exports = {
  require: ['vtex-tachyons', '@gocommerce/tachyons'],
  showUsage: false,
  title: 'GoCommerce Styleguide',
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'react/Wrapper')
  },
  sections: [
    {
      name: 'Introduction',
      content: './react/docs/introduction.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Buttons',
          components: 'react/components/Buttons/**/*.js'
        },
        {
          name: 'Cards',
          components: 'react/components/Cards/**/*.js'
        },
        {
          name: 'Data',
          components: 'react/components/Data/**/*.js'
        },
        {
          name: 'Data Loading',
          components: 'react/components/DataLoading/**/*.js'
        },
        {
          name: 'Form',
          components: 'react/components/Form/**/*.js'
        },
        {
          name: 'General',
          components: 'react/components/General/**/*.js'
        },
        {
          name: 'Indicators',
          components: 'react/components/Indicators/**/*.js'
        },
        {
          name: 'Navigation',
          components: 'react/components/Navigation/**/*.js'
        },
        {
          name: 'Notifications',
          components: 'react/components/Notifications/**/*.js'
        },
        {
          name: 'Profile',
          components: 'react/components/Profile/**/*.js'
        }
      ]
    },
    {
      name: 'Advanced Components',
      content: 'react/advancedComponents/components.md',
      components: 'react/advancedComponents/**/*.js'
    },
    {
      name: 'Icons',
      content: 'react/icons/icons.md',
      components: 'react/icons/**/*.js'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
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
  }
}
