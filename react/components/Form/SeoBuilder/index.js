import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Textarea from '../Textarea'
import Seo from '../../General/Seo'
import TextLimitCounter from '../../Indicators/TextLimitCounter'
import getSlug from 'speakingurl'

class SeoBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageTitle: this.props.pageTitle,
      metaDescription: this.props.metaDescription,
      url: getSlug(this.props.url),
      urlBase: this.props.urlBase
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pageTitle !== this.props.pageTitle) {
      this.setState({
        pageTitle: nextProps.pageTitle,
        url: this.state.url.length ? this.state.url : getSlug(nextProps.pageTitle)
      })
    }

    if (nextProps.metaDescription !== this.props.metaDescription) {
      this.setState({ metaDescription: nextProps.metaDescription })
    }

    if (nextProps.url !== this.props.url) {
      this.setState({ url: getSlug(nextProps.url) })
    }

    if (nextProps.urlBase !== this.props.urlBase) {
      this.setState({ urlBase: nextProps.urlBase })
    }
  }

  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => this.props.onChange && this.props.onChange(this.state)
    )
  }

  onChangeUrl = event => {
    this.setState(
      {
        url: getSlug(event.target.value)
      },
      () => this.props.onChange && this.props.onChange(this.state)
    )
  }

  render() {
    const { className, placeholderTitle, placeholderMetaDescription, placeholderUrl } = this.props

    return (
      <React.Fragment>
        <div className={`fadeIn flex-ns justify-between g-pt5 ${className}`}>
          <div className="w-100 w-50-ns g-pr4-ns">
            <div className="g-pb4 g-f2">
              <div className="flex justify-between">
                <label className="db g-pb2 c-on-base-2">{this.props.labelPageTitle}</label>
                <TextLimitCounter text={this.state.pageTitle} limit={70} />
              </div>
              <Input
                name="pageTitle"
                placeholder={placeholderTitle}
                className="db w-100"
                value={this.state.pageTitle}
                onChange={this.onChange}
              />
            </div>
            <div className="g-pb4 g-f2">
              <div className="flex justify-between">
                <label className="db g-pb2 c-on-base-2">{this.props.labelMetaDescription}</label>
                <TextLimitCounter text={this.state.metaDescription} limit={320} />
              </div>
              <Textarea
                name="metaDescription"
                placeholder={placeholderMetaDescription}
                className="db w-100"
                value={this.state.metaDescription}
                rows={3}
                onChange={this.onChange}
              />
            </div>
            <div className="g-pb4 g-f2">
              <label className="db g-pb2 c-on-base-2">{this.props.labelUrl}</label>
              <Input
                name="url"
                placeholder={placeholderUrl}
                className="db w-100"
                value={this.state.url}
                onChange={this.onChangeUrl}
              />
            </div>
          </div>
          <div className="w-100 w-50-ns g-pl4-ns">
            {(this.state.pageTitle || this.state.metaDescription || this.state.url) && (
              <Seo
                title={this.state.pageTitle}
                url={this.state.urlBase + this.state.url}
                description={this.state.metaDescription}
                className="br-0 h-100 g-pb4"
              />
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

SeoBuilder.propTypes = {
  pageTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  url: PropTypes.string,
  urlBase: PropTypes.string,
  onChange: PropTypes.func,
  labelPageTitle: PropTypes.string,
  labelMetaDescription: PropTypes.string,
  labelUrl: PropTypes.string,
  placeholderTitle: PropTypes.string,
  placeholderMetaDescription: PropTypes.string,
  placeholderUrl: PropTypes.string
}

SeoBuilder.defaultProps = {
  pageTitle: '',
  metaDescription: '',
  url: '',
  urlBase: 'http://www.store.com/',
  labelPageTitle: 'Page title',
  labelMetaDescription: 'Meta description',
  labelUrl: 'URL',
  placeholderTitle: '',
  placeholderMetaDescription: '',
  placeholderUrl: ''
}

export default SeoBuilder
