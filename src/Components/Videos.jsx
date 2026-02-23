import React from 'react'
import Video from './Video'
import { Link } from 'react-router-dom'

function Videos() {
  return (
    <div className='videos'>
          <Link to='/quiz'>  <Video questions ='50' /></Link>
          <Link to='/quiz'>  <Video questions ='5' /></Link>
          <Link to='/quiz'>  <Video questions ='20' /></Link>
          <Link to='/quiz'>  <Video questions ='10' /></Link>
          <Link to='/quiz'>  <Video questions ='25' /></Link>
          <Link to='/quiz'>  <Video questions ='158' /></Link>
           
        </div>
  )
}

export default Videos