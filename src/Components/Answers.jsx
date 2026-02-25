import React from 'react'
import Checkbox from '../Components/CheckBox'

function Answers({ options = [], handleAnsChange }) {
  return (
    <div className='answers'>
      {options.map((option, index) => (
        <Checkbox
          className='answer'
          key={index}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleAnsChange(e, index)}
        />
      ))}
    </div>
  )
}

export default Answers
