import * as React from 'react'

import IconQuestionCircle from '../../../icons/IconQuestionCircle/index'

const EmptyContent = ({ title, description, helpText, image, handleHelp }) => {
  return (
    <div className={'g-pa4 h-100 bg-white br2 ma7 flex flex-column items-center'}>
      <span className={'f3 fw6 mb4 mt9'}>{ title }</span>
      <span className={'f5 black-40 mb8'}>{ description }</span>

      {helpText && (
        <div onClick={handleHelp} className={'cursor flex content-center black-40 link mb8'}>
          <IconQuestionCircle />
          <span className={'ml3'}>{ helpText }</span>
        </div>
      )}

      <img src={image} />
    </div>
  )
}

export default EmptyContent