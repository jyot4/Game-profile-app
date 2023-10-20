import React from 'react'
import game from './game.png'
import './HomeRow.css'
import {Link} from 'react-router-dom'

function HomeRow() {
  return (
    <div className='homeRow'>
  <div className='leftRow'>

<h1>Create your personalized game profile !</h1>
<p> showcase your skills, and unlock a certificate of achievement based on your stellar performance and let the gaming world recognize your prowes</p>
{/* <h2>Join Now</h2> */}
 <li><Link to ='/person'>Join Now</Link></li>

  </div>

  <div className='right'>
  <img src={game}></img>
  </div>
    </div>
  )
}

export default HomeRow
