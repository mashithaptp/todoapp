import { Button,  List,  ListItem,  ListItemAvatar,  ListItemText,  TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  
  var [names,setnames] = useState();
  var [data1,setdata1] = useState([]);
  var [quant,setquant] = useState();
  var [data2,setdata2] = useState([]);
  var [descript,setdescript] = useState();
  var [data3,setdata3] = useState([]);
  
 

  const addhandler = ()=>{
    console.log("clicked");
    setdata1((data1)=>[...data1,names]);
    console.log(data1);
    
    setdata2((data2)=>[...data2,quant]);
    console.log(data2);
    setdata3((data3)=>[...data3,descript]);
    console.log(data3);
    setnames('');
    setquant('');
    setdescript('');
  }
  const inputhandler = (e)=>{
    console.log(e.target.value);
 setnames(e.target.value);
  }
  const inputhandler2 = (e)=>{
    console.log(e.target.value);
    setquant(e.target.value);
  }
  const inputhandler3 = (e)=>{
    console.log(e.target.value);
    setdescript(e.target.value);
  }
  


  return (
    
    <div style={{paddingTop:'90px'}}>
    <Typography variant='h4'>welcome</Typography>
    <br></br>
    <TextField required label='Enter Todo' variant='outlined' onChange={inputhandler} value={names}></TextField>
   <TextField required label='Quantity' variant='outlined' onChange={inputhandler2} value={quant}></TextField> 
    <TextField required label='Description' variant='outlined' onChange={inputhandler3} value={descript}></TextField>
    <br></br>
    <br></br>
    
    <Button variant='contained' color='error' onClick={addhandler}>Add Todo</Button>

    <ul>
     {data1.map((val,i)=>{
       return(
        <li>Todo    {val}</li>
       )
     })}
     {data2.map((val,i)=>{
       return(
        <li>Quantity    {val}</li>
       )
     })}
     {data3.map((val,i)=>{
       return(
        <li>Description    {val}</li>
       )
     })}
     
    </ul>

{/* <List sx={{ width:'100', maxWidth: 360}}>
  <ListItem alignItems='flex-start'>
    <ListItemText
    primary= {data1.map((val,i)=>{
      return(
       {val}
      )
    })}
    secondary={
      <React.Fragment>
        <Typography
        sx={{display: 'inline'}}
        variant='body2'
        color='text.primary'>Quantity{data2.map((val,i)=>{
          return(
           {val}
          )
        })} </Typography>
      </React.Fragment>
    }
    />
  </ListItem>
</List> */}

    
    
    </div>
  )
}

export default Todolist