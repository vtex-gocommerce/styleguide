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
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.pageTitle !== this.props.pageTitle) {
      this.setState({
        pageTitle: this.props.pageTitle,
        url: !this.props.editUrlWhenChangeTitle ? this.state.url : getSlug(this.props.pageTitle),
      })
    }

    if (prevProps.metaDescription !== this.props.metaDescription) {
      this.setState({ metaDescription: this.props.metaDescription })
    }

    if (prevProps.url !== this.props.url) {
      this.setState({ url: getSlug(this.props.url) })
    }
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.props.onChange && this.props.onChange(this.state)
    )
  }

  handleChangeUrl = event => {
    this.setState(
      {
        url: getSlug(event.target.value),
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div className="g-pb4 g-f2">
              <label className="db g-pb2 c-on-base-2">{this.props.labelUrl}</label>
              <Input
                name="url"
                placeholder={placeholderUrl}
                className="db w-100"
                value={this.state.url}
                onChange={this.handleChangeUrl}
              />
            </div>
          </div>
          <div className="w-100 w-50-ns g-pl4-ns">
            {(this.state.pageTitle || this.state.metaDescription || this.state.url) && (
              <Seo
                title={this.state.pageTitle}
                url={this.props.urlBase + this.state.url + this.props.urlAppend}
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
  className: PropTypes.string,
  pageTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  url: PropTypes.string,
  urlBase: PropTypes.string,
  urlAppend: PropTypes.string,
  onChange: PropTypes.func,
  labelPageTitle: PropTypes.string,
  labelMetaDescription: PropTypes.string,
  labelUrl: PropTypes.string,
  placeholderTitle: PropTypes.string,
  placeholderMetaDescription: PropTypes.string,
  placeholderUrl: PropTypes.string,
  editUrlWhenChangeTitle: PropTypes.bool,
}

SeoBuilder.defaultProps = {
  className: '',
  pageTitle: '',
  metaDescription: '',
  url: '',
  urlBase: 'http://www.store.com/',
  urlAppend: '',
  labelPageTitle: 'Page title',
  labelMetaDescription: 'Meta description',
  labelUrl: 'URL',
  placeholderTitle: '',
  placeholderMetaDescription: '',
  placeholderUrl: '',
  editUrlWhenChangeTitle: true,
}

export default SeoBuilder
