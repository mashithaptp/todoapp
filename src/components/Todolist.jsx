import { Button,  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Todolist = () => {
  
//   var [names,setnames] = useState();
//   var [data1,setdata1] = useState([]);
//   var [quant,setquant] = useState();
//   var [data2,setdata2] = useState([]);
//   var [descript,setdescript] = useState();
//   var [data3,setdata3] = useState([]);
  
 

//   const addhandler = ()=>{
//     console.log("clicked");
//     setdata1((data1)=>[...data1,names]);
//     console.log(data1);
    
//     setdata2((data2)=>[...data2,quant]);
//     console.log(data2);
//     setdata3((data3)=>[...data3,descript]);
//     console.log(data3);
//     setnames('');
//     setquant('');
//     setdescript('');
//   }
//   const inputhandler = (e)=>{
//     console.log(e.target.value);
//  setnames(e.target.value);
//   }
//   const inputhandler2 = (e)=>{
//     console.log(e.target.value);
//     setquant(e.target.value);
//   }
//   const inputhandler3 = (e)=>{
//     console.log(e.target.value);
//     setdescript(e.target.value);
//   }


  const [inp,setinp] = useState({sname:'',quant:'',descript:''});
  const [data,setdata] = useState([]);

  const inputhandler = (e)=>{
    const {name,value} = e.target;
    setinp((inp)=>({...inp,[name]:value}))
    console.log(inp);
  }

  const addhandler = ()=>{
      console.log('clicked');
      setdata((data)=>[...data,inp]);
      setinp({sname:'',quant:'',descript:''});
  }
  


  return (
    
    <div style={{paddingTop:'90px'}}>
      <br /><br />
    <Typography variant='h4'style={{color:'red'}}>TODO APPLICATION</Typography>
    <br></br>
    <br /><br />
    <TextField required label='Enter Todo' variant='outlined' name='sname' value={inp.sname} onChange={inputhandler} ></TextField>
   <TextField required label='Quantity' variant='outlined' name='quant' value={inp.quant}  onChange={inputhandler}></TextField> 
    <TextField required label='Description' variant='outlined'  name= 'descript' value={inp.descript} onChange={inputhandler} ></TextField>
    <br></br>
    <br></br>
    
    <Button variant='contained' color='error' onClick={addhandler}>Add Todo</Button>

<br /><br /><br /><br /><br />
    {/* <ul>
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
     
    </ul> */}

<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="center" style={{color:'red'}}>ToDo</TableCell>
        <TableCell align="center" style={{color:'green'}}>Quantity</TableCell>
        <TableCell align="center" style={{color:'blue'}}>Description</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((val,i)=>{
        return(
               <TableRow key={i}>
                  <TableCell align='center'>{val.sname}</TableCell>
                  <TableCell align='center'>{val.quant}</TableCell>
                  <TableCell align='center'>{val.descript}</TableCell>
              
               </TableRow>
        )
      })

      }
    </TableBody>
  </Table>
</TableContainer>

    
    
    </div>
  )
}

export default Todolist