import React from 'react'
import Question from '../Components/Quesition'

function Analysis({answers}) {
  return (
    <div className='analysis'>
          <h1>Question Analysis</h1>
        <Question answers={answers}  />
        </div>
  )
}

export default Analysis