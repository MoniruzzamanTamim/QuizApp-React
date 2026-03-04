import React,{Fragment } from 'react'
import Checkbox from '../Components/CheckBox'

function Answers({ options = [], handleAnsChange, input}) {
  return (
    <div className='answers'>
      {options.map((option, index) => (
         <Fragment key={index}>
          {input ? (
            <Checkbox
              
              className='answer'
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleAnsChange(e, index)}
            />
          ) : (
            <Checkbox
            
              className={`answer ${
                option.correct
                  ? 'correct'
                  : option.checked
                  ? 'wrong'
                  : 'null'
              } `}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Answers
