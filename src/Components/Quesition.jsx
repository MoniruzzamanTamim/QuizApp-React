import React from 'react'
import Answers from '../Components/Answers'


 function Quesition({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className='qtitle' key={index} style={{display:"block"}}>
       <div className='qtitle'>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Quesition