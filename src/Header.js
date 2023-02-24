import React ,{useState}from 'react'
import { AppBar ,Tabs,Tab,Typography,Toolbar,Button,useMediaQuery,useTheme
}from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import DrawerComp from './DrawerComp';
const PAGES=["Home",
"Features",
"Pricing",
"Blog"]

const Header = () => {
  
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <React.Fragment>
        <AppBar sx={{background:"pink", position:"fixed"}}>
          <Toolbar>
            < StoreIcon />
            { isMatch?(
              <>
              <Typography sx={{fontSize:"1.5rem",paddingLeft:"10%"}}>FUL.io</Typography>
              <DrawerComp/>
              
                </>
            ):(<> <Tabs sx={{margin:"auto auto"}} textColor="inherit">
              {
                PAGES.map((page,index)=>(
                  <Tab key={index} label={page}/>
                ))
              }
              
               
               
          </Tabs>
          
          <Button variant="contained">Login</Button>
         
          <Button sx={{marginLeft:"10px"}} href="#contained-buttons" variant="outlined">
            Signup
            </Button>
            </>

            )}
            {/* <Typography sx={{color:"black"}}>
              Ful.io 
            </Typography> */}
           
            </Toolbar>
            
          </AppBar>
          </React.Fragment>
        
      
    </div>
  )
}

export default Header
