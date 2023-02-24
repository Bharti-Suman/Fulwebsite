import React from 'react'
import { Drawer,List, ListItemButton, ListItemIcon, ListItemText,IconButton}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES=["Home","Category Search",
"Technology Search",
"Professional domain data",
"Technology Compare",
"Email Verification",
"Pricing",
"Blog",
"Login",
"Sign up"]

const DrawerComp = () => {
    const[openDrawer,setOpenDrawer]=React.useState(false);
  return (
    <React.Fragment>
         <Drawer open={openDrawer}
         onClose={()=>setOpenDrawer(false)}
         >
            <List>
            {
                PAGES.map((page,index)=>(
                    <ListItemButton onClick={()=>setOpenDrawer(false)}key={index}>
                    <ListItemIcon>
                        <ListItemText>
                            {page}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                  
                ))
              }
                
            </List>
        </Drawer>
        <IconButton sx={{color:"white",marginLeft:"auto"}}onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
        </React.Fragment>
  )
}

export default DrawerComp
