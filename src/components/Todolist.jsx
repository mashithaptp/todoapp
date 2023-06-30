import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  
  var [fname,setfname] = useState("mashitha");
  var [val,setval] = useState();
  const changeName = ()=>{
    console.log("clicked");
    setfname(val);
  }
  const inputhandler = (e)=>{
    console.log(e.target.value);
 setval(e.target.value)
  }
  return (
    
    <div style={{paddingTop:'90px'}}>
    <Typography variant='h4'>welcome</Typography>
    <br></br>
    <TextField label='Enter Todo' variant='outlined' onChange={inputhandler}></TextField>
    <br></br>
    <br></br>
    
    <Button variant='contained' color='error' onClick={changeName}>Add Todo</Button>

    </div>
  )
}

export default Todolist