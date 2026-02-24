import React from 'react'
import Answers from '../Components/Answers'
import ProgressBar from '../Components/ProgressBar'
import MiniPlayer from '../Components/MiniPlayer'

function Quiz() {
  return (
    <>
         <h1>Pick three of your favorite Star Wars Flims</h1>
         <h4>Question can have multiple answers</h4>
         <Answers />
         <ProgressBar />
         <MiniPlayer />
       </>
  )
}

export default Quiz