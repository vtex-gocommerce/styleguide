import React from 'react'

const InputLabel = ({ htmlFor, required, text, hasError, className }) => {
  if (!text) return null
  return (
    <label
      className={`db mb1 f6 lh-copy ${hasError ? 'c-danger' : 'gray'} ${className || ''}`}
      htmlFor={htmlFor}
    >
      {`${text}${required ? '*' : ''}`}
    </label>
  )
}

export default InputLabel