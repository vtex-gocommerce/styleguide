import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Textarea from '../Textarea'
import Seo from '../../General/Seo'
import TextLimitCounter from '../../Indicators/TextLimitCounter'
import getSlug from 'speakingurl'

const PAGE_TITLE_LIMIT = 70
const DESCRIPTION_LIMIT = 320

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

  truncateTextDisplay = (text, displayLimit) => text.substring(0, displayLimit) + (text.length > displayLimit ? '...' : '') 

  render() {
    const { className, placeholderTitle, placeholderMetaDescription, placeholderUrl } = this.props

    return (
      <React.Fragment>
        <div className={`fadeIn flex-ns justify-between pt5 ${className}`}>
          <div className="w-100 w-50-ns pr4-ns">
            <div className="pb4 f6">
              <div className="flex justify-between">
                <label className="db pb2 gray">{this.props.labelPageTitle}</label>
                <TextLimitCounter text={this.state.pageTitle} limit={PAGE_TITLE_LIMIT} />
              </div>
              <Input
                name="pageTitle"
                placeholder={placeholderTitle}
                className="db w-100"
                value={this.state.pageTitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="pb4 f6">
              <div className="flex justify-between">
                <label className="db pb2 gray">{this.props.labelMetaDescription}</label>
                <TextLimitCounter text={this.state.metaDescription} limit={DESCRIPTION_LIMIT} />
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
            <div className="pb4 f6">
              <label className="db pb2 gray">{this.props.labelUrl}</label>
              <Input
                name="url"
                placeholder={placeholderUrl}
                className="db w-100"
                value={this.state.url}
                onChange={this.handleChangeUrl}
              />
            </div>
          </div>
          <div className="w-100 w-50-ns pl4-ns">
            {(this.state.pageTitle || this.state.metaDescription || this.state.url) && (
              <Seo
                title={this.truncateTextDisplay(this.state.pageTitle, PAGE_TITLE_LIMIT)}
                url={this.props.urlBase + this.state.url + this.props.urlAppend}
                description={this.truncateTextDisplay(this.state.metaDescription, DESCRIPTION_LIMIT)}
                className="br-0 h-100 pb4"
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
