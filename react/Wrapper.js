import React, { Component } from 'react'
import { IntlProvider } from 'react-intl'
export default class Wrapper extends Component {
  render() {
    return <IntlProvider locale="en">{this.props.children}</IntlProvider>
  }
}
