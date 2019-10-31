import React from 'react'

const InputLabel = ({ htmlFor, required, text, hasError, className }) => {
  if (!text) return null
  return (
    <label
      className={`db g-mb1 g-f2 lh-copy ${hasError ? 'c-danger' : 'c-on-base-2'} ${className || ''}`}
      htmlFor={htmlFor}
    >
      {`${text}${required ? '*' : ''}`}
    </label>
  )
}

export default InputLabel