import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Client.css'

function Client() {

const [search , setSearch] = useState('')
const [getClientData ,setGetClientData] = useState({})
const[QrSrc ,setQrSrc] = useState()


  function handleClient(e){
    e.preventDefault()
  axios.post('http://localhost:4500/clientForm' , {search})
  .then((result)=>{
    if(result.data.status === 200){
      console.log(result.data.message)
      setGetClientData(result.data.findData)
      //for Qr code ...
      setQrSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:4500/form`)
    }
    else{
alert(result.data.message)
    }




  })

  }
console.log('hello')
  return (
    <>
    <div className='main'>


     <h1>FindMyDocs</h1> 
      <form onSubmit={handleClient}>
  <input type='search' value={search} onChange={(e)=> setSearch(e.target.value)}></input>
  <button>search</button>
  </form>

    
    <div className='playerData'>
      {
        (Object.keys(getClientData).length !== 0)
        ? <ul>
          <li className='left'>Serial Number</li>
          <li className='right'>{getClientData.Serial}</li>
          <li className='left'>Player Name</li>
          <li className='right'>{getClientData. Name}</li>
          <li className='left'>Aadhar Number</li>
          <li className='right'>{getClientData.Aadhar}</li>
          <li className='left'>Game</li>
          <li className='right'>{getClientData.Game}</li>
          <li className='left'>Position</li>
          <li className='right'>{getClientData.Position}</li>
          <li className='left'>State</li>
          <li className='right'>{getClientData.State}</li>
          <li className='left'>Tournament Name</li>
          <li className='right'>{getClientData.Tournament}</li>
          <li className='left'>Organized At</li>
          <li className='right'>{getClientData.Organized}</li>
          <li className='left'>Venue</li>
          <li className='right'>{getClientData.Venue}</li>
          <li className='left'>Action</li>
          <li><Link to=" ">Download</Link></li>

          <img  className= 'Qrimg' src={QrSrc}  alt='Qr'></img>
        </ul>
        : " "

      }

     
    </div>
    </div>
    </>
  )
}

export default Client
