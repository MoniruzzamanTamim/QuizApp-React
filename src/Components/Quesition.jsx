import React from 'react'
import Answers from '../Components/Answers'

function Quesition() {
  return (
  <div className='question'>
        <div className='qtitle'>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
  )
}

export default Quesition