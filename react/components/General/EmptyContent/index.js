import * as React from 'react'

import IconQuestionCircle from '../../../icons/IconQuestionCircle/index'

const EmptyContent = ({ title, description, helpText, image, helpLink }) => {
  return (
    <div className={"pa9 bg-white br2 mh7 mb7 flex flex-column items-center"}>
      <span className={'f3 fw6 mb4 mt8'}>{ title }</span>
      <span className={'f5 black-40 mb8'}>{ description }</span>

      {helpText && (
        <a href={helpLink} target={'_blank'} className={'pointer flex content-center black-40 link mb8'}>
          <IconQuestionCircle />
          <span className={'ml3'}>{ helpText }</span>
        </a>
      )}

      <img src={image} />
    </div>
  )
}

export default EmptyContent