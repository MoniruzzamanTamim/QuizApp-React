import React from 'react'
import Nav from './Navbar'

function Layout({children}) {
  return (
    <>
    <Nav />
    <main className='main'>
      
      <div className="container">
{children}
      </div>
    </main>
    </>
    
  )
}

export default Layout