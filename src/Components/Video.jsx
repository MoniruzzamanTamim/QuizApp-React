import React from 'react'
import image from '../assets/images/3.jpg'
import { Link } from 'react-router-dom'

function Video({questions}) {

  return (
    
         <div className='video'>
           <img src={image} alt="Video Title" />
           <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
           <div className='qmeta'>
             <p>{questions} Questions</p>
             <p>Score : Not taken yet</p>
           </div>
         </div>
    
  )
}

export default Video