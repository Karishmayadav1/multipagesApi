import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {

  return (
    <>
    <div className='nav'>
    <a href="/" className='site-title'><b>MULTIPAGES-API</b></a>
    <marquee>
         <h1>A user is a person who utilizes a computer or network service. A user often has a user account and is identified to the system by a username. Other terms for username include login name, screenname, account name, nickname and handle, which is derived from the identical citizens band radio term.</h1>
    </marquee>
      <ul>
        <li>
          <Link to='/'><u>Main</u></Link>
        </li>
        <li>
          <Link to='/'><u>User</u></Link>
        </li>
        <li>
          <Link to='/Post/2'><u>Post</u>
          <div className='Card'>
           
          </div>
          </Link>
        </li>
        
      </ul>   
    </div>
    <Outlet/>
    
  
    </>
  )
}

export default User

