import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


function Home() {
  return (
    <div className='home'>
     <header>
        <h1>Game<span>Profile</span></h1>
        </header>
        <ul>
          <li><Link to ='/'>Home</Link></li>
        <li><Link to='/person'>Admin</Link></li>
       <li><Link to='/client'>Client</Link></li> 
        </ul>
        
       
    </div>
  )
}

export default Home
