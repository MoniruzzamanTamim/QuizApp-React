import React from 'react'

function Illustration({Image}) {
  return (
     <div className='illustration'>
          <img src={Image} alt="Signup" className='w-50' />
        </div>
  )
}

export default Illustration