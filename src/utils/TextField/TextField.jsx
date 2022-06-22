import React from 'react'
import './TextField.css'

const TextField = ({ type, placeholder, value, setValue, onFocusOut, onEnter }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="textField"
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      onBlur={onFocusOut}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          onEnter()
        }
      }}
    />
  )
}

export default TextField