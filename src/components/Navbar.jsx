import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                
                <Typography variant='h4' style={{color:'yellow',fontFamily:'cursive'}}>ToDo Applicaton</Typography>
               
            </Toolbar>
        </AppBar>
    </div>

  )
}

export default Navbar