import React,{useState} from 'react'
import axios from 'axios'

import './Person.css'

function Person() {
    const [Serial ,setSerial] = useState('')
    const [Name ,setName] = useState('')
    const [Aadhar ,setAadhar] = useState('')
    const [Tournament ,setTournament] = useState('')
    const [Venue, setVenue] = useState('')
    const [Organized ,setOrganized] = useState('')
    const [Position ,setPosition] = useState('')
    const [Game ,setGame] = useState('')
    const [AgeGrp ,setAgeGrp] = useState('')
    const [State ,setState] = useState('')

    console.log()
 
function handleSubmit(e){
  e.preventDefault()
 axios.post('http://localhost:4500/form' ,{Serial ,Name ,Aadhar ,Tournament,Venue,Organized,Position,Game,AgeGrp,State} )
.then((result)=>{
console.log(result.data)
setSerial(' ')
setName(' ')
setGame(' ')
setPosition(' ')
setAadhar(' ')
setAgeGrp(' ')
setState(' ')
setTournament(' ')
setOrganized(' ')
setVenue(' ')

})

}


  return (
    <div className='Admin'>
      <div className='data'>
                <form onSubmit={handleSubmit}>
                    <label>Serial No</label>
                    <input type='text' placeholder='Enter Serial No.' value={Serial} onChange={(e)=>setSerial(e.target.value)}></input>

                    <label>Player Name</label>
                    <input type='text' placeholder='Enter Player Name' value={Name} onChange={(e)=>setName(e.target.value)}></input>

                    <label>Aadhar No</label>
                    <input type='number' placeholder='Enter Aadhar No.' value={Aadhar} onChange={(e)=>setAadhar(e.target.value)}></input>

                    <label>Game</label>
                    <select
                    value={Game} 
                    onChange={(e)=>setGame(e.target.value)}
                    >
                        <option>Select Game</option>
                        <option>Kabaddi</option>
                        <option>Hockey</option>
                        <option>Badminton</option>
                        <option>Cricket</option>
                    </select>

                    <label>Age Group</label>
                    <select   value={AgeGrp}  onChange={(e)=>setAgeGrp(e.target.value)}>
                    <option>Select Age Group</option>
                    <option>Juinor</option>
                    <option>Senior</option>
                    </select>

                    <label>Position</label>
                    <select  value={Position}  onChange={(e)=>setPosition(e.target.value)}  >
                    <option>Select Position</option>
                        <option>Qualified</option>
                        <option> 1ND Sliver</option>
                        <option>2ND Sliver</option>
                        <option>3ND Sliver</option>
                    </select>

                    <label>State</label>
                    <select value={State}  onChange={(e)=>setState(e.target.value)} >
                    <option>Select State</option>
                        <option>Rajasthan</option>
                        <option> Punjab</option>
                        <option>Utter pradesh</option>
                        <option>Obisha</option>
                    </select>

                    <label>Tournament Name</label>
                    <input type='text' placeholder='Enter Tournament Name.' value={Tournament} onChange={(e)=>setTournament(e.target.value)}></input>

                    <label>Organized At</label>
                    <input type='text' placeholder='Enter Organized At.' value={Organized} onChange={(e)=>setOrganized(e.target.value)}></input>

                    <label>Venue</label>
                    <input type='text' placeholder='Enter Venue.' value={Venue} onChange={(e)=>setVenue(e.target.value)}></input>

                   <button type='submit'>Submit</button>
                </form>
            </div>
    </div>
  )
}

export default Person