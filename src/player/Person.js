import React,{useState} from 'react'
import axios from 'axios'

import './Person.css'

function Person() {


  let serialNo;
    // const [Serial ,setSerial] = useState({text :''})
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

//to get the number of tournament in which position player are 


let digit = Tournament.split("")[0]
digit = String(digit).padStart(2, "0")

// console.log(digit)


//to get the letter of level of tournament in which player position achieved

let letter = Tournament.split(" ")[1]
letter = letter.charAt(0).toUpperCase()


//to get the last two digit of the year 

let year = new Date()
year = year.getFullYear().toString()
year = year.split("")[2] + year.split("")[3]

console.log(year)

// set the serial no in SGFI/N/05/23
serialNo = `SGFI/${letter}/${digit}/${year}/`





 axios.post('http://localhost:4500/form' ,{serialNo ,Name ,Aadhar ,Tournament,Venue,Organized,Position,Game,AgeGrp,State} )
.then((result)=>{
console.log(result.data)
// setSerial(' ')
setName(' ')
setGame(' ')
setPosition(' ')
setAadhar(' ')
setAgeGrp(' ')
setState(' ')
setTournament(' ')
setOrganized(' ')
setVenue(' ')

//  const Qr =`<img src= https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Serial.text}/>`




})

}


  return (
    <div className='Admin'>
      <div className='data'>
                <form onSubmit={handleSubmit}>
                    {/* <label>Serial No</label>
                    <input type='text' placeholder='Enter Serial No.' value={Serial.text} onChange={(e)=>setSerial(e.target.value)}></input> */}

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